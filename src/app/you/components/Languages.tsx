import { LanguageInterface } from "@/lib/interfaces/user/language.interface";
import { Language } from "@/lib/interfaces/user/user.interface";
import { Plus, Trash, X } from "lucide-react";

const Languages = ({ languages }: { languages: Language[] }) => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold mb-4">Languages</h3>
                    <button
                        // onClick={() => setIsModalOpen(true)}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                    >
                        <Plus className="w-4 h-4 mr-1" />
                    </button>
                </div>
                <div className="space-y-3">
                    {languages.map((lang, index) => (
                        <div key={index} className="flex group transition-all duration-300 items-center justify-between">
                            <span className="font-medium">{lang.language}</span>
                            <div>
                                <span className="text-sm text-gray-500">{lang.proficiency}</span>
                                <button
                                    // onClick={() => handleDeleteSkill(skill.id)}
                                    className="ml-2 text-red-600 hidden group-hover:inline "
                                >
                                    <Trash size={15} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Languages;