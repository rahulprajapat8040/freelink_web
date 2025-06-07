import CommonModal from "@/components/shared/CommonModel";
import Input from "@/components/ui/Input";
import { Skill } from "@/lib/interfaces/user/user.interface";
import { DELETEAPI } from "@/utils/api/delete.api";
import { POSTAPI } from "@/utils/api/post.api";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface SkillProp {
    skills: Skill[],
    onUpdate: () => void
}

const Skills = ({ skills = [], onUpdate }: SkillProp) => {
    const skillOption = ["beginner", "intermediate", "expert"];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState({
        skillName: "",
        level: "",
    })
    const updateData = (key: keyof Skill, value: any) => {
        setData(prev => ({
            ...prev,
            [key]: value,
        }));
    };
    const handleDeleteSkill = async (skillId: string) => {
        try {
            const res = await DELETEAPI.deleteSkill(skillId)
            if (res.success) {
                toast.success(res.message);
                onUpdate()
            }
        } catch (error) {
            toast.error(String(error))
        }
    };

    const handleAddSkill = async () => {
        try {
            const res = await POSTAPI.addNewSkill(data)
            if (res.success) {
                onUpdate()
                setIsModalOpen(false)
            }
        } catch (error) {
            toast.error(String(error))
        }
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Skills</h3>
                    {/* {isEditing && ( */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                    >
                        <Plus className="w-4 h-4 mr-1" />
                        Add Skill
                    </button>
                    {/* )} */}
                </div>
                <div className="flex flex-wrap gap-2">
                    {
                        skills.length === 0 ? (
                            <span className="text-gray-dark">
                                No skills added yet
                            </span>
                        ) : (
                            (skills).map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                >
                                    <span>{skill.skillName}</span>
                                    {/* {isEditing && ( */}
                                    <button
                                        onClick={() => handleDeleteSkill(skill.id)}
                                        className="ml-2 text-blue-600 hover:text-blue-800"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                    {/* )} */}
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
            <CommonModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <Input
                    label="Skill Name"
                    type="text"
                    onChange={(e) => updateData("skillName", e.target.value)}
                    placeholder="Enter your skill"
                    className="border-gray-dark text-gray-extra-dark"
                    required
                />
                <label htmlFor="" className="my-2 block">Your skill level</label>
                <select
                    value={data.level}
                    onChange={(e) => updateData("level", e.target.value)}
                    required
                    className="w-full border  rounded-lg p-2 border-gray-dark">
                    <option value="">Choose your skill level</option>
                    {
                        skillOption.map((i, idx) => {
                            return (
                                <option key={idx} value={i} className="capitalize">{i}</option>
                            )
                        })
                    }
                </select>
                <div className="flex justify-end mt-4 gap-2">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="bg-gray-dark px-5 text-white py-1.5 rounded-lg">
                        Cancel
                    </button>
                    <button
                        onClick={handleAddSkill}
                        className="bg-blue-primary px-5 text-white py-1.5 rounded-lg">
                        Save
                    </button>
                </div>
            </CommonModal >
        </>
    )
}

export default Skills;