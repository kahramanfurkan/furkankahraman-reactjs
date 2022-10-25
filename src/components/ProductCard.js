import React,{memo} from "react";
import { Link } from "react-router-dom";
import {HeartOutlined,HeartFilled,DeleteFilled} from '@ant-design/icons';
import {useSelector,useDispatch} from 'react-redux';
import {productsData,setProductList,setCategorizedProductList} from '../store/producstsSlice'; 
import { favoritesData,setFavoritesList } from "../store/favoritesSlice";

const ProductCard = ({id,avatar,name,price}) => {
  const {productList,categorizedProductList} = useSelector(productsData);
  const {favoritesList} = useSelector(favoritesData);
  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    let newProductList,newCategorizedProductList,newFavoritesList;
    newProductList = productList?.filter(item => item._id !== id);
    newCategorizedProductList = categorizedProductList?.filter(item => item._id !== id);
    newFavoritesList = favoritesList?.filter(item => item.id !== id);
    dispatch(setProductList(newProductList));
    dispatch(setCategorizedProductList(newCategorizedProductList));
    dispatch(setFavoritesList(newFavoritesList));
  };

  const addFavorite = (item) =>{
    let favorites = [...favoritesList];
    favorites.push(item);
    dispatch(setFavoritesList(favorites));
  };

  const removeFavorite = (id) => {
    let favorites = favoritesList.filter(item => item.id !== id);
    dispatch(setFavoritesList(favorites));
  };

    return (
        <div className="w-[250px] h-[300px] bg-white sm:w-[150px] md:w-[200px] shadow-xl rounded-lg overflow-hidden hover:shadow-blue-300 hover:cursor-pointer">
          <Link className="text-black" to={`/details/${id}`}>
          <div className="w-full h-4/6">
            <img
              className="w-full h-full object-cover"
              alt="productImageHere"
              src={avatar}
            />
          </div>

          <div className="px-3">
            <div className="h-1/6  overflow-hidden truncate mt-2">
              <span title={name}>{name}</span>
            </div>

            <div className="text-lg font-bold">$ {price}</div>
          </div>
          </Link>
          <div className="float-right px-3">
              <DeleteFilled 
              className="text-xl" 
              style={{ color: "grey" }} 
              onClick={()=> deleteProduct(id)}
              title="Delete Product"
              />

              {favoritesList?.some(item => id?.includes(item.id)) ?
              <HeartFilled 
              className="text-xl ml-2"
              style={{ color: "red" }}
              onClick={()=> removeFavorite(id)}
              title="Remove from Favorites"
              /> 
              :
              <HeartOutlined
                className="text-xl ml-2"
                style={{ color: "red" }}
                onClick={()=> addFavorite({id,avatar,name,price})}
                title="Add to Favorites"
              />
            }
              
            </div>
        </div>
    );
};

export default memo(ProductCard);