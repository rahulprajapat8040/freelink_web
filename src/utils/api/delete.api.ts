import api, { handleApiError } from "."
import APICONST from "../common/apiConst"

export class DELETEAPI {

    static deleteSkill = async (skillId: string) => {
        try {
            const res = await api.delete(`${APICONST.DELETE_SKILL}?skillId=${skillId}`);
            if (res.data.success) {
                return res.data
            };
        } catch (error) {
            handleApiError(error);
        }
    }
}
