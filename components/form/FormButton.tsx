'use client';
import { Button } from '../ui/button'
import {  LucideIcon } from 'lucide-react'

interface IFormButtonProps {
    Icon: LucideIcon
    text: string;
    onFormSend: (data: unknown) => void; 
}

const FormButton = ({Icon, text, onFormSend}: IFormButtonProps) => {
  return (
    <Button className="flex flex-row gap-1 px-4" size="sm" variant="outline" onClick={onFormSend}>
          <Icon className="w-4 h-4" />
          {text}
    </Button>
  )
}

export default FormButton