'use client'
import { BadgeCheck, Search, MapPin, Users, Clock, Heart, Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import bids from '@/data/bids.json'
import Profile from "@/components/user/profile";
import toast from "react-hot-toast";
import { GETAPI } from "@/utils/api/get.api";
import { JobInterface } from "@/lib/interfaces/jobs/job.interface";
import { PageInterface } from "@/lib/interfaces/common/page.interface";
import { Helper } from "@/utils/helper/helper";
// Sample data based on your structure


const Jobs = () => {
    const [activeTab, setActiveTab] = useState('Best Matches');
    const [savedJobs, setSavedJobs] = useState(new Set());

    const [jobs, setJobs] = useState<{ list: JobInterface[], pageInfo: PageInterface }>({
        list: [],
        pageInfo: { total: 1, currentPage: 1, totalPage: 1 }
    });

    const handleGetJobs = async () => {
        try {
            const res = await GETAPI.getJobs()
            setJobs((prev) => ({
                ...prev,
                list: res.data?.data,
                pageInfo: res.data?.pageInfo
            }))
            console.log(res)
        } catch (error) {
            toast.error(error as string)
        };
    };

    useEffect(() => {
        handleGetJobs()
    }, [])

    const toggleSaveJob = (index: number) => {
        const newSavedJobs = new Set(savedJobs);
        if (newSavedJobs.has(index)) {
            newSavedJobs.delete(index);
        } else {
            newSavedJobs.add(index);
        }
        setSavedJobs(newSavedJobs);
    };

    const tabs = ['Best Matches', 'Most Recent', 'Saved Jobs'];

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="flex max-w-7xl mx-auto py-8 gap-8 px-4">
                <div className="w-full lg:w-2/3">
                    {/* Search Bar */}
                    <div className="relative mb-8">
                        <div className="bg-white border-0 shadow-lg rounded-2xl flex items-center gap-4 p-4 transition-all duration-300 hover:shadow-xl">
                            <Search className="text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for your dream job..."
                                className="border-0 outline-none flex-1 text-slate-700 placeholder:text-slate-400"
                            />
                            <button className="bg-blue-primary text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Jobs you might like</h2>
                        <p className="text-slate-600">Discover opportunities that match your skills</p>
                    </div>

                    {/* Tabs */}
                    <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
                        <div className="flex">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-4 px-6 font-medium transition-all duration-300 ${activeTab === tab
                                        ? 'bg-blue-primary text-white'
                                        : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="space-y-4">
                        {jobs.list.map((item, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 hover:border-blue-200"
                            >
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight pr-4">
                                        {item.projectName}
                                    </h3>
                                    <button
                                        onClick={() => toggleSaveJob(idx)}
                                        className={`p-2 rounded-full transition-all duration-300 ${savedJobs.has(idx)
                                            ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                            : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                            }`}
                                    >
                                        {savedJobs.has(idx) ? <Heart fill="currentColor" size={18} /> : <Bookmark size={18} />}
                                    </button>
                                </div>

                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <span className="font-semibold text-green-600">Budget ${item.minPrice} - ${item.maxPrice}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <MapPin size={16} />
                                        <span>india</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Users size={16} />
                                        <span>{100} proposals</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Clock size={16} />
                                        <span>{Helper.timeHelper(item.createdAt)}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                                    {item.description}
                                </p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.skillsRequired.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 py-2 px-4 rounded-full text-sm font-medium border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div className="flex items-center gap-3">
                                        {item.isVarified && (
                                            <div className="flex items-center gap-2 text-green-600">
                                                <BadgeCheck size={18} />
                                                <span className="text-sm font-medium">Payment verified</span>
                                            </div>
                                        )}
                                        {/* {item.spents && (
                                            <div className="text-slate-500 text-sm">
                                                ${item.spents}+ spent
                                            </div>
                                        )} */}
                                    </div>
                                    <button className="bg-blue-primary text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Profile />
            </div>
        </section>
    );
};

export default Jobs;