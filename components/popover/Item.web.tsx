import React from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
import Touchable from 'rc-touchable';
import Icon from '../icon';

export default class Item extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-popover',
    disabled: false,
  };
  static myName = 'PopoverItem';

  render() {
    let [{ children, className, prefixCls, iconName, disabled, firstItem, activeStyle }, restProps] =
      splitObject(this.props,
        ['children', 'className', 'prefixCls', 'iconName', 'disabled', 'firstItem', 'activeStyle']);

    const cls = {
      [className as string]: !!className,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled,
    };

    let activeClass = `${prefixCls}-item-active `;
    if (firstItem) {
      activeClass += `${prefixCls}-item-fix-active-arrow`;
    }

    return (
      <Touchable disabled={disabled} activeClassName={activeClass} activeStyle={activeStyle}>
        <div className={classNames(cls)} {...restProps}>
          <div className={`${prefixCls}-item-container`}>
            {iconName ? <span className={`${prefixCls}-item-icon`}><Icon type={iconName} /></span> : null}
            <span className={`${prefixCls}-item-content`}>{children}</span>
          </div>
        </div>
      </Touchable>
    );
  }
}