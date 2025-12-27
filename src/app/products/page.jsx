import products from '@/app/data/toys.json';
import ProductCard from '@/components/cards/ProductCard';

const Products = () => {
    return (
        <div className='my-10'>
            <h1 className='text-2xl font-semibold mb-2'>Total <span className='text-primary'>{products.length}</span> Products</h1>

            <div className='grid md:grid-cols-3 gap-5'>
                {
                    products.map(product => <ProductCard key={product.title} product={product}>{product.title}</ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;