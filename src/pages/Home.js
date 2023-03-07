import Filters from "../components/Filters";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
    productState:{byStock, byFastDelivery, sort, byRating, searchQuery}
  } = CartState();

  const transFormProducts = () =>{
      let sortedProducts = products;
      if(sort){
        sortedProducts = sortedProducts.sort((a,b)=>
          sort === 'lowToHigh'?a.price-b.price:b.price-a.price
        )
      }

      if(!byStock){
        sortedProducts = sortedProducts.filter(product => product.inStock)
      }

      if(byFastDelivery){
        sortedProducts = sortedProducts.filter(product => product.fastDelivery)
      }

      if(byRating){
        sortedProducts = sortedProducts.filter(product => product.rating >= byRating)
      }

      if(searchQuery){
        sortedProducts = sortedProducts.filter(products => products.name.toLowerCase().includes(searchQuery))
      }

      return sortedProducts
      
  }
    return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transFormProducts().map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
