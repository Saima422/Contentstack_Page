import styles from "./Navbar.module.scss";

function Navbar ({data, scroll}) {
    console.log(data);
    let background = scroll ? `#614FB9` : `transparent`;

    return <div style={{
            background: `${background}`,
        }} className={styles.navContainer}>
        <div className={styles.logo}>
                <img src={data.navbar_logo.url}></img>
            </div>
        <nav>
            <ul className={styles.navLinks}>
                {data.navbar_links.map((item, index)=> (
                    item.iscta ? 
                    <li key={index} className={styles.ctaButton}><a href="#">{item.link_href.title}</a></li>
                    :
                    <li key={index}><a href="#">{item.link_href.title}</a></li>

                ))}
            </ul>
        </nav>
    </div>
}

export default Navbar;