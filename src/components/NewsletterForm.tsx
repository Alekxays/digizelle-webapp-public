export default function NewsletterForm() {
    return (
        <div className="relative w-full">
            <div className="w-full h-32 overflow-hidden -mb-1">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="100%" y1="50%" x2="0%" y2="50%">
                            <stop offset="0%" stopColor="#7301FF" />
                            <stop offset="100%" stopColor="#A34BF5" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,266.7C672,267,768,245,864,229.3C960,213,1056,203,1152,202.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        fill="url(#waveGradient)"
                    />
                </svg>
            </div>

            <div className="gradient text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Texte à gauche */}
                        <div className="space-y-3 text-center md:text-left">
                            <h2 className="text-xl">Ne manquez pas nos prochains événements</h2>
                            <h3 className="text-xl font-semibold">Abonnez-vous à la newsletter</h3>
                        </div>

                        {/* Formulaire à droite */}
                        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="px-4 py-2 rounded-lg text-gray-900 w-full md:min-w-[300px]"
                            />
                            <button className="bg-white hover:bg-opacity-90 transition-colors text-purple-600 px-6 py-2 rounded-lg font-medium whitespace-nowrap w-full md:w-auto">
                                S&apos;INSCRIRE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}