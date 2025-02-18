import Image from "next/image";
import { Event } from "../types";

interface EventCardProps {
    event: Event;
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <div className="bg-purple-100 rounded-lg overflow-hidden flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{event.description}</p>
                <button className="mt-4 text-purple-600 text-sm md:text-base">
                    Lire plus →
                </button>
            </div>
            <div className="w-full md:w-96">
                <Image
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                    width={event.width}
                    height={event.height}
                />
            </div>
        </div>
    );
}