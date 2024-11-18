import Image from 'next/image';

interface CertificationProps {
    imageSrc: string;
    name: string;
    issuer: string;
    link: string;
}

export function CertificationCard({ imageSrc, name, issuer, link }: CertificationProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-900/50 rounded-lg overflow-hidden
                transform transition-all duration-300 hover:-translate-y-1
                border border-gray-800 hover:border-purple-500/50
                hover:shadow-lg hover:shadow-purple-500/10 w-36 sm:w-40 lg:w-44"
        >
            <div className="p-4 flex flex-col items-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 20vw, (max-width: 768px) 15vw, (max-width: 1024px) 10vw, 8vw"
                        className="object-contain transform transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <h3 className="text-sm sm:text-base font-medium text-center text-gray-300 group-hover:text-white">
                    {name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 text-center">
                    {issuer}
                </p>
            </div>
        </a>
    );
}
