import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout pageTitle='Landing Page Nextjs'>
      <Header />
      <Hero />
    </Layout>
  );
}
