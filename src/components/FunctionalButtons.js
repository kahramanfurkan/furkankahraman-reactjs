import React, { memo, useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { HeartFilled } from "@ant-design/icons";
import AddProductModal from "./AddProductModal";
import { Link } from "react-router-dom";
import {favoritesData} from '../store/favoritesSlice';
import { useSelector } from "react-redux";

const FunctionalButtons = () => {
  const {favoritesList} = useSelector(favoritesData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="fixed bottom-0 right-0 mr-5 mb-16 flex flex-col lg:mr-10 lg:mb-20">
        <span title="Add Product">
          <PlusCircleFilled
            className="text-5xl cursor-pointer"
            style={{ color: "#3f71e8" }}
            onClick={() => setIsModalOpen(true)}
          />
        </span>

        <Link to="/favorites">
          <span title="Favorites" className="relative">
            <HeartFilled
              className="text-5xl mt-3 cursor-pointer"
              style={{ color: "red" }}
            />

            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-[7px] text-white font-bold text-lg">
              {favoritesList.length}
              </span>
          </span>
        </Link>
      </div>

      <AddProductModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default memo(FunctionalButtons);
