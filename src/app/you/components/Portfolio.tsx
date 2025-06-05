import { Edit3, ExternalLink } from "lucide-react";

const Portfolio = () => {

    const portfolio = [
        { id: 1, title: "E-commerce Platform", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400", price: "$2,500" },
        { id: 2, title: "SaaS Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", price: "$3,200" },
        { id: 3, title: "Mobile App Design", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400", price: "$1,800" }
    ]
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Portfolio</h3>
                <button className="text-blue-500 hover:text-blue-600">
                    <Edit3 size={18} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolio.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-lg mb-3">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                            </div>
                        </div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-green-600 font-medium">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Portfolio;