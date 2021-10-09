import {AiOutlineClose} from "react-icons/ai";
import styles from "./Sidebar.module.scss";

function Sidebar ({data}){
    return <>
        <nav className={styles.navMenu }>
            <AiOutlineClose size={40} className={styles.close}/>
            <ul className={styles.navMenuItems}>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Login</a></li>
                <br></br>
                <br></br>
                {
                    data.navbar_links.map((item) => (
                        <>
                            <li><a href={item.link_href.href}>{item.link_href.title}</a></li>
                            {
                                item.right_div.related_links.map((link, index) => (
                                    <li key={index}><a href={link.href}>{link.title}</a></li>
                                ))
                            }
                            <br></br>
                            <br></br>
                        </>
                    ))
                }
            </ul>
        </nav>
    </>
    
}

export default Sidebar;