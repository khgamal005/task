import ProductDetails from './ProductDetails';
// import SuggestedProduct from './SuggestedProduct';

interface ProductDetailsPageProps {
  data: any; // Replace 'any' with your actual product type
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ data }) => {
  return (
    <div>
      {data ? (
        <>
          <ProductDetails data={data} />
          {/* <SuggestedProduct data={data} /> */}
        </>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
