/* eslint-disable @next/next/no-img-element */
'use client'

import { Card, CardContent} from "@/components/ui/card"
import { IPrize } from "@/core"
import { PenSquare, Trash2 } from "lucide-react"
import { Button } from "./ui/button"


interface IProps {
  prize: IPrize
}

export default function CardItem(props: IProps) {
  const { imagen, nombre, descripcion } = props.prize

  return (
    <Card className="w-[450px] h-[100px] bg-white hover:shadow-md hover:bg-gray-100">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-lg">
           <img src={imagen || 'https://img.freepik.com/foto-gratis/champinones-salteados-calabaza-pimiento-dulce_2829-10315.jpg?t=st=1732124225~exp=1732127825~hmac=fb0305edcf439f4fec4cda2251c4b9dee7afb4e5b5458e9302c3c8a754bab8d2&w=1380'} alt={nombre} />
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="font-medium text-gray-900">{nombre}</h3>
          <p className="text-sm text-gray-500">{descripcion}</p>
        </div>
        <div className="flex gap-2">
          <Button size={'icon'} variant={'ghost'}>
            <PenSquare className="h-4 w-4" />
            <span className="sr-only">Editar</span>
          </Button>
          <Button size={'icon'} variant={'ghost'}>
            <Trash2 className="h-4 w-4 text-red-500" />
            <span className="sr-only">Eliminar</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}