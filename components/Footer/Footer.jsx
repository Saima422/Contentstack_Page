import styles from './Footer.module.scss'

function Footer({footerData}){
    
    let {contentstack_logo ,social_media_links,footer_links,legal_link,system_details} = footerData
    return(
        <footer className={styles.footer}>
            <div className={styles.footerRow1}>
                <div className={styles.logo}>
                    <img src={contentstack_logo.url} alt={contentstack_logo.title} />
                    <div className={styles.socialLinks}>
                        {social_media_links.map((link)=>{
                           return <i className={`fa fa-${link.title}`} href={link.href} key ={link.title}></i>
                        })}
                    </div>
                </div>
                <div className={styles.footerLinks}>
                {footer_links.map((linkItem)=>{
                    return( 
                    <div key={linkItem._metadata.uid} className={styles.linkColumn}>
                        <h2>
                            {linkItem.link_category}
                        </h2>
                        <ul>
                            {linkItem.link.map((link)=>{
                                return (
                                    <li key={link.title}><a href={link.href}>{link.title}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                )})}
                </div>
            </div>
              
            <div className={styles.footerRow2}>
                <div className={styles.systemStatus}>
                    <p>
                        {system_details.system_status}:
                        <a href={system_details.link.href}>
                            <i className={`fa fa-circle ${styles.active}`}></i>
                            {system_details.link.title}
                        </a>
                    </p>
                </div>
                <ul className={styles.legalLinks}>
                    {legal_link.map((link,i)=>{
                        return(
                            <li key={i}><a href={link.href}>{link.title}</a></li>
                        )
                    })}
                </ul>
            </div>  
        </footer>
    )
}
export default Footer

