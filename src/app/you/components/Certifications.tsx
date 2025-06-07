import { Certification } from "@/lib/interfaces/user/user.interface";
import { Award } from "lucide-react";

const Certifications = ({ certifications = [] }: { certifications: Certification[] }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Education & Certifications</h3>
            <div className="space-y-4">

                <div className="mt-6">
                    <h4 className="font-medium mb-2">Certifications</h4>
                    <div className="space-y-2">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <Award className="w-4 h-4 text-yellow-500" />
                                <span className="text-gray-700">{cert.certificateName}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications;