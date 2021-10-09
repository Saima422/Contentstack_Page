import { useEffect, useState } from "react";
import styles from "./Banner.module.scss";

function Banner({ data }) {
   let [bannerImage ,setBannerImage]= useState(`url(${data.banner_image.url})`);

    useEffect(()=>{
        window.addEventListener("resize" || "onload", ()=>{
            if(window.innerWidth < 1009){
                setBannerImage('radial-gradient(circle,#eb5646 0,#eb5646 90%,#2a0f57 0,#2a0f57 100%)')
            }else{
                setBannerImage(`url(${data.banner_image.url})`)
            }
        });
    },[])

    return (
        <div style = {{backgroundImage: bannerImage}} className={styles.container}>    
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
    )
}

export default Banner;