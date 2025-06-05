import React from 'react';
import Banners from '../../HomePagecomponents/Banners/banner';
import Categories from '../../HomePagecomponents/Category/category';
import Allproducts from '../../HomePagecomponents/AllProduct/Allproduct';
import BestSellerProduct from '../../HomePagecomponents/NewProduct/Newproduct';
import TopBrands from '../../HomePagecomponents/TopBrands/Topbrands';
import SmartWatch from '../../HomePagecomponents/SmartWatch/smartwatch';
import OurBlogs from '../../HomePagecomponents/OurBlog/OurBlog';
import FeatureIcons from '../../HomePagecomponents/Feature/Fearure';
import Footer from '../../HomePagecomponents/Footer/Footer';
const Home = () => {
  return (
    <>
      <Banners />
      <Categories />
      <Allproducts />
      <BestSellerProduct />
      <TopBrands />
      <SmartWatch />
      <OurBlogs />
      <FeatureIcons />
      <Footer />

    </>
  )
}
export default Home;