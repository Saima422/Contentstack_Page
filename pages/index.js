import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Banner from '../components/Banner/Banner';
import BrandingLogos from '../components/Branding_Logos/BrandingLogos';
import PerformerSection from '../components/Performer_Section/PerformanceSection';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';

import { useToggleContext } from '../Context_API/store';

const baseUrl = 'https://contentstack-backend-server.herokuapp.com'

export async function getServerSideProps(context) {
  try{
    const res = await fetch(`${baseUrl}/contentstack/homepage`);
    if(res.status !== 200){
      throw new Error(`${res.status} | ${res.statusText}`)
    }
    const data = await res.json();
    return {
      props: {
        page: data.page_metadata,
        navbar : data.navbar[0],
        banner : data.banner[0],
        branding_logos : data.clients[0],
        performance_section: data.section[0],
        footer : data.footer[0]
      }
    }
  }catch(err){
    return{
      props: {
        error:{
          message: err.message
        }
      }
    }
  }
}

export default function Home({page, navbar, banner, branding_logos, performance_section, footer, error}) {
  const [scrollValue, setScrollValue] = useState(0);
  const { sideBar } = !useToggleContext() 

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
      
      <div className={styles.container}>
        {!error ?
        <>
          <Head>
            <title>{page.page_title}</title>
            <link rel="icon" href={page.icon.url}/>
          </Head>
            
          <Navbar data={navbar} scroll={scrollValue} />
          <Banner data={banner} />
          <BrandingLogos data={branding_logos} />
          <PerformerSection data={performance_section} />
          <Footer footerData = {footer} />
          {sideBar && <Sidebar data={navbar} />}
        </>
        :
        <Modal type='Error' message={error.message}/>
        }
      </div>    
  )
}
