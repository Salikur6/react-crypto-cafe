import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const { id } = useParams();
    console.log(id)
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                console.log(data)
                setLoading(false);
            });
    }, [id])
    return (
        <>
            {loading ? <Spinner></Spinner> : <div className='px-4 h-[90vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                    <div className='order-2 md:order-1'>
                        <h1 className='text-3xl'>Genaral Info:</h1>
                        <hr />
                        <h1>Coin Name: {details.name}</h1>
                        <h1>Market Cap Rank: {details.market_cap_rank}</h1>
                        <h1>Origin: {details.country_origin ? details.country_origin : 'Not Found'}</h1>
                        <h1>Genesis Date: {details.genesis_date}</h1>
                        <h1>Last Updated: {details.last_updated}</h1>
                        <hr />
                        <h1 className='text-3xl'>Scores:</h1>
                        <h1>Community Score: {details.community_score}</h1>
                        <h1>Developer Score: {details.developer_score}</h1>
                    </div>
                    <div className='flex justify-center items-center order-1 md:order-2'>
                        <img src={details.image?.large} alt="coinImg" />
                    </div>
                </div>
            </div>}
        </>
    );
};

export default CoinDetails;