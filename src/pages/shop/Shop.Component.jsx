import React from 'react'
// import CollectionsOverviewComponent from '../../components/collection-overview/collections.overview.component';
import { Route } from 'react-router-dom';
// import collectionsOverviewComponent from '../../components/collection-overview/collections.overview.component';
import CategoryPage from '../category/categoryComponent';
import collectionsOverviewComponent from '../../components/collectionsOverview/collectionsOverviewComponent';


const ShopPage = ({ match }) =>(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={collectionsOverviewComponent} />
    <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);


export default ShopPage;