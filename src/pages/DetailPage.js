import React, { memo,useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {notification} from 'antd';
import Loading from '../components/Loading';

const DetailPage = () => {
    let {id}= useParams();
    const [item,setItem] = useState();
    const[loading,setLoading] = useState(true);
    
    useEffect(()=> {
        if (id) {
            getProduct(id);
        }
    },[id]);

    const getProduct = (id) => {
        axios.get(`https://upayments-studycase-api.herokuapp.com/api/products/${id}`)
        .then((res)=> {
            setItem(res.data.product);
            setLoading(false);
        })
        .catch((e)=> {
            setLoading(false);
            notification.error( {
                message: e.message,
                description: 'Product Not Found',
                duration: 2
            });
        })
    };


    return (
        <div className="py-10 flex justify-center items-center lg:h-[100vh] lg:p-10">
            {item && 
            <div className="w-[80%] shadow-2xl overflow-hidden rounded-lg flex flex-col lg:flex-row lg:h-[500px]">
                <div className="lg:w-1/2">
                    <img 
                    alt="ProductImageHere" 
                    src={item?.avatar}
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-5 overflow-auto lg:w-1/2">
                    <p className="text-2xl font-bold">{item?.name}</p>
                    <p>{item?.description}</p>
                    <p className="text-2xl font-bold">$ {item?.price}</p>
                </div>
            </div>}

            {loading && <Loading/>}
        </div>
    );
};

export default memo(DetailPage);