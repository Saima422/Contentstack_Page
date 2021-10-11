import {AiOutlineClose} from "react-icons/ai";
import { useToggleContext } from "../../Context_API/store";
import styles from "./Sidebar.module.scss";

function Sidebar ({data}){
    const { sideBar, set_side_Bar } = useToggleContext();
    
    const toggleState = () => {
        set_side_Bar(!sideBar);
    }

    return <>
        <nav className={styles.navMenu }>
            <AiOutlineClose size={40} className={styles.close} onClick={toggleState}/>
            <ul className={styles.navMenuItems}>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Login</a></li>
                <br/><br/>
                {
                    data.navbar_links.map((item, i) => (
                        <>
                            <li className={(item.iscta? styles.ctaButton : '')} key={item.link_href.title}>
                                <a href={item.link_href.href}>{item.link_href.title}</a>
                            </li>
                            {
                                item.right_div.related_links.map((link, index) => (
                                    <li key={index}><a href={link.href}>{link.title}</a></li>
                                ))
                            }
                            <br/><br/>
                        </>
                    ))
                }
            </ul>
        </nav>
    </>
    
}

export default Sidebar;