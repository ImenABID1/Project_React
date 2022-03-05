import React from 'react';
import {  Typography, Avatar, Button, Menu} from 'antd';
import {Link} from 'react-router-dom';
//import { BulbFilled, BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons/lib/icons';
//import { MenuOutlined, FundOutlined, BulbOutlined, HomeOutlined, MoneyCollectOutlined} from '@ant-design/icons';
//buttom, Menu,


import { HomeOutlined, FundOutlined, MoneyCollectOutlined, BulbOutlined} from '@ant-design/icons/lib/icons';
const Navbar = () => {
  return <div className='nav-container' >
<div className='logo-container'>
<Avatar  size="large"/>
    <Typography.Title level={2} className='logo'>
        <Link to="/"></Link>
    </Typography.Title>
    <Button></Button>
</div>
<Menu theme="dark">
<Menu.Item icon={<HomeOutlined/>}>
<Link to='/'>Home</Link>
</Menu.Item>
<Menu.Item icon={<FundOutlined/>}>
<Link to='/cryptocurencies'>Cryptocurrencies</Link>
</Menu.Item>
<Menu.Item icon={<MoneyCollectOutlined/>}>
<Link to='/exchanges'>Exchanges</Link>
</Menu.Item>
<Menu.Item icon={<BulbOutlined/>}>
<Link to='/news'>News</Link>
</Menu.Item>
</Menu>
  </div>;
};

export default Navbar;
