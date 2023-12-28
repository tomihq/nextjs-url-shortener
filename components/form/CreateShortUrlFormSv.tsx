import React from 'react'
import CreateShortUrlFormC from './CreateShortUrlFormC'
import { ICreateShortUrlForm } from '@/interfaces';
import { createShortnedUrl } from '@/services/';


const CreateShortUrlFormSv = () => {
  const handleSendForm = async(data: ICreateShortUrlForm) => {
    "use server"
    const response = await createShortnedUrl(data);
    return response;
  }
  return (
    <div className="space-y-4">
      {/* @ts-ignore */}
      <CreateShortUrlFormC onFormSend={handleSendForm} />
    </div>
  )
}

export default CreateShortUrlFormSv