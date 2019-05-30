import {combineReducers} from 'redux'
//一个项目有很多reducer，整合reducer
import counter from './reducers/counter'
import userInfo from './reducers/userInfo'

export default combineReducers({
    counter,
    userInfo
})
