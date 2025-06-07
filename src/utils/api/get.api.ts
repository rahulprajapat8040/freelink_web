import api, { handleApiError } from "."
import APICONST from "../common/apiConst"

export class GETAPI {
    static getJobs = async () => {
        try {
            const res = await api.get(APICONST.GETJOBS);
            if (res.data.success) {
                return res.data;
            }
        } catch (error) {
            throw handleApiError(error)
        }
    }

    static getLoggedInFreelancer = async () => {
        try {
            const res = await api.get(APICONST.LOGGED_IN_FREELANCER)
            if (res.data.success) {
                return res.data
            }
        } catch (error) {
            throw handleApiError(error)
        }
    }
}