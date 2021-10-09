import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Footer from '../components/Footer/Footer';
import BrandingLogos from '../components/Branding_Logos/BrandingLogos';

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

export default function Home({ banner, branding_logos, performance_section, footer}) {
  return (

    <div className={styles.container}>
      <Head>
        <title>Content Management System</title>
        <link rel="icon" href="/icon-image.png" />
      </Head>

      <main>
        <BrandingLogos data={branding_logos} />
      </main>
      <Footer footerData = {footer} />
    </div>
  )
}
