const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM ='BUY_ICECREAM'

function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}
function buyIcecream(){
    return{
        type:BUY_ICECREAM,
        info:'Second redux action'
    }
}
//(prevState,action) => newState
// const initialState ={
//     numOfCakes:10,
//     numOfIcream: 20
// }
const initialCakeState ={
    numOfCakes:10
}
const initialIcreamState = {
    numOfIcream:20
}

// const reducer = (state = initialState, action) =>{
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return{
//             ...state,
//             numOfIcream: state.numOfIcream - 1
//         }

//         default: return state
//     }
// }

const CakeReducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
       
        default: return state
    }
}

const IcecreamReducer = (state = initialIcreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcream: state.numOfIcream - 1
        }

        default: return state
    }
}

  const rootReducer = combineReducer({
      cake:CakeReducer,
      icecream:IcecreamReducer
  })
const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Initial state',store.getState())
// const unsubscribe= store.subscribe(()=>
// console.log('Upadate state',store.getState()))
const unsubscribe= store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()