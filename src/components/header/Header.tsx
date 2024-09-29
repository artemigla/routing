import React from 'react'
import style from './style.module.scss';
import Link from 'next/link';
import '../../app/global.scss';

export default function Header() {
  return (
    <nav className={style.container}>
       <Link href={'/pages/main'}>Main</Link>
        <Link href={'/pages/about'}>About</Link>
        <Link href={'/pages/contacts'}>Contacts</Link>
    </nav>
  )
}
