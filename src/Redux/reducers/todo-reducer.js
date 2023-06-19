import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types"

const initialState=[]
export default (state=initialState,action)=>{

    switch (action.type) {
        case ADD_TODO:
                return [...state,action.payload]
        case DELETE_TODO:
                const newState=state.filter((todo)=>todo.id!==action.payload)
                return newState

        case UPDATE_TODO:
        
                const updateState=state.map(todo=>{
                    
                    if(todo.id===action.state.payload){
                        todo.title=action.payload.todo.title
                        todo.description=action.payload.todo.description
                    }
                    return todo;
                })
                    return updateState
        default:
            return state;
    }
        
    




//     if (action.type===ADD_TODO) {
//         //Add todo
//     } else if(action.type===DELETE_TODO){
//         //Delete todo
//     }else if(action.type===UPDATE_TODO){
//         //Update todo
//     }



}