import http from './../utils/http'
//qs.stringify()就是把传入的对象转换为键值对

const FETCH_BANNER = "FETCH_BANNER"
const FOLLOWBUY = "FOLLOWBUY"
const initialState = {
    bannerData:[],
    followBuy:[]
}

//这是一个home页的reducer，
export function home(state=initialState,action){
    switch(action.type){
        case FETCH_BANNER:
            return {
                ...state,
                bannerData:action.payload
            }
        case FOLLOWBUY:
            return {
                ...state,
                followBuy:action.payload
            }
        default:
            return state
    }
}

//这是一个action对象，由dispatch作为参数给reducer修改state
//这里是同步
function bannerdata(data){
    return {
        payload:data,
        type:FETCH_BANNER
    }
}
function followdata(data){
    return {
        payload:data,
        type:FOLLOWBUY
    }
}

//用户调用的dispatch action函数
//这里可以处理一些异步事件，请求数据什么的
export function fetchBanner(){
    return async dispatch => {
        //
        // const data = {
            // ids: '47361,11739,6177,56254,56374,56361,56367,49492',
            // uiniqueid: '69911907638407365619',
            // timestamp: '20198275317',
            // command: 'api.good.list.get',
            // sign: '2c175860027ed15f95a44aa2f0bd7ba5'
        // }
        // const res = await http.post('/api',data)
        // console.log(res)
        // dispatch(bannerdata(res.data.list))
        const res = await http.get('/mock/banner.json',{})
        dispatch(bannerdata(res.data.data))
    }
}
//改变内部 state 惟一方法是 dispatch 一个 action: store.dispatch({type: 'ADD_TODO', text: 2})

//这是获取首页“跟随购”的数据
export function fetchFollow(){
    return async dispatch =>{
       const res = await http.get("/jsonserver",{})
       console.log(res.data)
       dispatch(followdata(res.data.data))
    }
}
