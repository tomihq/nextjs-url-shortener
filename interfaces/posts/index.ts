export interface IPost {
    slug: string;
    title: string;
    badges: IBadge[]
}

export interface IBadge{
    id: string;
    name: string;
    hex: string;
}