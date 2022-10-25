import React, { useEffect,memo,useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { categoriesData, setCategoriesList,setSelectedCategory, failed } from "../store/categoriesSlice";
import { productsData, setCategorizedProductList } from "../store/producstsSlice";
import { Select } from "antd";

const { Option } = Select;

const CategoriesDropdown = () => {
  const { categoriesList,selectedCategory, loading } = useSelector(categoriesData);
  const {productList} = useSelector(productsData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categoriesList.length) {
      getAllCategories();
    }
  }, [categoriesList]);

  const getAllCategories = () => {
    axios
      .get("https://upayments-studycase-api.herokuapp.com/api/categories/")
      .then((res) => {
        if (res.data.categories?.length) {
          dispatch(setCategoriesList(res.data.categories));
        }
      })
      .catch((e) => {
        dispatch(failed(e.message));
      });
  };

  const filterProducts = (value) => {
    let filteredList = productList?.filter(item => item?.category === value);
    console.log(filteredList);
    dispatch(setCategorizedProductList(filteredList));
  }

  const handleChange = (value) => {
        dispatch(setSelectedCategory(value));
        filterProducts(value);
  };

  return (
      <Select
      value={selectedCategory} 
      onChange={handleChange}
      >
        <Option value="all">All Products</Option>
        {categoriesList?.length > 0 &&
          categoriesList.map((item, i) => (
            <Option value={item.name} key={i}>
              {item?.name}
            </Option>
          ))}
      </Select>
  );
};

export default memo(CategoriesDropdown);
