export var initialState={
    userName:"",
    password:""
}

// action={
//     type:"VALUES",
//     userName:"",
//     password:""
// }

export function ValuesReducer(state,action){
        if(action.type === "VALUES"){
            initialState={...initialState,userName:action.userName,password:action.password}
            return initialState
        }
        else{
            return initialState
        }
}