import styles from "./Performer.module.scss";

function PerformerSection({ data }) {
    // console.log(data);
    return <div className={styles.container}>
        <div style={{
                backgroundImage: `url(${data.bannner_backgroud.url})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `top`,
                backgroundSize: `cover`,
            }} className={styles.waveDiv}></div>

        <div className={styles.innerContainer}>
            <div className={styles.flexLeft}>
                <h1>{data.section_title}</h1>
                <p>{data.section_subtitle}</p>
                <a href={data.cta.href}>
                    <p>{data.cta.title}</p>
                </a>
            </div>
            <div className={styles.flexRight}>
                <div style={{
                        backgroundImage: `url(${data.section_image.url})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                    }} className={styles.sectionImage}></div>
            </div>
        </div>
   
    </div>
}

export default PerformerSection;