import { useToggleContext } from "../../Context_API/store";
import styles from "./Performer.module.scss";

function PerformerSection({ data }) {
    // const {sideBar} = useToggleContext();

    return <div style={{
            // position: sideBar ? 'fixed': ""
        }} className={styles.container}>
        <div style={{backgroundImage: `url(${data.bannner_backgroud.url})`}} className={styles.waveDiv}></div>
        <div className={styles.section}>
                <div className={styles.imgContainer}>
                    <img src={data.section_image.url} width={200} />
                </div>
                <div className={styles.contentContainer}>
                    <h2>{data.section_title}</h2>
                    <p>{data.section_subtitle}</p>
                    <a href={data.cta.href}>
                        <p>{data.cta.title}</p>
                    </a>
                </div>
            </div>
            
        </div>
}

export default PerformerSection;