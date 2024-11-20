/* eslint-disable @next/next/no-img-element */
'use client'

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IPrize } from "@/core"
import { DeleteIcon, Edit } from "lucide-react"

interface IProps {
  prize: IPrize
}

export default function CardItem(props: IProps) {
  const { imagen, nombre, descripcion } = props.prize

  return (
    <Card className={"w-[380px]"}>
      <CardHeader>
        <img src={imagen || '/no-image.png'} alt={nombre} />
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <div className="space-y-2">
          <CardTitle className="flex items-center justify-between">
            {nombre}
          </CardTitle>
          <CardDescription>{descripcion}</CardDescription>
        </div>
        <div className="flex gap-1">
          <Edit size={24} />
          <DeleteIcon size={24} />
        </div>
      </CardFooter>
    </Card>
  )
}