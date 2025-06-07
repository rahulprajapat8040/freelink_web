import api, { handleApiError } from "."
import APICONST from '@/utils/common/apiConst'
import { SignupInterface } from "./interfaces/auth/signup.interface"
import Cookies from "js-cookie"
import { LoginInterface } from "./interfaces/auth/login.interface"
import { NewSkill } from "./interfaces/freelancer/freelancer.interface"

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

    static login = async (data: LoginInterface) => {
        try {
            const res = await api.post(APICONST.LOGIN, {
                ...data, deviceId: 'test-device-1',
                deviceToken: "test-device-token"
            })
            if (res.data.success) {
                if (res.data?.data?.accessToken) {
                    Cookies.set("accessToken", res.data?.data?.accessToken, { expires: 30 })
                };
                return res.data
            }
        } catch (error) {
            throw handleApiError(error)
        }
    }

    static addCertificates = async (data: any) => {
        try {
            const res = await api.post(APICONST.ADD_CERTIFICATE, data)
            if (res.data.success) {
                return res.data
            }
        } catch (error) {
            throw handleApiError(error)
        }
    }

    static uploadProfilePhoto = async (formData: FormData) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/freelancer/profile-photo`, {
                method: 'POST',
                credentials: 'include',
                body: formData,
                // Don't set Content-Type header, let the browser set it with boundary
            });

            if (!response.ok) {
                throw new Error('Failed to upload profile photo');
            }

            return await response.json();
        } catch (error) {
            throw error instanceof Error ? error.message : 'Error uploading profile photo';
        }
    }

    static addNewSkill = async (data: NewSkill) => {
        try {
            const res = await api.post(APICONST.ADD_SKILL, data);
            if (res.data.success) {
                return res.data
            };
        } catch (error) {
            throw handleApiError(error)
        }
    }
}