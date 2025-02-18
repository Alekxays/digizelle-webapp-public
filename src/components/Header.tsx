import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
    { href: '/about', label: 'À PROPOS' },
    { href: '/programs', label: 'NOS PROGRAMMES' },
    { href: '/team', label: 'ÉQUIPE' },
    { href: '/projects', label: 'NOS RÉALISATIONS' },
];

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
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-700 hover:text-purple-600 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                    >
                        CONTACT
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" aria-label="Menu">
                            <Menu className="h-6 w-6 " />
                        </Button>
                    </SheetTrigger>
                    <SheetContent aria-labelledby='navigation'>
                        <SheetTitle className="text-lg font-semibold mb-4">Navigation</SheetTitle>
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-700 hover:text-purple-600 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="bg-purple-600 text-white px-4 py-2 rounded text-center hover:bg-purple-700 transition-colors"
                            >
                                CONTACT
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}