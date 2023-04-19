import { axiosPlaceData } from "../utils/axiosConfig"

export const fetchData = async (url) => {
    const RESPONSE = await axiosPlaceData.get(url);
    return RESPONSE.data;
}
