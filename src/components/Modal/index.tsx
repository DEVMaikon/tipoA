import ReactDOM from "react-dom";
import { ModalContainer, Overlay } from "./styles";

import ProductSmartphone from "../../assets/images/ProductSmartphone.webp";

type ModalProps = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
};

export default function Modal({ showModal, setShowModal }: ModalProps) {
  return ReactDOM.createPortal(
    showModal && (
      <Overlay>
        <ModalContainer>
          <div className="close-btn">
            <button type="button" onClick={() => setShowModal(false)}>
              X
            </button>
          </div>
          <div className="image">
            <img src={ProductSmartphone} alt="Smartphone" />
          </div>
          <div className="content">
            <h3>LOREM IPSUM DOLOR SIT AMET</h3>
            <strong>R$ 1.499,90</strong>
            <p>
              Many desktop publishing packages and web page editors now many
              desktop publishing
            </p>
            <a href="/">Veja mais detalhes do produto {`>`}</a>
          </div>
        </ModalContainer>
      </Overlay>
    ),
    document.getElementById("modal-root") as HTMLElement
  );
}
