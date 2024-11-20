import { cn } from "@/lib/utils";

const size = {
  small: 'text-2xl',
  medium: 'text-3xl',
  large: 'text-xl md:text-4xl lg:text-5xl',
}

interface TitleProps {
    title?: string;
    size?: 'small' | 'medium' | 'large';
}

export const Title = (
    {title}: TitleProps
) => {
  return (
    <h1 className={cn('font-bold', size)}>
        {title || 'Title'}
    </h1>
  )
}
