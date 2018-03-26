'use strict'
const Content = use('App/Models/Content');
const User = use('App/Models/User');
const Database = use('Database')

class ContentController {

  async index ({ view , response }) {
    // > get all my content 
    const about = await Database.from('contents').where('section_name', 'about')
    // > make request one by one

    console.log(content);

    return view.render('home' , {
      content : content
    })

    response .json({
      message :  " here is your content", 
      data : content
    })
  } 

  async create () {
  }

  async store ({ request, response, params : { id } }) {
    const { identifier, type, data, user_id , section_name} = request.post()
  
    // > save and get instance bac
    const content = await Content.create({ identifier, type, data, user_id , section_name})

    response.json({
      message: 'Successfully create about content',
      data: content
    })
    // > Insert one user for test
    // --------------------------------
    // > Intantiant content table
      
    // const user = new User();

    // user.username = 'ben'
    // user.email = "ben@yahoo.fr"
    // user.password = "azerty"
    // // > Insert to table user
    // await user.save() 
   

  }

  async show ({ request, response, params : { id } }) {
    
    const currentContent = request.post().currentContent
    
  
      response.status(200).json({
        message : 'Here is your content', 
        data: currentContent 
      })
    
   
  }

  async edit () {
  }

  async update ({ response, request, params : { id }}) {
    
      // > find it
      const { identifier, type, data, user_id, currentContent } = request.post()

      // > update individually
      currentContent.identifier = identifier
      currentContent.type = type
      currentContent.data = data
      currentContent.user_id = user_id

      // > save into table
      await currentContent.save()

      response.status(200).json({
        message : 'successfull update this content', 
        data: currentContent 
      })
     
    
  }

  async destroy () {
  }

  async delete ({ request, response, params : { id }}) {
      const currentContent = request.post().currentContent

      // > delete it if you find it
      await currentContent.delete()

      response.status(200).json({
        message : 'successfull delete this content', 
        id 
      })
  } 

}

module.exports = ContentController
