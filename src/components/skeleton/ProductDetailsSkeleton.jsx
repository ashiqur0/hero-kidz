const ProductDetailsSkeleton = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="skeleton h-96 w-full rounded-lg"></div>

                {/* Info */}
                <div className="space-y-4">
                    <div className="skeleton h-6 w-3/4"></div>
                    <div className="skeleton h-4 w-1/2"></div>

                    <div className="flex gap-2">
                        <div className="skeleton h-4 w-12"></div>
                        <div className="skeleton h-4 w-24"></div>
                    </div>

                    <div className="flex gap-3 mt-3">
                        <div className="skeleton h-8 w-28"></div>
                        <div className="skeleton h-5 w-16"></div>
                    </div>

                    <div className="skeleton h-10 w-full md:w-40"></div>

                    <div className="space-y-2 mt-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="skeleton h-4 w-full"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mt-10 space-y-3">
                <div className="skeleton h-6 w-40"></div>
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="skeleton h-4 w-full"></div>
                ))}
            </div>

            {/* FAQ */}
            <div className="mt-10 space-y-3">
                <div className="skeleton h-6 w-52"></div>
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="skeleton h-14 w-full"></div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;