import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen gradient bg-cover bg-no-repeat flex items-center justify-center">
            <div className="text-center p-8">
                <h1 className="text-8xl font-bold text-white mb-4">404</h1>
                <p className="text-2xl text-white mb-8">Oups ! Cette page n&apos;existe pas</p>

                <Image
                    src="/images/robot.png"
                    alt="Sad robot"
                    className="w-32 h-32 mx-auto mb-8"
                    width={128}
                    height={128}
                />

                <Link
                    href="/"
                    className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
                >
                    Retour à l&apos;accueil
                </Link>
            </div>
        </div>
    );
}