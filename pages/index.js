import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss'
import Footer from '../components/Footer/Footer';
import BrandingLogos from '../components/Branding_Logos/BrandingLogos';
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';
import PerformerSection from '../components/Performer_Section/PerformanceSection';
import Sidebar from '../components/Sidebar/Sidebar';

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:4000/contentstack/homepage');
  const data = await res.json();
  return {
    props: {
      navbar : data.navbar,
      banner : data.banner,
      branding_logos : data.clients,
      performance_section: data.section,
      footer : data.footer
    }
  }
}

export default function Home({navbar, banner, branding_logos, performance_section, footer}) {

  const [scrollValue, setScrollValue] = useState(0);
  let sidebarValue = false;

  const handleScroll = () => {
    setScrollValue(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
      <div className={styles.container} style={{overflow: `hidden`}}>
        <Head>
          <title>Content Management System</title>
          <link rel="icon" href="/icon-image.png" />
        </Head>
          
        <Navbar data={navbar[0]} scroll={scrollValue} />
        <Banner data={banner[0]} />
        <BrandingLogos data={branding_logos} />
        <PerformerSection data={performance_section[0]} />
        <Footer footerData = {footer} />

        {
          sidebarValue ?
          <Sidebar data={navbar[0]} />
          :
          <></>
        }

      </div>    
  )
}


