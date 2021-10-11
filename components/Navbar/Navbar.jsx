import styles from "./Navbar.module.scss";
import {FiMenu} from "react-icons/fi";
import { useToggleContext } from "../../Context_API/store";


function Navbar ({data, scroll}) {
    let background = scroll ? `#614FB9` : `transparent`;
    const { sideBar, set_side_Bar } = useToggleContext();

    const hamburgerState = () => set_side_Bar(!sideBar);

    return <div style={{background: `${background}`}} className={styles.navContainer}>
            
                <div className={styles.logo}>
                    <img src={data.navbar_logo.url}></img>
                </div>
                <nav className={styles.Nav}>
                    <ul className={styles.navLinks}>
                        {data.navbar_links.map((item, index)=> (
                            item.iscta ? 
                            <li key={index} className={styles.ctaButton}><a href="#">{item.link_href.title}</a></li>
                            :
                            <div key={index} className={styles.navLinkDiv}>
                                <li><a href={item.link_href.href}>{item.link_href.title}</a></li>
                                <div className={styles.dropdown}>
                                    <div className={styles.subLeft}>
                                        <img src={item.left_div.left_div_image.url} alt="FinancingImage" />
                                        <p>{item.left_div.left_div_content}</p>
                                        <a href={item.left_div.read_more_link.href}>{item.left_div.read_more_link.title}</a>
                                    </div>
                                    <div className={styles.subRight}>
                                       {
                                            item.right_div.related_links.map((link, index) => (
                                                <li key={index}><a href={link.href}>{link.title}</a></li>
                                            ))
                                       }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </nav>
                <FiMenu size={50} className={styles.bars} onClick={hamburgerState}/>

    </div>
}

export default Navbar;