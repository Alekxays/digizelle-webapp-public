import Image from "next/image";
import { TeamMember } from "../types";

interface TeamMemberCardProps {
    member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
    return (
        <div className="text-center p-4">
            <div className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48">
                <Image
                    src={member.imageUrl}
                    alt={member.name}
                    className="rounded-full border-4 border-purple-600 p-2"
                    layout="responsive"
                    width={member.width}
                    height={member.height}
                />
            </div>
            <h3 className="font-bold mt-4 text-lg sm:text-xl">{member.name}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
        </div>
    );
}