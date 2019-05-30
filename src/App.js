import React, {Component} from 'react'
import NProgress from 'nprogress'
import {connect} from 'react-redux'
import Counter from './views/Counter'
import UserInfo from './views/userInfo'

class App extends Component {
	componentWillUpdate () {
		NProgress.start()
	  }
	
	  componentDidUpdate () {
		NProgress.done()
	  }
	render(){
		return ( 
			<div className = "App" >
				<p>
					App当前环境：{process.env.REACT_APP_ENV} <br />
					App Tite: {process.env.REACT_APP_NAME} <br />
					App Version：{process.env.REACT_APP_VERSION} <br />
					App Domian：{process.env.REACT_APP_DOMAIN} <br />
					App Api: {process.env.REACT_APP_API} <br />
				</p>
				<hr/>
				<Counter></Counter>
				<hr/>
				<UserInfo></UserInfo>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(App)