import ReactDOM from 'react-dom';
import styles from './modal.module.css';

const Modal = ({ isOpen, hide, children }) =>
  isOpen
    ? ReactDOM.createPortal(
        <div>
          <div className={styles.modalBg} onClick={hide}></div>
          <div className={styles.container}>
            <div className={styles.modal}>
              <button className={styles.closeBtn} onClick={hide}>
                &times;
              </button>
              <div className={styles.content}>{children}</div>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

export default Modal;
