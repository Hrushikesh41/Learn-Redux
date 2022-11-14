// creating redux action
const BUY_CAKE = "BUY_CAKE";

// there is an action creator which returns the action
function buyCake (){
    return {
        type:BUY_CAKE,
        info:"First Redux Action"
    }
}

// Reducer = (previous state, action) ==> new State

const initialState = {
    numberOfCAke : 10
}

// creating a reducer function

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numberOfCAke : state.numberOfCAke - 1
        }

        default : return state
    }
}