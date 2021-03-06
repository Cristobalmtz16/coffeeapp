export const getAllCoffeesReducer=(state={coffees  : []}, action)=>{

    switch(action.type)
    {
        case 'GET_COFFEES_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_COFFEES_SUCCESS' : return{
            loading : false,
            coffees : action.payload
        }
        case 'GET_COFFEES_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default  : return state

    }
}

export const getCoffeeByIdReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'GET_COFFEEBYID_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_COFFEEBYID_SUCCESS' : return{
            loading : false ,
            coffee : action.payload
        }
        case 'GET_COFFEEBYID_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}

export const addCoffeeReducer=(state={ }, action)=>{

    switch(action.type)
    {
        case 'ADD_COFFEE_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'ADD_COFFEE_SUCCESS' : return{
            loading : false,
            success:true,
        }
        case 'ADD_COFFEE_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default  : return state

    }
}

export const editCoffeeReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'EDIT_COFFEE_REQUEST' : return{
            editloading : true,
            ...state
        }
        case 'EDIT_COFFEE_SUCCESS' : return{
            editloading : false ,
            editsuccess : true,
        }
        case 'EDIT_COFFEE_FAILED' : return{
            editerror : action.payload ,
            editloading : false
        }
        default : return state
    }

}