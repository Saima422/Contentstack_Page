import styles from './modal.module.scss'

export default function Modal(props){
    return(<>
    <div className={styles.modalOverlay}> </div>
     <div className={styles.modal}>
        <h2>
            {props.type==='Error' && <i className='fa fa-close' style={{color:'red'}}></i>}
            <span> {props.message} </span>
        </h2>
    </div>
    </>)
}