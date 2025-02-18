import { Program } from "../types";

interface ProgramCardProps {
    program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
    const getColorClass = (title: string) => {
        switch (title) {
            case "Atelier Immersif": return "pink";
            case "Masterclass": return "purple";
            default: return "blue";
        }
    };

    const color = getColorClass(program.title);

    const bgColorClass = color === "pink"
        ? "bg-pink-500"
        : color === "purple"
            ? "bg-purple-500"
            : "bg-blue-500";

    return (
        <div
            className={`bg-white rounded-xl p-4 md:p-6 relative flex flex-col justify-between transition-transform duration-300 ease-in-out 
                ${program.featured ? "h-auto md:h-96 transform md:scale-105" : "h-auto md:h-80"}`}
        >
            <div
                className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 md:w-12 h-10 md:h-12 rounded-full ${bgColorClass}`}
            />

            <div className="mt-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">
                    {program.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base text-center">
                    {program.description}
                </p>
            </div>

            <button
                className={`w-full py-2 px-3 md:px-4 mt-4 rounded text-sm md:text-base
                    ${bgColorClass} text-white`}
            >
                {program.buttonText}
            </button>
        </div>
    );
}