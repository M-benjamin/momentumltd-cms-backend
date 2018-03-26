'use strict'
const Content = use('App/Models/Content')

class FindContent {
  async handle ({ request, response, params : { id } }, next) {
    // call next to advance the request
    const currentContent = await Content.find(id)

    if( !currentContent ) {
      return response.status(404).json({
        message: 'Customer not found',
        id
      })
    }
    
    request.body.currentContent = currentContent

    await next()
  }
}

module.exports = FindContent
