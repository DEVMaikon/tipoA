export interface CardProductProps {
  image: string;
  title: string;
  oldPrice?: string;
  price: string;
  condition?: string;
  delivery?: string;
  setShowModal: (state: boolean) => void;
}
