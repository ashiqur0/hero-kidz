import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import AddToCurt from "../buttons/AddToCurtButton";

const ProductCard = ({ product }) => {
  
  const { _id, title, image, price, discount, ratings, reviews, sold } = product;

  // calculate discounted price
  const finalPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300">
      {/* Image */}
      <figure className="px-4 pt-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="rounded-xl object-cover h-48 w-full"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-base font-semibold line-clamp-2">
          {title}
        </h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaStar className="text-yellow-400" />
          <span className="font-medium">{ratings}</span>
          <span>({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">
          Sold: <span className="font-medium">{sold}</span>
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">
            ৳{finalPrice}
          </span>
          {discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Button */}
        <div className="card-actions mt-3 grid grid-cols-2 items-center">
          <AddToCurt />

          <Link href={`/products/${_id}`} className="btn btn-primary mt-4 w-full md:w-auto">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;