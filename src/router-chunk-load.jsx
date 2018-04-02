/**
 *
 *  Created by youli on 2017/12/27
 *
 */

import React from 'react';
import {Router} from 'dva/router';
import Layout from './components/layout/index';
import UserInfo from './routes/user/info';

import ProductList from './routes/product/list';
import ProductDetail from './routes/product/detail';

import { AddOrder } from './routes/pay/addOrder';
import { PayResult } from './routes/pay/result';

import { OrderList } from './routes/order/list';
import { OrderDetail } from './routes/order/detail';

import { AddAddress } from './routes/address/add';
import { AddressCheckList } from './routes/address/checkList';
import { AddressManage } from './routes/address/manage';

import { NewsList } from './routes/news/list';
const getComponent = function (nextState, cb) {
  require.ensure([], (require) => {
    cb(null, require(this.filePath));
  });
};

function RouterConfig({history, app}) {

  const account = {
    path: 'account',
    /*getChildRoutes(location, callback) {
      require.ensure([], function (require) {
        callback(null, [
          routerCache.get('./routes/account/editLoginPwd', require),
          routerCache.get('./routes/account/editPayPwd', require),
        ])
      })
    },*/
    childRoutes: [
      {
        path: 'login',
        component: require('./routes/account/login'),
      },
      {
        path: 'regist',
        component: require('./routes/account/regist'),
      },
      {
        path: 'editLoginPwd',
        filePath: './routes/account/editLoginPwd',
        getComponent,
      },
      {
        path: 'editPayPwd',
        filePath: './routes/account/editPayPwd',
        getComponent,
      },
      {
        path: 'sign',
        filePath: './routes/account/sign',
        getComponent,
      },
      {
        path: 'signSuccess/:amount',
        filePath: './routes/account/signSuccess',
        getComponent,
      },
      {
        path: 'report/:startTime/:endTime',
        filePath: './routes/account/report',
        getComponent,
      },
      {
        path: 'reportAddIntegral/:startTime/:endTime',
        filePath: './routes/account/reportAddIntegral',
        getComponent,
      },
      {
        path: 'reportSpeedIntegral/:startTime/:endTime',
        filePath: './routes/account/reportSpeedIntegral',
        getComponent,
      },
      {
        path: 'reportRecommendPeople/:startTime/:endTime',
        filePath: './routes/account/reportRecommendPeople',
        getComponent,
      },
      {
        path: 'reportTodayIntegral/:startTime/:endTime',
        filePath: './routes/account/reportTodayIntegral',
        getComponent,
      },
      {
        path: 'selectDate',
        filePath: './routes/account/selectDate',
        getComponent,
      }
    ]
  };

  const user = {
    path: 'user',
    childRoutes: [
      {
        path: 'userInfo',
        component: UserInfo,
      }
    ],
  };

  const seller = {
    path: 'seller',
    childRoutes: [
      {
        path: 'list',
        filePath: './routes/seller/list',
        getComponent,
      },
      {
        path: 'detail/:sellerId',
        filePath: './routes/seller/detail',
        getComponent,
      },
      {
        path: 'rate',
        filePath: './routes/seller/rate',
        getComponent,
      }
    ]
  };

  const product = {
    path: 'product',
    childRoutes: [
      {
        path: 'index',
        component: UserInfo,
      },
      {
        path: 'list',
        component: ProductList,
      },
      {
        path: 'detail/:productId',
        component: ProductDetail,
      },
      {
        path: 'writeOff',
        filePath: './routes/product/writeOff',
        getComponent,
      },
      {
        path: 'writeList',
        filePath: './routes/product/writeList',
        getComponent,
      }
    ]
  };

  const pay = {
    path: 'pay',
    childRoutes: [
      {
        path: 'addOrder/:productId/:buyCount',
        component:AddOrder,
      },
      {
        path:'result/:orderId',
        component:PayResult,
      },
      {
        path:'orderList',
        component:OrderList,
      },
      {
        path:'orderDetail/:orderId',
        component:OrderDetail,
      },
      {
        path:'aliPay/:orderId',
        filePath:'./routes/pay/alipay',
        getComponent,
      },
      {
        path:'alipayFeight/:orderId/:amount/:Result',
        filePath:'./routes/pay/alipayFeight',
        getComponent,
      },
      {
        path:'linePay/:orderId',
        filePath:'./routes/pay/linePay',
        getComponent,
      }
    ]
  };

  const order = {
    path:'order',
    childRoutes:[
      {
        path:'takeProduct/:orderId',
        filePath:'./routes/order/takeProduct',
        getComponent,
      }
    ]
  };

  const address={
    path:'address',
    childRoutes:[
      {
        path:'add',
        component:AddOrder
      },
      {
        path:'edit/:addressId',
        component:AddOrder,
      },
      {
        path:'checkList',
        component:AddressCheckList,
      },
      {
        path:'manage',
        component:AddressManage,
      }
    ]
  }

  const news={
    path:'news',
    childRoutes:[
      {
        path:'list',
        component:NewsList,
      },
      {
        path:'detail',
        filePath:'',
        getComponent,
      },
      {
        path:'fenqi/:orderId',

      }
    ]
  };

  const integral=[];

  const routes = [
    {
      path: '/',
      component: Layout,
      indexRoute: {component: UserInfo},
      childRoutes: [
        account,
        user,
        seller,
        product,
        pay,
        order,
        address,
      ]
    }
  ];

  return <Router history={history} routes={routes}/>;

}

export default RouterConfig;
