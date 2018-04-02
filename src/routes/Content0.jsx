import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import * as style from './less/content0.less';
 
class Content0 extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMode;
    console.log(this.props);
    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}

        className={style.banner0}

      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={style.banner0Wrapper}
          key="text"
          id={`${props.id}-wrapper`}
        >
       
          <Button type="ghost" key="button" id={`${props.id}-button`}>
            Learn More
          </Button>
        </QueueAnim>

        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={style.banner0Icon}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>

      </OverPack>
    );
  }
}

Content0.propTypes = {
  className: PropTypes.string,
};

Content0.defaultProps = {
  className: 'banner0',
};

export default Content0;
