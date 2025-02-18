import Image from "next/image";

import { TeamMember } from "../types";

interface TeamMemberCardProps {
    member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
    return (
        <div className="text-center">
            <Image
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-purple-600 border-4 p-4"
                width={member.width}
                height={member.height}
            />
            <h3 className="font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
        </div>
    );
}