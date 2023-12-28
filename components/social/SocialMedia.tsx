import { SOCIAL_MEDIA } from "@/config/socialMedia";
import { ISocialMedia } from "@/interfaces";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const SocialMedia = () => {
  return (
    <ul className="flex gap-6 mt-6 animate-fade-in-up">
      {SOCIAL_MEDIA.map((item: ISocialMedia) => {
        return (
          <li key={item.id}>
            <Link href={item.link} rel="noopener noreferrer" target="_blank">
              <Button size="icon" variant="outline">
                {/* @ts-ignore */}
                <item.component className="h-6 w-6 dark:text-gray-100" />
              </Button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
