import { UserInterface } from "@/lib/interfaces/user/user.interface";
import api, { handleApiError } from ".";
import APICONST from "../common/apiConst";

export class PUTAPI {
    static updateUser = async (data: FormData | Partial<UserInterface>) => {
        try {
            const isFormData = data instanceof FormData;

            const response = await api.put(
                APICONST.UPDATE_USER,
                isFormData ? data : JSON.stringify(data),
                {
                    headers: {
                        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
                    },
                }
            );

            if (!response.data?.success) {
                throw new Error('Failed to update user');
            }

            return response.data;
        } catch (error: any) {
            handleApiError(error); // Optional if you have it
            throw new Error(error?.message || 'Error updating user');
        }
    };
}
