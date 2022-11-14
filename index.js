// creating redux action
const BUY_CAKE = "BUY_CAKE";

// there is an action creator which returns the action
function buyCake (){
    return {
        type:BUY_CAKE,
        info:"First Redux Action"
    }
}