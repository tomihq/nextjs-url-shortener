import XIcon from "@/components/icons/XIcon";
import { ISocialMedia } from "@/interfaces";
import { Github } from 'lucide-react';

export const SOCIAL_MEDIA:ISocialMedia[] = [
    {
        id: 'github',
        link: 'https://www.github.com/tomihq',
        component: Github
    },
    {
        id: 'x',
        link: 'https://www.twitter.com/tomihqdev',
        // @ts-ignore 
        component: XIcon
    }
]