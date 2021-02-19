
const initialState =  { 
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
}   

const menuReducer = (state = initialState, action) => { 
    return state
   
} 

export default menuReducer