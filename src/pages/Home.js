import React, { memo, useEffect } from "react";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setProductList,failed,productsData} from "../store/producstsSlice";
import {Alert} from 'antd';
import ProductCard from "../components/ProductCard";
import ProductsContainer from "../components/ProductsContainer";
import FunctionalButtons from "../components/FunctionalButtons";
import CategoriesDropDown from "../components/CategoriesDropDown";
import Loading from "../components/Loading";

const Home = () => {
  const {productList,categorizedProductList,loading,hasErrors,hasMessage} = useSelector(productsData);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!productList.length) {
      getAllProducts();
    }
  }, [productList]);

  const getAllProducts = () => {
    axios.get("https://upayments-studycase-api.herokuapp.com/api/products")
    .then((res)=> {
      if(res.data.products?.length) {
        dispatch(setProductList(res.data.products));
      }
    })
    .catch((e)=> {
        dispatch(failed(e.message));
    })
};

  return (
    <div className="h-full flex flex-col items-center justify-center py-10">
      {productList.length > 0 && 
      <div>
        <span className="text-lg font-bold mr-3 text-red-600">Selected Category: </span>
        <CategoriesDropDown />
      </div>}

      {productList?.length > 0 && (
        <ProductsContainer>
          {categorizedProductList?.length > 0
            ? categorizedProductList?.map((item, i) => (
                <ProductCard
                  key={i}
                  id={item._id}
                  avatar={item.avatar}
                  name={item.name}
                  price={item.price}
                />
              ))
            : productList?.map((item, i) => (
                <ProductCard
                  key={i}
                  id={item._id}
                  avatar={item.avatar}
                  name={item.name}
                  price={item.price}
                />
              ))}
        </ProductsContainer>
      )}

      {!productList.length > 0 && hasErrors && (
        <Alert type="error" closable message={hasMessage} />
      )}

      {loading && <Loading/>}
      
      {productList.length > 0 && <FunctionalButtons />}
    </div>
  );
};

export default memo(Home);
