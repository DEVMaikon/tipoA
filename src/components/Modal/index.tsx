import ReactDOM from "react-dom";

import { formatCurrency } from "../../utils/formatCurrency";

import { ModalContainer, Overlay } from "./styles";

import { productData } from "../../types/productData";

type ModalProps = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  productModal: productData;
};

export default function Modal({
  showModal,
  setShowModal,
  productModal,
}: ModalProps) {
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
            <img
              src={productModal.photo}
              alt={productModal.descriptionShort}
              title={productModal.descriptionShort}
            />
          </div>
          <div className="content">
            <h3>{productModal.productName}</h3>
            <strong>{formatCurrency(Number(productModal.price))}</strong>
            <p>{productModal.descriptionShort}</p>
            <a href="/">Veja mais detalhes do produto {`>`}</a>
          </div>
        </ModalContainer>
      </Overlay>
    ),
    document.getElementById("modal-root") as HTMLElement
  );
}
