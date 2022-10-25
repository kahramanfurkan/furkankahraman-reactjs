import React,{memo} from "react";
import CategoriesDropDown from "./CategoriesDropDown";

const ProductsContainer = ({ children }) => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-9 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
};

export default memo(ProductsContainer);