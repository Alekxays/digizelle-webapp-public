import { Program } from "../types";

interface ProgramCardProps {
    program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
    return (
        <div
            className={`bg-white rounded-xl p-6 relative flex flex-col justify-between transition-transform duration-300 ease-in-out ${program.featured ? "h-96 transform scale-105" : "h-80"
                }`}
        >
            {/* Colored circle above card */}
            <div
                className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full 
          ${program.title === "Atelier Immersif"
                        ? "bg-pink-500"
                        : program.title === "Masterclass"
                            ? "bg-purple-500"
                            : "bg-blue-500"
                    }`}
            />

            <div>
                <h3 className="text-xl font-bold mb-4 text-center">{program.title}</h3>
                <p className="text-gray-600 text-center">{program.description}</p>
            </div>

            <button
                className={`w-full py-2 px-4 rounded 
          ${program.title === "Atelier Immersif"
                        ? "bg-pink-500"
                        : program.title === "Masterclass"
                            ? "bg-purple-500"
                            : "bg-blue-500"
                    } text-white`}
            >
                {program.buttonText}
            </button>
        </div>
    );
}