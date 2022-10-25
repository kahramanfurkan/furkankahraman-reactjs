import React,{memo} from "react";
import ProductsContainer from "../components/ProductsContainer";
import ProductCard from "../components/ProductCard";
import { useSelector,useDispatch } from "react-redux";
import { favoritesData,setFavoritesList } from "../store/favoritesSlice";

const Favorites = () => {
    const {favoritesList} = useSelector(favoritesData);
    const dispatch = useDispatch();

    return (
      <div className="h-full flex flex-col items-center justify-center py-10">
        <h1 className="text-2xl font-bold uppercase">Your Favorites</h1>

        {favoritesList.length > 0 && (
          <ProductsContainer>
            {favoritesList?.map((item, i) => (
              <ProductCard
                key={i}
                id={item.id}
                avatar={item.avatar}
                name={item.name}
                price={item.price}
              />
            ))}
          </ProductsContainer>
        )}

        {favoritesList.length <= 0 && (
          <div>
            <p className="text-xl mt-5 italic px-4">You haven't added a favorite product yet.</p>
          </div>
        )}
      </div>
    );
};

export default memo(Favorites);