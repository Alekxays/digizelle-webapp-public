import Image from 'next/image';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgramCard from '@/components/ProgramCard';
import EventCard from '@/components/EventCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  const programs = [
    {
      title: 'Atelier Immersif',
      description: 'Lorem Ipsum is not Simply Random Text. It Has Roots',
      buttonText: 'DÉCOUVRIR'
    },
    {
      title: 'Masterclass',
      description: 'Lorem Ipsum is not Simply Random Text. It Has Roots',
      buttonText: 'DÉCOUVRIR',
      featured: true
    },
    {
      title: 'Hackathon',
      description: 'Lorem Ipsum is not Simply Random Text. It Has Roots',
      buttonText: 'DÉCOUVRIR'
    }
  ];

  const events = [
    {
      id: '1',
      title: 'Prix Du Numéro Bla',
      description: 'Lorem Ipsum is not Simply Random Text. It Has Roots',
      imageUrl: '/images/exemple.png',
      width: 400,
      height: 300
    },
    // Add more events...
  ];

  const teamMembers = [
    {
      name: 'Priscillia Meza',
      role: 'Co-Fondatrice',
      imageUrl: '/images/robot.png',
      width: 128,
      height: 128
    },
    {
      name: 'Priscillia Meza',
      role: 'Co-Fondatrice',
      imageUrl: '/images/robot.png',
      width: 128,
      height: 128
    },
    {
      name: 'Priscillia Meza',
      role: 'Co-Fondatrice',
      imageUrl: '/images/robot.png',
      width: 128,
      height: 128
    },
    {
      name: 'Priscillia Meza',
      role: 'Co-Fondatrice',
      imageUrl: '/images/robot.png',
      width: 128,
      height: 128
    },
    // Add more team members...
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      <div className="relative w-full">
        {/* Top Wave */}
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

        <section className="relative gradient px-6">
          <div className="relative max-w-7xl mx-auto py-16">
            {/* Robot Placeholder Image */}
            <div className="hidden lg:block absolute left-[calc(-8rem-2vw)] lg:left-[calc(-10rem-5vw)] xl:left-[calc(-12rem-8vw)] top-1/2 transform -translate-y-1/2 w-32 lg:w-40 xl:w-48 aspect-square">
              <Image src="/images/robot.png" alt="Robot mascot" className="w-full h-full object-contain" width={100} height={100} />
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <h2 className="text-white text-3xl font-bold">DIGIZELLE</h2>
              </div>
              <p className="text-white max-w-4xl mx-auto">
                fondée en 2023 par deux passionnées du digital, c&apos;est une association dédiée à l&apos;inclusion et à l&apos;épanouissement des jeunes dans le domaine numérique. Sa mission est de créer un espace où chacun, quel que soit son niveau, peut se développer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {programs.map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Wave */}
        <div className="w-full h-32 overflow-hidden -mt-1">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient2" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#7301FF" />
                <stop offset="100%" stopColor="#A34BF5" />
              </linearGradient>
            </defs>
            <path
              d="M0,96L48,90.7C96,85,192,75,288,58.7C384,43,480,21,576,21.3C672,21,768,43,864,58.7C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="url(#waveGradient2)"
            />
          </svg>
        </div>
      </div>

      <section>
        <div className="flex flex-col max-w-7xl mx-auto px-6">
          <Image
            src="/images/robot-mascotte-1.png"
            alt="Events"
            width={150}
            height={150}
            className="mb-12 mx-auto"
          />
          <h2 className="text-3xl font-bold mb-12 text-center text-[#333333]">QUELQUES ÉVÉNEMENTS MARQUANT</h2>
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <div className="relative w-full">
        <div className="w-full h-32 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient3" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#7301FF" />
                <stop offset="100%" stopColor="#A34BF5" />
              </linearGradient>
            </defs>
            <path d="M0,160 L1440,140 L1440,200 L0,200 Z" fill="url(#waveGradient3)" />
          </svg>
        </div>

        <section className="gradient px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-12 text-center max-w-4xl mx-auto">
              VOUS ÊTES PASSIONNÉ PAR LE NUMÉRIQUE ET SOUHAITEZ FAIRE PARTIE D&apos;UNE COMMUNAUTÉ DYNAMIQUE ET INCLUSIVE ?
            </h2>

            <div className="flex px-12 items-center font-bold">
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/images/robot-mascotte-2.png"
                  alt="Robot mascot"
                  width={500}
                  height={500}
                  className="w-7xl"
                />
              </div>
              <div>
                <p className="text-white md:text-left text-center pr-24 text-lg">
                  Devenez membre de DIGIZELLE et participez à nos événements, formations et projets innovants ! Ensemble, inspirons et soutenons les jeunes talents dans leur parcours digital. N&apos;attendez plus, rejoignez-nous et faites la différence !
                </p>
                <div className="flex justify-center md:justify-start mt-8">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                    REJOIGNEZ-NOUS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-32 overflow-hidden -mt-1">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient2" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#7301FF" />
                <stop offset="100%" stopColor="#A34BF5" />
              </linearGradient>
            </defs>
            <path
              d="M0,96L48,90.7C96,85,192,75,288,58.7C384,43,480,21,576,21.3C672,21,768,43,864,58.7C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="url(#waveGradient2)"
            />
          </svg>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#333333]">NOTRE ÉQUIPE</h2>
          <div className="grid grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterForm />
    </main>
  );
}