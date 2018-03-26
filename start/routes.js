'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('home')

// > Route for get : Content 
// ----------------------------------------------
// Route.get('/content', 'ContentController.index')

// Route.get('/', ({ request, response }) => {
//   response.json({
//     greeting: 'Hello world in JSON'
//   })
//   //   return { greeting: 'Hello world in JSON' }
// })

// Customers 
Route.get('/content', 'ContentController.index')

// > find one content
Route.get('/content/:id', 'ContentController.show')
      .middleware([
  'findContent'
])

Route.post('/content', 'ContentController.store')

Route.patch('Content/:id', 'ContentController.update')
.middleware([
  'findContent'
])

Route.delete('Content/:id', 'ContentController.delete')
.middleware([
  'findContent'
])





