'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToastMessage } from '@/hooks/use-toast-message';

interface IProps {
    message?: string;
    url?: string;
}

export function useFormFeedback({ message, url }: IProps) {
    const router = useRouter();

    useToastMessage(message);

    useEffect(() => {
        if (message && message.includes('Éxito')) {
            router.push(url || '/auth?sign-up=false');
        }
    }, [message, router, url]);
}
