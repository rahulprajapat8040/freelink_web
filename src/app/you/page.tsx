'use client'
import React, { useEffect, useState } from 'react';
import { Edit3, MapPin, Star, Clock, DollarSign, Eye, Heart, Share2, MessageCircle, CheckCircle, Award, Briefcase, Calendar, ExternalLink, Camera, Save, X, Plus, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { GETAPI } from '@/utils/api/get.api';
import Reviews from './components/Reviews';
import Portfolio from './components/Portfolio';

interface Skill {
    id: number;
    name: string;
}

interface Language {
    id: number;
    name: string;
    level: string;
}

interface WorkHistory {
    id: number;
    company: string;
    role: string;
    duration: string;
    description?: string;
}

interface Certification {
    id: number;
    name: string;
    issuer: string;
    year: string;
}

interface PortfolioItem {
    id: number;
    title: string;
    image: string;
    price: string;
    description?: string;
}

interface ProfileData {
    name: string;
    title: string;
    location: string;
    hourlyRate: number;
    totalEarned: string;
    jobsCompleted: number;
    rating: number;
    reviewCount: number;
    responseTime: string;
    languages: Language[];
    bio: string;
    skills: Skill[];
    certifications: Certification[];
    workHistory: WorkHistory[];
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    const [userInfo, setUserInfo] = useState()

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

const User: React.FC = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editSection, setEditSection] = useState<string | null>(null);
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const [profileData, setProfileData] = useState<ProfileData>({
        name: "Sarah Chen",
        title: "Full-Stack Developer & UI/UX Designer",
        location: "San Francisco, CA",
        hourlyRate: 85,
        totalEarned: "150k+",
        jobsCompleted: 127,
        rating: 4.9,
        reviewCount: 89,
        responseTime: "1 hour",
        languages: [
            { id: 1, name: "English", level: "Native" },
            { id: 2, name: "Mandarin", level: "Fluent" },
            { id: 3, name: "Spanish", level: "Conversational" }
        ],
        bio: "Passionate full-stack developer with 6+ years of experience building scalable web applications and beautiful user interfaces. I specialize in React, Node.js, and modern design systems. My goal is to help businesses transform their ideas into powerful digital solutions.",
        skills: [
            { id: 1, name: "React" },
            { id: 2, name: "Node.js" },
            { id: 3, name: "TypeScript" },
            { id: 4, name: "UI/UX Design" },
            { id: 5, name: "MongoDB" },
            { id: 6, name: "PostgreSQL" },
            { id: 7, name: "AWS" },
            { id: 8, name: "Figma" }
        ],

        certifications: [
            { id: 1, name: "AWS Certified Developer", issuer: "Amazon", year: "2023" },
            { id: 2, name: "Google UX Design Certificate", issuer: "Google", year: "2022" },
            { id: 3, name: "React Professional Certificate", issuer: "Meta", year: "2023" }
        ],
        workHistory: [
            { id: 1, company: "TechCorp", role: "Senior Developer", duration: "2021-2023", description: "Led development of microservices architecture" },
            { id: 2, company: "StartupXYZ", role: "Full-Stack Developer", duration: "2019-2021", description: "Built scalable web applications from scratch" }
        ]
    });

    const [tempData, setTempData] = useState<Partial<ProfileData>>({});
    const [modalData, setModalData] = useState<any>({});

    const startEdit = (section: string) => {
        setEditSection(section);
        setIsEditing(true);
        setTempData({ ...profileData });
    };

    const saveEdit = () => {
        setProfileData({ ...profileData, ...tempData });
        setIsEditing(false);
        setEditSection(null);
    };

    const cancelEdit = () => {
        setTempData({});
        setIsEditing(false);
        setEditSection(null);
    };

    const updateTempData = (field: string, value: any) => {
        setTempData(prev => ({ ...prev, [field]: value }));
    };

    const openModal = (modalType: string) => {
        setActiveModal(modalType);
        setModalData({});
    };

    const closeModal = () => {
        setActiveModal(null);
        setModalData({});
    };

    const addSkill = () => {
        if (modalData.skillName) {
            const newSkill: Skill = {
                id: Date.now(),
                name: modalData.skillName
            };
            setProfileData(prev => ({
                ...prev,
                skills: [...prev.skills, newSkill]
            }));
            closeModal();
        }
    };

    const removeSkill = (skillId: number) => {
        setProfileData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill.id !== skillId)
        }));
    };

    const addLanguage = () => {
        if (modalData.languageName && modalData.languageLevel) {
            const newLanguage: Language = {
                id: Date.now(),
                name: modalData.languageName,
                level: modalData.languageLevel
            };
            setProfileData(prev => ({
                ...prev,
                languages: [...prev.languages, newLanguage]
            }));
            closeModal();
        }
    };

    const removeLanguage = (languageId: number) => {
        setProfileData(prev => ({
            ...prev,
            languages: prev.languages.filter(lang => lang.id !== languageId)
        }));
    };

    const addWorkHistory = () => {
        if (modalData.company && modalData.role && modalData.duration) {
            const newWork: WorkHistory = {
                id: Date.now(),
                company: modalData.company,
                role: modalData.role,
                duration: modalData.duration,
                description: modalData.description || ""
            };
            setProfileData(prev => ({
                ...prev,
                workHistory: [...prev.workHistory, newWork]
            }));
            closeModal();
        }
    };

    const removeWorkHistory = (workId: number) => {
        setProfileData(prev => ({
            ...prev,
            workHistory: prev.workHistory.filter(work => work.id !== workId)
        }));
    };

    const addCertification = () => {
        if (modalData.certName && modalData.issuer && modalData.year) {
            const newCert: Certification = {
                id: Date.now(),
                name: modalData.certName,
                issuer: modalData.issuer,
                year: modalData.year
            };
            setProfileData(prev => ({
                ...prev,
                certifications: [...prev.certifications, newCert]
            }));
            closeModal();
        }
    };

    const removeCertification = (certId: number) => {
        setProfileData(prev => ({
            ...prev,
            certifications: prev.certifications.filter(cert => cert.id !== certId)
        }));
    };

    const EditableField: React.FC<{
        field: string;
        value: string | number;
        type?: string;
        placeholder?: string;
        multiline?: boolean;
    }> = ({ field, value, type = "text", placeholder, multiline = false }) => {
        const isCurrentlyEditing = isEditing && editSection === field;

        if (isCurrentlyEditing) {
            return (
                <div className="flex items-center gap-2">
                    {multiline ? (
                        <textarea
                            value={tempData[field as keyof ProfileData] || value}
                            onChange={(e) => updateTempData(field, e.target.value)}
                            className="flex-1 p-2 border rounded-lg resize-none"
                            rows={4}
                            placeholder={placeholder}
                        />
                    ) : (
                        <input
                            type={type}
                            value={tempData[field as keyof ProfileData] || value}
                            onChange={(e) => updateTempData(field, type === "number" ? Number(e.target.value) : e.target.value)}
                            className="flex-1 p-2 border rounded-lg"
                            placeholder={placeholder}
                        />
                    )}
                    <button onClick={saveEdit} className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        <Save size={16} />
                    </button>
                    <button onClick={cancelEdit} className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                        <X size={16} />
                    </button>
                </div>
            );
        }

        return (
            <div className="flex items-center gap-2 group">
                <span className="flex-1">{value}</span>
                <button
                    onClick={() => startEdit(field)}
                    className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-blue-500 transition-all"
                >
                    <Edit3 size={14} />
                </button>
            </div>
        );
    };

    const handleGetUser = async () => {
        try {
            const user = await GETAPI.getLoggedInUser()
            console.log(user)
        } catch (error) {
            toast.error(error as string)
        }
    }

    useEffect(() => {
        handleGetUser()
    }, [])


    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <button className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 shadow-lg">
                                <Camera size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    <EditableField field="name" value={profileData.name} placeholder="Your name" />
                                </h1>
                                <h2 className="text-xl text-gray-600 mb-3">
                                    <EditableField field="title" value={profileData.title} placeholder="Your professional title" />
                                </h2>
                                <div className="flex items-center text-gray-500 mb-4">
                                    <MapPin size={16} className="mr-2" />
                                    <EditableField field="location" value={profileData.location} placeholder="Your location" />
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                                    <Heart size={16} />
                                    Save
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                                    <Share2 size={16} />
                                    Share
                                </button>
                                <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    <MessageCircle size={16} />
                                    Contact Me
                                </button>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-center mb-1">
                                    <Star className="text-yellow-400 mr-1" size={16} />
                                    <span className="font-bold text-lg">{profileData.rating}</span>
                                </div>
                                <p className="text-sm text-gray-600">{profileData.reviewCount} reviews</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="font-bold text-lg">{profileData.jobsCompleted}</div>
                                <p className="text-sm text-gray-600">Jobs completed</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg group">
                                <div className="font-bold text-lg">
                                    <EditableField field="hourlyRate" value={`$${profileData.hourlyRate}/hr`} type="number" placeholder="85" />
                                </div>
                                <p className="text-sm text-gray-600">Hourly rate</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="font-bold text-lg">{profileData.totalEarned}</div>
                                <p className="text-sm text-gray-600">Total earned</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg group">
                                <div className="flex items-center justify-center mb-1">
                                    <Clock className="text-green-500 mr-1" size={16} />
                                    <span className="font-bold text-lg">
                                        <EditableField field="responseTime" value={profileData.responseTime} placeholder="1 hour" />
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">Response time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* About Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">About Me</h3>
                            <button onClick={() => startEdit('bio')} className="text-blue-500 hover:text-blue-600">
                                <Edit3 size={18} />
                            </button>
                        </div>
                        <div className="text-gray-700 leading-relaxed">
                            <EditableField
                                field="bio"
                                value={profileData.bio}
                                multiline={true}
                                placeholder="Tell clients about yourself and your expertise..."
                            />
                        </div>
                    </div>

                    <Portfolio />
                    <Reviews />
                </div>
                {/* Right Column */}
                <div className="space-y-6">
                    {/* Skills Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Skills</h3>
                            <button
                                onClick={() => openModal('skills')}
                                className="text-blue-500 hover:text-blue-600"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {profileData.skills.map((skill) => (
                                <div key={skill.id} className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm group">
                                    <span>{skill.name}</span>
                                    <button
                                        onClick={() => removeSkill(skill.id)}
                                        className="opacity-0 group-hover:opacity-100 text-blue-600 hover:text-red-500 transition-all"
                                    >
                                        <X size={12} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Languages</h3>
                            <button
                                onClick={() => openModal('languages')}
                                className="text-blue-500 hover:text-blue-600"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                        <div className="space-y-3">
                            {profileData.languages.map((lang) => (
                                <div key={lang.id} className="flex items-center justify-between group">
                                    <div>
                                        <span className="text-gray-900 font-medium">{lang.name}</span>
                                        <span className="text-gray-500 text-sm ml-2">({lang.level})</span>
                                    </div>
                                    <button
                                        onClick={() => removeLanguage(lang.id)}
                                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Certifications</h3>
                            <button
                                onClick={() => openModal('certifications')}
                                className="text-blue-500 hover:text-blue-600"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                        <div className="space-y-3">
                            {profileData.certifications.map((cert) => (
                                <div key={cert.id} className="flex items-start justify-between group">
                                    <div className="flex items-start gap-2">
                                        <Award className="text-green-500 mt-0.5" size={16} />
                                        <div>
                                            <div className="text-gray-900 font-medium">{cert.name}</div>
                                            <div className="text-gray-500 text-sm">{cert.issuer} • {cert.year}</div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeCertification(cert.id)}
                                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Work History Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Work History</h3>
                            <button
                                onClick={() => openModal('workHistory')}
                                className="text-blue-500 hover:text-blue-600"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {profileData.workHistory.map((work) => (
                                <div key={work.id} className="flex items-start justify-between group">
                                    <div className="flex items-start gap-3">
                                        <Briefcase className="text-gray-400 mt-1" size={16} />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{work.role}</h4>
                                            <p className="text-gray-600">{work.company}</p>
                                            <p className="text-sm text-gray-500">{work.duration}</p>
                                            {work.description && (
                                                <p className="text-sm text-gray-600 mt-1">{work.description}</p>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeWorkHistory(work.id)}
                                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Availability Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-lg font-bold mb-4">Availability</h3>
                        <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle size={16} />
                            <span>Available now</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                            Usually responds within {profileData.responseTime}
                        </p>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <Modal isOpen={activeModal === 'skills'} onClose={closeModal} title="Add Skill">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Skill Name</label>
                        <input
                            type="text"
                            value={modalData.skillName || ''}
                            onChange={(e) => setModalData(prev => ({ ...prev, skillName: e.target.value }))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., JavaScript, Python, Design..."
                        />
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={addSkill}
                            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Add Skill
                        </button>
                        <button
                            onClick={closeModal}
                            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal isOpen={activeModal === 'languages'} onClose={closeModal} title="Add Language">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                        <input
                            type="text"
                            value={modalData.languageName || ''}
                            onChange={(e) => setModalData(prev => ({ ...prev, languageName: e.target.value }))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., English, Spanish, French..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Proficiency Level</label>
                        <select
                            value={modalData.languageLevel || ''}
                            onChange={(e) => setModalData(prev => ({ ...prev, languageLevel: e.target.value }))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">Select level</option>
                            <option value="Native">Native</option>
                            <option value="Fluent">Fluent</option>
                            <option value="Conversational">Conversational</option>
                            <option value="Basic">Basic</option>
                        </select>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={addLanguage}
                            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Add Language
                        </button>
                        <button
                            onClick={closeModal}
                            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal isOpen={activeModal === 'workHistory'} onClose={closeModal} title="Add Work Experience">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <input
                            type="text"
                            value={modalData.company || ''}
                            onChange={(e) => setModalData(prev => ({ ...prev, company: e.target.value }))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Company name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                        <input
                            type="text"
                            value={modalData.role || ''}
                            onChange={(e) => setModalData(prev => ({ ...prev, role: e.target.value }))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Job title"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                        <input
                            type="text"
                            value={modalData.duration || ''}
                            onChange={(e) => setModalData(prev => ({ ...prev, duration: e.target.value }))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., 2021-2023"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                        <textarea
                            value={modalData.description || ''}
                            onChange={(e) => setModalData(prev => ({ ...prev, description: e.target.value }))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            rows={3}
                            placeholder="Brief description of your role and achievements"
                        />
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={addWorkHistory}
                            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Add Experience
                        </button>
                        <button
                            onClick={closeModal}
                            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal isOpen={activeModal === 'certifications'} onClose={closeModal} title="Add Certification">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Certification Name</label>
                        <input
                            type="text"
                            value={modalData.certName || ''}
                            onChange={(e) => setModalData(prev => ({ ...prev, certName: e.target.value }))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., AWS Certified Developer"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Issuing Organization</label>
                        <input
                            type="text"
                            value={modalData.issuer || ''}
                            onChange={(e) => setModalData(prev => ({ ...prev, issuer: e.target.value }))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., Amazon, Google, Microsoft"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Year Obtained</label>
                        <input
                            type="text"
                            value={modalData.year || ''}
                            onChange={(e) => setModalData(prev => ({ ...prev, year: e.target.value }))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., 2023"
                        />
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={addCertification}
                            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Add Certification
                        </button>
                        <button
                            onClick={closeModal}
                            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default User;