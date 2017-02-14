---
order: 1
title: 大小
---

````jsx
import { Icon, Grid } from 'antd-mobile';

const Demo = () => {
  const size = ['xxs', 'xs', 'sm', 'md', 'lg'];
  const data = size.map(item => ({
    icon: (<Icon type="search" size={item} />),
    text: item,
  }));
  return (<Grid data={data} columnNum={5} hasLine={false} />);
};
ReactDOM.render(<Demo />, mountNode);
````

