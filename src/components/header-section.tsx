'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
    title: string;
    description: string;
    startContent?: React.ReactNode;
    addButton?: boolean;
    addLabel?: string;
    addHref?: string;
    importButton?: boolean;
}

export const HeaderSection = (props: IProps) => {
    const { title, description, startContent, addButton, addLabel, addHref, importButton } = props;
    const pathname = usePathname();

    return (
        <main className="flex justify-center items-center pb-4">
            <section className="flex justify-between">
                {startContent}
            </section>
            <section className="flex flex-col w-full">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p className="text-sm text-gray-500">{description}</p>
            </section>
            <section className="flex justify-end gap-2">
                {
                    importButton ? (
                        <Button variant="secondary" size="sm">
                            Importar
                        </Button>
                    ) : null
                }
                {
                    addButton ? (
                        <Link href={addHref || `${pathname}/agregar/`} passHref>
                            <Button variant="default" size="sm">
                                {addLabel || "Agregar"}
                            </Button>
                        </Link>
                    ) : null
                }
            </section>
        </main>
    )
}
