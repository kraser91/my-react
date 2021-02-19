 

import chatReducer from "./chatReducer"
import contentReducer from "./contentReducer"




let store =  { 
    _state: {  
        dataChat: { 
            dataName: [ 
                {id: 1, name: 'Victor'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Aleksandr'},
                {id: 5, name: 'Nastya'},
                {id: 6, name: 'Vasya'} 
            ], 
            dataMessage: [ 
               {id:1, message:'bla-bla'},
               {id:2, message:'yo-yo'},
               {id:3, message:'bla-bla'},
            ],  
            newMessage: 'some message'
        },
          
        dataMenu: { 
            myMenu: [ 
                {id:1, name:'News', url:'news'},
                {id:2, name:'Posts', url:'posts'},
                {id:3, name:'My profile', url:'content'},
                {id:4, name:'Chat', url:'chat'},
                {id:5, name:'Contacts', url:'contacts'}
            ], 
            dataActiveUser: [ 
                {id: 1, name: 'Vanya', status: 'online'},
                {id: 2, name: 'Nastya', status: 'online'},
                {id: 3, name: 'Sasha', status: 'online'}
              ]
        },   
        
        dataContent: { 
            dataPost: [ 
                {id: 1, postText: 'Hi. How are you?))', like: 6},
                {id: 2, postText: 'Thanks. Everything is good', like: 10},
                {id: 3, postText: 'Sveta', like: 25},
                {id: 4, postText: 'Aleksandr', like: 35},
                {id: 5, postText: 'Nastya', like: 48}
            ], 
            newPostText: 'some text'
        }  
    },  
    getState() { 
        return this._state
    },
    reRender() { 
        console.log('changed')
    }, 
    subscribe(observer) { 
        this.reRender = observer
    },  
    dispatch(action) {
        this._state.dataContent = contentReducer(this._state.dataContent, action)
        this._state.dataChat = chatReducer(this._state.dataChat, action)
        this.reRender(this._state) 
    }
}  





























// export const newPostChangeCreator = () => ({ type: NEW_POST })
       
// export const onAreaChangeCreator = (newValue) => ({ type: ON_AREA_CHANGE, newText: newValue })

export default store;