import React from "react";
import './categoryStyle.scss';
import CollectionItem from "../../components/collectionItem/CollectionItem";


const CategoryPage = ({match}) =>{
    console.log("i am here");
    console.log(match);
    return(
    <div className="category">
        <h2>Category Page</h2>
    </div>)
};

export default CategoryPage;