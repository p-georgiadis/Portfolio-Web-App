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
                hover:shadow-lg hover:shadow-purple-500/10
                w-full md:w-44 lg:w-48"
        >
            <div className="p-2 md:p-4 flex flex-col items-center">
                <div className="relative w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-2 md:mb-4">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 20vw, (max-width: 768px) 15vw, (max-width: 1024px) 10vw, 8vw"
                        className="object-contain transform transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <h3 className="text-xs md:text-sm lg:text-base font-medium text-center text-gray-300 group-hover:text-white min-h-[2.5rem] md:min-h-[3rem]">
                    {name}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 text-center">
                    {issuer}
                </p>
            </div>
        </a>
    );
}
