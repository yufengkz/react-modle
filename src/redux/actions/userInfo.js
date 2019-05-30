import axios from 'axios'
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

        return axios.post(`http://localhost:3000/api/getUser`, {username: 'yufeng'}).then(data => {
            let res = data.data
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