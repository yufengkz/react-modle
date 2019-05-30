import * as constants from '../constants'

// 初始化state
let initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
}

// 初始化reducer
const reducer =  (state = initState, action) => {
    switch (action.type){
        case constants.GET_USERINFO_REQUEST:
            return {
                ...state, 
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            }
        case constants.GET_USERINFO_SUCCESS:
            console.log(action)
            return{
                ...state, 
                isLoading: false,
                userInfo: action.userInfo,
                errorMsg: ''
            }
        case constants.GET_USERINFO_FAIL:
            return{ 
                ...state, 
                isLoading: false,
                userInfo: {},
                errorMsg: `数据请求失败`
            }
        default:
            return state
    }
}
export default  reducer