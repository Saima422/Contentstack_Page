import styles from "./Banner.module.scss";

function Banner({ data }) {
    return <div style = {{
            background: `url(${data.banner_image.url})`, 
            backgroundSize: `cover`, 
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
        }} className={styles.container}>

        <div className={styles.innerContainer}>
            <div className={styles.flexLeft}>
                <h1>{data.banner_heading}</h1>
                <p>{data.banner_content}</p>
                <a href={data.cta.href}>
                    <p>{data.cta.title}</p>
                </a>
            </div>
            <div className={styles.flexRight}>
                <h5>{data.banner_tagline}</h5>
            </div>
        </div>
   
    </div>
}

export default Banner;