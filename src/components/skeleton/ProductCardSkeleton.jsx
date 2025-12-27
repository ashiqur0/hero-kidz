const ProductCardSkeleton = () => {
    return (
        <div className="card bg-base-100 shadow-lg">
            {/* Image Skeleton */}
            <div className="px-4 pt-4">
                <div className="skeleton h-48 w-full rounded-xl"></div>
            </div>

            {/* Content Skeleton */}
            <div className="card-body p-4 space-y-3">
                {/* Title */}
                <div className="skeleton h-4 w-3/4"></div>
                <div className="skeleton h-4 w-1/2"></div>

                {/* Rating */}
                <div className="flex gap-2">
                    <div className="skeleton h-4 w-12"></div>
                    <div className="skeleton h-4 w-20"></div>
                </div>

                {/* Sold */}
                <div className="skeleton h-4 w-24"></div>

                {/* Price */}
                <div className="flex gap-2">
                    <div className="skeleton h-5 w-16"></div>
                    <div className="skeleton h-4 w-10"></div>
                </div>

                {/* Button */}
                <div className="skeleton h-9 w-full rounded-lg"></div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;