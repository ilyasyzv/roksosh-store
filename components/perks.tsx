import React from "react";
import {
	PackageOpen,
	CheckCircle,
	Leaf,
} from 'lucide-react'
import { useTranslations } from "next-intl";

const Perks = () => {
    const t = useTranslations('Perks');

    const perks = [
        {
            name: t('perk_name1'),  // Translated name for "Quick Delivery"
            Icon: PackageOpen,
            description: t('perk_desc1'),  // Translated description
        },
        {
            name: t('perk_name2'),  // Translated name for "Guaranteed Quality"
            Icon: CheckCircle,
            description: t('perk_desc2'),  // Translated description
        },
        {
            name: t('perk_name3'),  // Translated name for "For the Planet"
            Icon: Leaf,
            description: t('perk_desc3'),  // Translated description
        },
    ];

    return (
        <section className='border-t border-gray-200 py-20'>
            <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
                {perks.map((perk) => (
                    <div
                        key={perk.name}
                        className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                        <div className='md:flex-shrink-0 flex justify-center'>
                        <div className='h-16 w-16 flex items-center justify-center rounded-full bg-beige-500 text-beige-900'>
                            {<perk.Icon className='w-1/3 h-1/3' />}
                        </div>
                        </div>

                        <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                        <h3 className='text-base font-medium text-gray-900'>
                            {perk.name}
                        </h3>
                        <p className='mt-3 text-sm text-muted-foreground'>
                            {perk.description}
                        </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Perks;