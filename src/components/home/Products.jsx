import products from '@/app/data/toys.json';
import ProductCard from '../cards/ProductCard';

const Products = () => {
    return (
        <div className=''>
            <h1 className='text-center text-4xl font-bold mb-10'>Our Products</h1>

            <div className='grid md:grid-cols-3 gap-5'>
                {
                    products.map(product => <ProductCard key={product.title} product={product}>{product.title}</ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;