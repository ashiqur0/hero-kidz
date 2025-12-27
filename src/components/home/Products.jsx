import products from '@/app/data/toys.json';

const Products = () => {
    return (
        <div className='f'>
            <h1 className='text-center text-4xl font-bold mb-10'>Our Products</h1>

            <div className=''>
                {
                    products.map(product => <li key={product.title}>{product.title}</li>)
                }
            </div>
        </div>
    );
};

export default Products;