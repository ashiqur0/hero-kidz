'use client'

const CheckoutSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto py-8 animate-pulse">
            <div className="flex gap-8">

                {/* Left: Checkout Form Skeleton */}
                <div className="flex-3 p-6">
                    <div className="h-6 w-48 bg-gray-200 rounded mb-6"></div>

                    <div className="space-y-4">
                        <div>
                            <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                            <div className="h-10 w-full bg-gray-200 rounded"></div>
                        </div>

                        <div>
                            <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
                            <div className="h-10 w-full bg-gray-200 rounded"></div>
                        </div>

                        <div>
                            <div className="h-4 w-36 bg-gray-200 rounded mb-2"></div>
                            <div className="h-10 w-full bg-gray-200 rounded"></div>
                        </div>

                        <div>
                            <div className="h-4 w-44 bg-gray-200 rounded mb-2"></div>
                            <div className="h-24 w-full bg-gray-200 rounded"></div>
                        </div>

                        <div className="h-10 w-40 bg-gray-300 rounded mt-6"></div>
                    </div>
                </div>

                {/* Right: Summary Skeleton (Sticky) */}
                <div className="flex-1">
                    <div className="sticky top-6 rounded-lg p-4">
                        <div className="h-5 w-40 bg-gray-200 rounded mb-4"></div>

                        <div className="space-y-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex justify-between border-b pb-2">
                                    <div className="space-y-2">
                                        <div className="h-4 w-32 bg-gray-200 rounded"></div>
                                        <div className="h-3 w-24 bg-gray-200 rounded"></div>
                                    </div>
                                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 border-t pt-3 space-y-2">
                            <div className="flex justify-between">
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                <div className="h-4 w-12 bg-gray-200 rounded"></div>
                            </div>
                            <div className="flex justify-between">
                                <div className="h-5 w-28 bg-gray-300 rounded"></div>
                                <div className="h-5 w-16 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckoutSkeleton;