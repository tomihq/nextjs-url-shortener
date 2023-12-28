import { apiInstance } from "@/config/axios";
import { ICreateShortUrlForm } from "@/interfaces"

export const createShortnedUrl = async(data:ICreateShortUrlForm) => {
    let response: string | null = null; 
    const preparedData = {
        url: data
    }
    try {
        const request = await apiInstance.post(`/urls`, preparedData);
        if(request.data.success){
            response = request.data.shortUrl
        }
    } catch (error) {
        {/* @ts-expect-error */ }
        console.log(error.response.data)
    }
    
    return response;
}