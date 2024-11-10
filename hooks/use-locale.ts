import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';

// Custom hook to get the locale from the cookie and update any field dynamically
const useLocale = () => {
    const [locale, setLocale] = useState<string>('en');

    useEffect(() => {
        // Get the language from the cookie on the client side after the component mounts
        const lang = getCookie('x-locale') as string;
        if (lang) {
            setLocale(lang); // Set the locale state based on the cookie
        }
    }, []); // This runs only once on component mount

    // Function to get the localized value of any property (e.g., label, name, description)
    const getLocalizedValue = (object: any, property: string) => {
        // If the object is not valid, return an empty string or fallback value
        if (!object || typeof object !== 'object') return '';

        const baseProperty = object[property];
        if (baseProperty === undefined || baseProperty === null) return ''; // Fallback if the base property is missing

        // Handle specific cases for objects that contain other nested properties
        if (typeof baseProperty === 'string') {
            // For simple properties like `label`, `name`, or `description`
            switch (locale) {
                case 'ru':
                    return object[`${property}Ru`] || baseProperty; // e.g. nameRu, descriptionRu
                case 'kg':
                    return object[`${property}Kg`] || baseProperty; // e.g. nameKg, descriptionKg
                default:
                    return baseProperty; // Default to the original property if no localization exists
            }
        }

        // Fallback logic if the property is not a simple string (e.g., nested object or array)
        return baseProperty;
    };

    return { locale, getLocalizedValue };
};

export default useLocale;
