export interface ICreateShortUrlForm {
    url: string;
}


export interface IStateForm {
    shortnedUrl: string | null;
    isLoading: boolean;
    hasSentForm: boolean;
    error:boolean;
}

export interface IStateFormAction{
    type: string;
    payload?: any;
}