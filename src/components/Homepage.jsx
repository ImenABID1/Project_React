import React from 'react';
import millify from 'millify';
import { Typography, Row,Col, Statistic } from 'antd';
import { Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../Service/cryptoApi';
import { Cryptocurrencies, News } from '.';
const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const gloabalStats = data?.data?.stats;
  if(isFetching) return 'loading...';

  return <div>
      <Title level={2} className="heading"> Global Crypto stat</Title>
      < Row>
      <Col span={12}>< Statistic title="total Cryptocurrencies" value={gloabalStats.total}/></Col>  
      <Col span={12}>< Statistic title="total Exchanges" value={millify(gloabalStats.totalExchanges)}/></Col>      
      <Col span={12}>< Statistic title="total Market Cap" value={millify(gloabalStats.totalMarketCap)}/></Col>      
      <Col span={12}>< Statistic title="total 24h Volume" value={millify(gloabalStats.total24hVolume)}/></Col>      
      <Col span={12}>< Statistic title="total Markets" value={millify(gloabalStats.totalMarkets)}/></Col>          
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world </Title>
        <Title level={3} className="show-more"><Link to="/cryptocurencies">Show more </Link></Title>
      </div>
      <Cryptocurrencies simplified></Cryptocurrencies>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show more </Link></Title>
      </div>
      <News simplified></News>
  </div>;
};

export default Homepage;

