'use client';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod';
import { createShortUrlFormSchema } from '@/schemas/url';
import { z } from 'zod';
import ShortnedURL from '../ShortnedURL';
import { useReducer } from 'react';
import { IStateForm } from '@/interfaces';
import { formReducer } from '@/reducers/form/formReducer';
import { Check, XIcon } from 'lucide-react';
import { LoadingSpinner } from '../ui/loadingspinner';

interface ICreateShortUrlFormC {
    onFormSend: (values: unknown) => string | null;
}

const initialStateForm: IStateForm = {
    shortnedUrl: "",
    isLoading: false,
    hasSentForm: false,
    error: false
  }

const CreateShortUrlFormC = ({ onFormSend }: ICreateShortUrlFormC) => {
    const [state, dispatch] = useReducer(formReducer, initialStateForm)
    const {isLoading, hasSentForm, error, shortnedUrl} = state;

    const form = useForm<z.infer<typeof createShortUrlFormSchema>>({
        resolver: zodResolver(createShortUrlFormSchema),
        defaultValues: {
          url: "",
        },
    })

    async function onSubmit(values: z.infer<typeof createShortUrlFormSchema>) {
        if(isLoading) return;

        if(hasSentForm) return alert("Please reload the page.")
        dispatch({type: 'start_loading'})
        const { url } = values;
        const response = await onFormSend(url);
        if(response){
            dispatch({type: 'set_shortned_url', payload: response})
            dispatch({type: 'send_form'})
        }else{
            dispatch({type: 'set_error'})
          
        }
        dispatch({type: 'end_loading'})
    }

    return (
            <div>
                <Form {...form} >
                <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="url"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="Paste your URL here" type='url' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className="w-full" type="submit">
                        {
                            !hasSentForm && !isLoading && "Shorten URL"
                        }
                        {
                            !hasSentForm && isLoading && <LoadingSpinner/>
                        }
                        {
                            hasSentForm && !isLoading && <Check size={28} className='text-green-500 bg-gray-800 p-1 rounded-full'/>
                        }
                        {
                            hasSentForm && error && <XIcon/>
                        }
                    </Button>
                </form>
            </Form>
            <ShortnedURL shortnedUrl={shortnedUrl}/>
            </div>
            )
}

export default CreateShortUrlFormC