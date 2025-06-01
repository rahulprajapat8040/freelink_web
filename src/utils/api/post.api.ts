import api, { handleApiError } from "."
import APICONST from '@/utils/common/apiConst'
import { SignupInterface } from "./interfaces/auth/signup.interface"
import Cookies from "js-cookie"

export class POSTAPI {
    static signup = async (data: SignupInterface) => {
        try {
            const res = await api.post(APICONST.SIGNUP, { ...data, deviceId: 'test-device-1', deviceToken: 'test-device-2' })
            if (res.data.success) {
                if (res.data?.data?.accessToken) {
                    Cookies.set("accessToken", res.data?.data?.accessToken, { expires: 30 })
                }
                return res.data
            }
        } catch (error) {
            throw handleApiError(error)
        }
    }
}