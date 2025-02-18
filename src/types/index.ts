export interface Event {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    width: number;
    height: number;
}

export interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
    width: number;
    height: number;
}

export interface Program {
    title: string;
    description: string;
    buttonText: string;
    featured?: boolean;
}