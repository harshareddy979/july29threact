export var initialState={
    userName:"",
    password:"",
    mobileNumber:""
}

// action={
//     type:"VALUES",
//     userName:"",
//     password:"",
//      mobileNumber:""
// }

export function ValuesReducer(state,action){
        if(action.type === "VALUES"){
            initialState={...initialState,userName:action.userName,password:action.password,mobileNumber:action.mobileNumber}
            return initialState
        }
        else{
            return initialState
        }
}