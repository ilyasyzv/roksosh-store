// components/LanguageSwitcher.tsx
import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const locales = [
    { lang: 'en', flag: '🇺🇸', label: 'English' },
    { lang: 'ru', flag: '🇷🇺', label: 'Русский' },
    { lang: 'kg', flag: '🇰🇬', label: 'Кыргызча' },
];

const LanguageSwitcher: React.FC = () => {
    const router = useRouter();
    const [selectedLang, setSelectedLang] = useState<string>('en');

    useEffect(() => {
        // Get the language from the cookie after the component mounts
        const lang = getCookie('x-locale') as string;
        if (lang) {
            setSelectedLang(lang);  // Update the state if the cookie is found
        }
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    const changeLanguage = (lan: string) => {
        setCookie('x-locale', lan);  // Set the language cookie
        setSelectedLang(lan);        // Update the selected language in the state
        window.location.reload();    // Refresh the page to apply the language change
    };

    return (
        <div className="inline-block relative">
            <select
                value={selectedLang} // Bind the select value to the state
                onChange={(e) => changeLanguage(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
            >
                {locales.map(({ lang, flag }) => (
                    <option key={lang} value={lang}>
                        {flag}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.292 7.707a1 1 0 011.414 0L10 11.001l3.293-3.294a1 1 0 111.414 1.415l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.415z" />
                </svg>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
