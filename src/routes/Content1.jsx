import React , { PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import * as style from './less/content1.less';

class Content1 extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <QueueAnim delay={300} className="queue-simple">

        

          <div key="a"  className={style.content1Content}>
            <img style={{width: '160px'}} src="https://angularjs.org/img/angularjs-for-header-only.svg"/>
             
          </div>


          <div key="b"  className={style.content1Content}>
            <img style={{width: '160px'}} src="https://angular.cn/assets/images/logos/angular/logo-nav@2x.png"/>
            
          </div>



          <div key="c" className={style.content1Content}>
            <img style={{width: '160px'}} src="http://react-china.org/uploads/default/38/c4b96a594bd352e0.png"/>
           
          </div>




          <div key="d" className={style.content1Content}>
             <img style={{width: '160px'}} src="https://cn.vuejs.org/images/logo.png"/>Vue.js
          
          </div>


       
      </QueueAnim>
    );
  }
}

Content1.propTypes = {
  className: PropTypes.string,
};

Content1.defaultProps = {
  className: 'banner1',
};


export default Content1;
