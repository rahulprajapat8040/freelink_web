import { PortfolioInterface } from "@/lib/interfaces/user/portfolio.interface";
import { Eye, Heart, Plus } from "lucide-react";

const Portfolio = ({ portfolio }: { portfolio: PortfolioInterface[] }) => {

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Portfolio</h3>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolio.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                        <div className="p-4">
                            <h4 className="font-semibold mb-2">{project.title}</h4>
                            <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center space-x-3">
                                    <span className="flex items-center">
                                        <Heart className="w-4 h-4 mr-1" />
                                        {project.likes}
                                    </span>
                                    <span className="flex items-center">
                                        <Eye className="w-4 h-4 mr-1" />
                                        {project.views}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Portfolio;