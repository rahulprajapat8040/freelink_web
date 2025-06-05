import { Edit } from "lucide-react";
import Link from "next/link";

const Profile = () => {
    return (

        <div
            className="hidden lg:block max-h-[500px] fixed right-0 pe-6 overflow-scroll w-1/3"
            style={{ scrollbarWidth: 'none' }}
        >
            <div className="sticky top-8 space-y-6">
                {/* Profile Card */}

                <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
                    <div>
                        <Link href={'/you'} className="float-right">
                            <Edit className="text-blue-primary" />
                        </Link>
                    </div>
                    <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                            JD
                        </div>
                        <h3 className="font-semibold text-slate-800">John Doe</h3>
                        <p className="text-slate-500 text-sm">Full Stack Developer</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Profile Views</span>
                            <span className="font-semibold text-slate-800">127</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Applications</span>
                            <span className="font-semibold text-slate-800">23</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Response Rate</span>
                            <span className="font-semibold text-green-600">92%</span>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-4">Filters</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-slate-300 mr-2" />
                                    <span className="text-sm text-slate-600">$0 - $50</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-slate-300 mr-2" />
                                    <span className="text-sm text-slate-600">$50 - $100</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-slate-300 mr-2" />
                                    <span className="text-sm text-slate-600">$100+</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Experience Level</label>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-slate-300 mr-2" />
                                    <span className="text-sm text-slate-600">Entry Level</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-slate-300 mr-2" />
                                    <span className="text-sm text-slate-600">Intermediate</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-slate-300 mr-2" />
                                    <span className="text-sm text-slate-600">Expert</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-blue-primary rounded-2xl shadow-sm p-6 text-white">
                    <h3 className="font-semibold mb-4">Today's Activity</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-blue-100">New Jobs</span>
                            <span className="font-semibold">12</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-blue-100">Applications Sent</span>
                            <span className="font-semibold">3</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-blue-100">Profile Views</span>
                            <span className="font-semibold">8</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;