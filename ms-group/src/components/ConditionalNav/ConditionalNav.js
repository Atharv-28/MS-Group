"use client";

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';

export default function ConditionalNav() {
  const pathname = usePathname() || '/';
  if (pathname.startsWith('/mavenside')) return null;
  return <Navbar />;
}
