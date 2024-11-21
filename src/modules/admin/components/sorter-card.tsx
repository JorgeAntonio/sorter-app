'use client'

import { CalendarClock, Edit2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ISorter } from '@/core'
import { useEffect, useState } from 'react'

interface IProps {
    sorter: ISorter
}

const prizes = [
    { name: 'iPhone 15 Pro', status: 'Esperando fecha del sorteo' },
    { name: 'MacBook Air M2', status: 'Esperando fecha del sorteo' }
]

const calculateTimeLeft = (fechaSorteo: string) => {
    const now = new Date().getTime();
    const targetDate = new Date(fechaSorteo).getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

export const SorterCard = (props: IProps) => {
    const { sorter } = props;

    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(sorter.fechaSorteo));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(sorter.fechaSorteo));
        }, 1000);

        return () => clearInterval(timer);
    }, [sorter.fechaSorteo]);

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-bold">
                            {sorter.nombre}
                        </h1>
                        <div className="flex items-center text-muted-foreground">
                            <CalendarClock className="w-4 h-4 mr-2" />
                            {new Date(sorter.fechaSorteo).toLocaleString()}
                        </div>
                    </div>
                    <Button variant="ghost" size="icon">
                        <Edit2 className="w-4 h-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {[
                        { value: timeLeft.days, label: 'DÍAS' },
                        { value: timeLeft.hours, label: 'HORAS' },
                        { value: timeLeft.minutes, label: 'MINUTOS' },
                        { value: timeLeft.seconds, label: 'SEGUNDOS' }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm p-4 text-center border"
                        >
                            <div className="text-3xl font-bold text-blue-600">{item.value}</div>
                            <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                        </div>
                    ))}
                </div>
            </CardHeader>
            <CardContent>
                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                    0 tickets pagados
                </Badge>
            </CardContent>
            <CardFooter className='flex flex-col gap-2 w-full'>
                    {prizes.map((prize, index) => (
                        <Card key={index} className='w-full'>
                            <CardContent className="flex items-center justify-between p-4">
                                <div className="space-y-1">
                                    <h3 className="font-semibold">{prize.name}</h3>
                                    <p className="text-sm text-muted-foreground">{prize.status}</p>
                                </div>
                                <Button variant="default" size="sm">
                                    Sortear premio
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
            </CardFooter>
        </Card>
    );
};
