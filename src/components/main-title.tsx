import { cn } from "@/lib/utils";

interface TitleProps {
    title?: string;
    size?: 'small' | 'medium' | 'large';
}

const size = cn({
    small: 'text-2xl',
    medium: 'text-3xl',
    large: 'text-4xl',
})

export const Title = (
    {title}: TitleProps
) => {
  return (
    <h1 className={cn('font-bold', size)}>
        {title || 'Title'}
    </h1>
  )
}
