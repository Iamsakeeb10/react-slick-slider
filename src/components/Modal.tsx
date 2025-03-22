import "../../src/components/Modal.css";

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
