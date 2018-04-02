/**
 *
 *  Created by youli on 2017/11/8
 *
 */

import React from 'react';
import { connect } from 'dva';
 
import * as style from './login.less';


class Login extends React.Component {

  componentDidMount() {
     
  }

 
  render() {
     
    return (

       <div>登录</div>
    );
  }
}
/* const Page = ({ form, dispatch }) => {


  if(isLogin())   {
        const token = getStorage(storageKey.userToken);
        http(getLoginState,{token:token}).then((data)=>{
            //1 代表登录
            if(data.IsLogin){
              loginSuccess({token:token});
            }
        });

      }


};*/

 

export default {
  Login
};

