import renderRoutes from './utils/react-router-config/renderRoutes'
import {Link} from 'react-router-dom'
import React from 'react'
import { Tabs, Button,Menu } from 'antd';

import styles from './app.sass'
import './antd.less'

import { connect } from './utils/ecos'
import model from './models'

import LoginForm from './components/pages/LoginForm'
import MainPage from './components/pages/MainPage'

const TabPane = Tabs.TabPane;
class Demo extends React.Component {
  constructor(props) {
    super(props);
  }
  submit(){
    this.props.dispatch({
      type: '//setLogin',
      payload: true
    })
  }
  render() { 
    let output = <LoginForm 
                  submit={this.submit.bind(this)}
                  ></LoginForm>
    if(this.props.reduxState.login){
      output = <MainPage>{renderRoutes(this.props.route.routes)}</MainPage>
    }
    return (
      <div className="page-wrap">
        {output}
      </div>
    );
  }
}

export default connect(model)(Demo,true)