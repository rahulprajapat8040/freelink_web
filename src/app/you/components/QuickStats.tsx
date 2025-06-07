import { CheckCircle, Clock, Users } from "lucide-react";

interface StatsProp {
    totalEarnings: number,
    jobsCompleted: number,
    clientSatisfaction: number,
    responseTime: string,
    profileViews: number,
    savedByClients: number
};

const QuickStats = ({ stats }: { stats: StatsProp }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Jobs Completed
                    </span>
                    <span className="font-medium">{stats.jobsCompleted}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        Response Time
                    </span>
                    <span className="font-medium">{stats.responseTime}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        Repeat Clients
                    </span>
                    <span className="font-medium">78%</span>
                </div>
            </div>
        </div>
    )
}

export default QuickStats;