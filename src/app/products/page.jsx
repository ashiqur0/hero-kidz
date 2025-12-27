import { getProducts } from '@/actions/server/products';
import ProductCard from '@/components/cards/ProductCard';

const Products = async () => {

    const products = (await getProducts()) || [];

    return (
        <div className='my-10'>
            <h1 className='text-2xl font-semibold mb-2'>Total <span className='text-primary'>{products.length}</span> Products</h1>

            <div className='grid md:grid-cols-3 gap-5'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}>{product.title}</ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;