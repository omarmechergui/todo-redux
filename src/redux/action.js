import { ADDTASK, DARK, DELETETASK, EDITTASK } from "./action_type"

export const addtask = (data)=>{
    return{
        type:ADDTASK,
        payload:data
    }
}

export const deletetask =(id) =>{
    return{
        type:DELETETASK,
        payload:id
    }

}
export const edittask = (id) =>{
    return{
        type:EDITTASK,
        payload:id
    }
}

export const chengetheme =() =>{
    return{
        type: DARK
    }
}