import { Star } from "lucide-react";

const Reviews = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold mb-6">Client Reviews</h3>
            <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-start gap-4">
                            <img
                                src={`https://images.unsplash.com/photo-150000000${review}?w=50&h=50&fit=crop&crop=face`}
                                alt="Client"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-semibold">Client Name</h4>
                                    <div className="flex text-yellow-400">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={14} fill="currentColor" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">2 weeks ago</span>
                                </div>
                                <p className="text-gray-700">
                                    Excellent work! Sarah delivered exactly what we needed and was very professional throughout the project.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews;