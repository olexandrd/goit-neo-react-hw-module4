import Modal from "react-modal";

import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ image, onClose, modalIsOpen }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
      {image && <p>Likes ❤️ {image.likes} </p>}
    </Modal>
  );
}

export default ImageModal;
