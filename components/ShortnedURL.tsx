'use client';
import toast from 'react-hot-toast';
import FormButton from './form/FormButton'
import { ClipboardIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface IShortnedURL {
    shortnedUrl: string;
}

const ShortnedURL = ({ shortnedUrl = "No URL provided" }: IShortnedURL) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(shortnedUrl)
        return toast.success("Copied to clipboard.")
    }
    return (
        <div className="bg-[#ffffff] border border-gray-200 rounded-md px-4 py-3">
            <p className="font-medium text-gray-700 ">Your shortened URL:</p>
            <div className="mt-2 flex items-center space-x-2">
                <div className="text-indigo-600 flex-grow overflow-hidden overflow-ellipsis max-w-[160px]">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger> <p >{shortnedUrl}</p></TooltipTrigger>
                            <TooltipContent>
                                {shortnedUrl}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                
                <FormButton Icon={ClipboardIcon} text='Copy' onFormSend={handleCopy} />
            </div>
        </div>
    )
}

export default ShortnedURL