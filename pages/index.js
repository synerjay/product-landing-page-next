import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Service from '../components/Service';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout pageTitle='Landing Page Nextjs'>
      <Header />
      <Hero />
      <Feature />
      <Service />
      <About />
      <Footer />
    </Layout>
  );
}
