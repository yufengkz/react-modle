import axios from '../../lib/axios'
import * as constants from '../constants'

export const getUserinfoRequest = () => {
    return {type: constants.GET_USERINFO_REQUEST}
}

export const getUserinfoSuccess = (userInfo) => {
    return {
        type: constants.GET_USERINFO_SUCCESS,
        userInfo: userInfo
    }
}

export const getUserinfoFail = () => {
    return {type: constants.GET_USERINFO_FAIL}
}

export const getUserInfo = () => {
    return (dispatch) => {
        dispatch(getUserinfoRequest())

        return axios.post(`/getUser`, {username: 'yufeng'}).then(data => {
            let res = data.data
            console.log(res)
            if(res.code === 0){
                setTimeout(() => {
                    dispatch(getUserinfoSuccess(res.data))
                }, 2000)
            }else{
                dispatch(getUserinfoFail())
            }
        }).catch(() => {
            dispatch(getUserinfoFail())
        })
    }
}