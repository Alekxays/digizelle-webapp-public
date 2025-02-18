import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="w-full py-4 px-6">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-purple-600 text-2xl font-bold">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={150}
                        height={150}
                    />
                </Link>
                <div className="flex gap-6 items-center">
                    <Link href="/about" className="text-gray-700">À PROPOS</Link>
                    <Link href="/programs" className="text-gray-700">NOS PROGRAMMES</Link>
                    <Link href="/team" className="text-gray-700">ÉQUIPE</Link>
                    <Link href="/projects" className="text-gray-700">NOS RÉALISATIONS</Link>
                    <Link href="/contact" className="bg-purple-600 text-white px-4 py-2 rounded">
                        CONTACT
                    </Link>
                </div>
            </nav>
        </header>
    );
}