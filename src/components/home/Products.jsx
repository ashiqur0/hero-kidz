import ProductCard from '../cards/ProductCard';
import { latestProducts } from '@/actions/server/products';

const Products = async () => {

    const latest_products = (await latestProducts()) || [];

    return (
        <div className=''>
            <h1 className='text-center text-4xl font-bold mb-10'>Our Products</h1>

            <div className='grid md:grid-cols-3 gap-5'>
                {
                    latest_products.map(product => <ProductCard key={product.title} product={product}>{product.title}</ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;