import Image from "next/image";
import { Event } from "../types";

interface EventCardProps {
    event: Event;
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <div className="bg-purple-100 rounded-lg overflow-hidden flex gap-4 mb-4">
            <div className="flex-1 p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <button className="mt-4 text-purple-600">Lire plus →</button>
            </div>
            <Image
                src={event.imageUrl}
                alt={event.title}
                className="w-96 h-48 object-cover"
                width={event.width}
                height={event.height}
            />
        </div>
    );
}