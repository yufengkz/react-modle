import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../redux/actions/userInfo'
import { Button, Spin, Icon} from 'antd'

class UserInfo extends Component {
    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
        return (
            <div>
                {
                    isLoading ? <Spin indicator={antIcon} /> :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.username || ''}</p>
                                    <p>email：{userInfo.email || ''}</p>
                                </div>
                        )
                }
                <Button onClick={() => this.props.getUserInfo()} type='primary'>请求用户信息</Button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: () => {
            dispatch(getUserInfo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);