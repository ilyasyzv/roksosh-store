'use client';

import React from 'react';
import Link from 'next/link';

import MainNav from '@/components/main-nav';
import NavbarActions from '@/components/navbar-actions';
import { Icons } from '@/components/icons';

import { Category } from '@/types';
import LanguageSwitcher from '@/components/language-switcher';

export const revalidate = 0;

const Navbar = ({ categories }: { categories: Category[] }) => {
	return (
		<header className='border-b py-4 px-4 sm:px-6 lg:px-8'>
			<div className='container m-auto flex items-center flex-wrap gap-4'>
				<Link href='/'>
					<Icons.logo className="h-[20px] w-20 transform translate-y-[-3px]" />
					{/* <span className='font-bold text-xl'>STORE</span> */}
				</Link>
				<span className='mr-auto sm:ml-8'>
					<MainNav data={categories} />
				</span>
				<NavbarActions />
				<LanguageSwitcher />
			</div>
		</header>
	);
};

export default Navbar;
