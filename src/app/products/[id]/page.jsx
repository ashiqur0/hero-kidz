import { getSingleProducts } from "@/actions/server/products";
import Image from "next/image";
import { FaStar, FaCheckCircle } from "react-icons/fa";

// meta data for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProducts(id);

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: "https://i.ibb.co.com/cK8sGvgm/Product-Page-Preview.png",
          width: 1200,
          height: 630,
          alt: "Product Page Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: ["https://i.ibb.co.com/cK8sGvgm/Product-Page-Preview.png"],
    },
  };
}

const ProductDetails = async ({ params }) => {

    const { id } = await params;
    const product = await getSingleProducts(id);
    
    const { title, bangla, image, price, discount, ratings, reviews, sold, description, info, qna, } = product;

    const finalPrice = discount
        ? Math.round(price - (price * discount) / 100)
        : price;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="bg-base-100 rounded-lg shadow p-4">
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        className="rounded-lg w-full object-cover"
                    />
                </div>

                {/* Info */}
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-gray-500">{bangla}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-400" />
                        <span className="font-medium">{ratings}</span>
                        <span className="text-sm text-gray-500">
                            ({reviews} reviews · {sold} sold)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mt-3">
                        <span className="text-3xl font-bold text-primary">
                            ৳{finalPrice}
                        </span>
                        {discount > 0 && (
                            <>
                                <span className="line-through text-gray-400">
                                    ৳{price}
                                </span>
                                <span className="badge badge-secondary">
                                    {discount}% OFF
                                </span>
                            </>
                        )}
                    </div>

                    {/* Action */}
                    <button className="btn btn-primary mt-4 w-full md:w-auto">
                        Add To Cart
                    </button>

                    {/* Highlights */}
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">Key Features</h3>
                        <ul className="space-y-2">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <FaCheckCircle className="text-success" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Q&A */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-3">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                    {qna.map((item, index) => (
                        <div key={index} className="collapse collapse-arrow bg-base-100 shadow">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium">
                                {item.question}
                            </div>
                            <div className="collapse-content text-gray-600">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;