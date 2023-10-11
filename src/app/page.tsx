'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { useMediaQuery } from '@chakra-ui/react';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';

export default function Home() {
  return <div></div>;
}
