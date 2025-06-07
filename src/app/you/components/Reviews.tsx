import { Star } from "lucide-react";

interface ReviewsProp {
    id: string
    client: string
    rating: number
    comment: string
    project: string
    date: string
}


const Reviews = ({ reviews }: { reviews: ReviewsProp[] }) => {
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold">Client Reviews</h3>
            {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                {review.client.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h4 className="font-medium">{review.client}</h4>
                                <div className="flex items-center space-x-2">
                                    <div className="flex">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-2">{review.comment}</p>
                    <p className="text-sm text-gray-500">Project: {review.project}</p>
                </div>
            ))}
        </div>
    )
}

export default Reviews;