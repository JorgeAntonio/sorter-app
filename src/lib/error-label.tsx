import { cn } from "@/lib/utils"
import React from "react"

interface IProps {
    message: string[] | undefined
    classNames?: string
}

export const ErrorLabel = (props: IProps) => {
    const { message, classNames} = props

    return (
        <p
            className={cn("text-sm font-medium text-destructive", classNames)}
        >
            {message}
        </p>
    )
}
