import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-white py-8 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="gradient-text">
                                UN MONDE DIGITAL,
                            </span>
                            <br />
                            <span className="gradient-text">POUR </span>{" "}
                            <span className="text-[#24325F]">TOUS</span>{" "}
                            <span className="gradient-text"> ET PAR</span>
                            <br />
                            <span className="text-[#24325F]">TOUS !</span>
                        </h1>
                        <p className="text-gray-600 mb-8 text-base md:text-lg">
                            Plus qu&apos;une association, une communauté où la diversité, l&apos;innovation et l&apos;apprentissage numérique se rencontrent, développons-nous et découvrez un univers technologique stimulant et inclusif.
                        </p>
                        <button className="border-purple-600 border-4 gradient-text px-4 md:px-6 py-2 md:py-3 font-bold text-sm md:text-base">
                            REJOINDRE LA COMMUNAUTÉ
                        </button>
                    </div>
                    <div className="w-full md:w-auto">
                        <Image
                            src="/images/robot-mascotte.png"
                            alt="Robot mascot 1"
                            className="w-full max-w-md mx-auto"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}