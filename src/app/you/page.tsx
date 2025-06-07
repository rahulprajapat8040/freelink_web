'use client'
import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { Edit3, Save, X, Star, MapPin, DollarSign, Camera } from 'lucide-react';
import Portfolio from './components/Portfolio';
import Skills from './components/Siklls';
import Languages from './components/Languages';
import Certifications from './components/Certifications';
import { Skill, UserInterface } from '@/lib/interfaces/user/user.interface';
import toast from 'react-hot-toast';
import { GETAPI } from '@/utils/api/get.api';
import QuickStats from './components/QuickStats';
import Reviews from './components/Reviews';
import { PUTAPI } from '@/utils/api/put.api';
import Image from 'next/image';

const User = () => {
    const [userInfo, setUserInfo] = useState<UserInterface>()
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [tempData, setTempData] = useState<Partial<UserInterface>>({})
    const fetchUser = async () => {
        try {
            const res = await GETAPI.getLoggedInFreelancer()
            if (res.success) {
                setUserInfo(res.data)
            }
        } catch (error) {
            toast.error(String(error));
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])


    const handleEdit = () => {
        if (!userInfo) return;
        setTempData({
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            hourlyRate: userInfo.hourlyRate,
            aboutUser: userInfo.aboutUser,
            profilePhoto: userInfo.profilePhoto,
        });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setTempData({});
        setIsEditing(false);
    };

    const handleSave = async () => {
        try {
            const formData = new FormData();
            if (tempData.firstName) formData.append('firstName', tempData.firstName);
            if (tempData.lastName) formData.append('lastName', tempData.lastName);
            if (tempData.hourlyRate) formData.append('hourlyRate', String(tempData.hourlyRate));
            if (tempData.aboutUser) formData.append('aboutUser', tempData.aboutUser);
            if (tempData.profilePhoto) formData.append('profilePhoto', tempData.profilePhoto);
            const res = await PUTAPI.updateUser(formData);
            if (res.success) {
                toast.success(res.message);
                setIsEditing(false);
                fetchUser();
            } else {
                res.message
            };
        } catch (error) {
            toast.error(String(error));
        };
    }

    const updateTempData = (key: keyof UserInterface, value: any) => {
        setTempData(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleProfileUpdate = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        updateTempData('profilePhoto', file)
        try {
            const formData = new FormData();
            formData.append('profilePhoto', file);
            const res = await PUTAPI.updateUser(formData);
            if (res.success) {
                console.log(res)
                toast.success(res.message);
                setIsEditing(false);
                fetchUser();
            } else {
                res.message
            };
        } catch (error) {
            toast.error(String(error))
        }
    }

    const stats = {
        totalEarnings: 125000,
        jobsCompleted: 147,
        clientSatisfaction: 4.9,
        responseTime: '2 hours',
        profileViews: 2340,
        savedByClients: 89
    };

    const portfolio = [
        {
            id: "1",
            title: 'E-commerce Platform',
            image: '/api/placeholder/300/200',
            description: 'Built a full-stack e-commerce solution with React and Node.js',
            technologies: ['React', 'Node.js', 'MongoDB'],
            likes: 24,
            views: 156
        },
        {
            id: "2",
            title: 'Mobile Banking App UI',
            image: '/api/placeholder/300/200',
            description: 'Designed modern, intuitive UI for mobile banking application',
            technologies: ['Figma', 'React Native', 'UI/UX'],
            likes: 31,
            views: 203
        },
        {
            id: "3",
            title: 'SaaS Dashboard',
            image: '/api/placeholder/300/200',
            description: 'Created comprehensive dashboard for project management SaaS',
            technologies: ['Vue.js', 'TypeScript', 'Chart.js'],
            likes: 18,
            views: 127
        }
    ];

    const reviews = [
        {
            id: "1",
            client: 'John Miller',
            rating: 5,
            comment: 'Sarah delivered exceptional work on our e-commerce project. Her attention to detail and communication were outstanding.',
            project: 'E-commerce Platform Development',
            date: '2 weeks ago'
        },
        {
            id: "2",
            client: "Lisa Chen",
            rating: 5,
            comment: "Fantastic designer and developer. The UI she created exceeded our expectations.",
            project: "Mobile App UI Design",
            date: "1 month ago"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-20 relative h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                {
                                    userInfo?.profilePhoto ? (
                                        <Image
                                            src={userInfo.profilePhoto}
                                            alt='profilephoto'
                                            className='rounded-full object-cover w-20 h-20 hover:scale-200 hover:z-20 transition-transform ease-in-out duration-300'
                                            width={100}
                                            height={100}
                                        />
                                    ) : (

                                        'SJ'
                                    )
                                }
                                <label htmlFor='profilePhoto' className='absolute cursor-pointer bottom-0 bg-orange-500 h-8 w-8 flex items-center justify-center rounded-full right-0'>
                                    <Camera size={15} />
                                </label>
                                <input
                                    id='profilePhoto'
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={(e) =>
                                        handleProfileUpdate(e)
                                    }
                                />
                            </div>
                            <div>
                                <h1>
                                    {isEditing ? (
                                        <div className="flex space-x-2">
                                            <input
                                                type="text"
                                                className="border p-1 rounded"
                                                value={tempData.firstName || ''}
                                                onChange={(e) => updateTempData('firstName', e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                className="border p-1 rounded"
                                                value={tempData.lastName || ''}
                                                onChange={(e) => updateTempData('lastName', e.target.value)}
                                            />
                                        </div>
                                    ) : (
                                        `${userInfo?.firstName} ${userInfo?.lastName}`
                                    )}
                                </h1>                                <p className="text-lg text-gray-600">{userInfo?.title}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                    <div className="flex items-center text-gray-500">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span>Temporary Location </span>
                                    </div>
                                    <div className="flex items-center text-green-600">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        <span>Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            {!isEditing ? (
                                <button onClick={handleEdit} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    <Edit3 className="w-4 h-4 mr-2" />
                                    Edit Profile
                                </button>
                            ) : (
                                <div className="flex space-x-2">
                                    <button onClick={handleSave} className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                        <Save className="w-4 h-4 mr-2" />
                                        Save
                                    </button>
                                    <button onClick={handleCancel} className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                                        <X className="w-4 h-4 mr-2" />
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-white border-b border-b-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">${stats.totalEarnings.toLocaleString()}</div>
                            <div className="text-sm text-gray-500">Total Earned</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{stats.jobsCompleted}</div>
                            <div className="text-sm text-gray-500">Jobs Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center">
                                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                                <span className="text-2xl font-bold text-gray-900">{stats.clientSatisfaction}</span>
                            </div>
                            <div className="text-sm text-gray-500">Client Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{stats.responseTime}</div>
                            <div className="text-sm text-gray-500">Response Time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{stats.profileViews}</div>
                            <div className="text-sm text-gray-500">Profile Views</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{stats.savedByClients}</div>
                            <div className="text-sm text-gray-500">Saved by Clients</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white border-b border-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex space-x-8">
                        {['overview', 'portfolio', 'reviews', 'earnings'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${activeTab === tab
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                {/* About Section */}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h3 className="text-xl font-semibold mb-4">About Me</h3>
                                    {isEditing ? (
                                        <textarea
                                            value={tempData.aboutUser || ''}
                                            onChange={(e) => updateTempData('aboutUser', e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                                            rows={4}
                                        />
                                    ) : (
                                        <p className="text-gray-700 leading-relaxed">{userInfo?.aboutUser}</p>
                                    )}
                                </div>

                                {/* Skills Section */}
                                <Skills
                                    skills={userInfo?.skills as Skill[]}
                                    onUpdate={fetchUser}
                                />
                                {/* Experience & Education */}
                                {
                                    userInfo?.certifications && (
                                        <Certifications certifications={userInfo && userInfo.certifications} />
                                    )
                                }
                            </div>
                        )}

                        {activeTab === 'portfolio' && (
                            <Portfolio portfolio={portfolio} />
                        )}

                        {activeTab === 'reviews' && (
                            <Reviews reviews={reviews} />
                        )}

                        {activeTab === 'earnings' && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold">Earnings Overview</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-lg shadow-sm p-6">
                                        <h4 className="font-medium mb-4">This Month</h4>
                                        <div className="text-3xl font-bold text-green-600 mb-2">$8,500</div>
                                        <p className="text-sm text-gray-500">+12% from last month</p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-sm p-6">
                                        <h4 className="font-medium mb-4">This Year</h4>
                                        <div className="text-3xl font-bold text-blue-600 mb-2">$78,200</div>
                                        <p className="text-sm text-gray-500">+25% from last year</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Rate & Availability */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold mb-4">Rate & Availability</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
                                    {isEditing ? (
                                        <div className="flex items-center">
                                            <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                                            <input
                                                type="number"
                                                value={tempData.hourlyRate || ''}
                                                onChange={(e) => updateTempData('hourlyRate', parseInt(e.target.value))}
                                                className="w-full p-2 border border-gray-300 rounded-lg"
                                            />
                                        </div>
                                    ) : (
                                        <div className="text-2xl font-bold text-gray-900">${userInfo?.hourlyRate}/hour</div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                                    <div className="flex items-center text-green-600">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        <span>Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        {
                            userInfo?.languages && (
                                <Languages languages={userInfo?.languages} />
                            )
                        }
                        {/* Quick Stats */}
                        <QuickStats stats={stats} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default User;