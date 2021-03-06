import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../Service/cryptoApi';
const Cryptocurencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const filtredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filtredData);
  }, [cryptosList, searchTerm]
  );
  if(isFetching) return 'loading...';
  return <div>
    {!simplified && (
    <div className="search-crypto">
<Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} /> 
    </div>)}
    <Row gutters={[32, 32]} className="crypto-card-container">
      {cryptos?.map((currency) => (
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid} >
          <Link key={currency.uuid} to={`/cryptoDetails/${currency.uuid}`}>
            <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className="crypto-image" src={currency.iconUrl} />}
              hoverable>
              <p>Price: {millify(currency.price)}</p>
              <p>Market Cap: {millify(currency.marketCap)}</p>
              <p>Daily change: {millify(currency.change)}%</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    
  </div>
};

export default Cryptocurencies;
