"use client"

import { useTranslations } from 'next-intl';
import React from 'react';

const Banner = () => {
    const t = useTranslations('Banner');

    return (
        <div className='bg-home bg-cover h-home py-8 px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center items-start'>
            <div className="container m-auto">
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                    {t('title')} <br /> {t('subtitle1')}{' '}
                    <span className='text-beige-500'>
                        {t('subtitle2')}
                    </span>
                    .
                </h1>
                <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
                    {t('paragraph')}
                </p>
            </div>
        </div>
    )
}

export default Banner;