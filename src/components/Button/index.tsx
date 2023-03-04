import { ButtonDefault } from "./styles";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return <ButtonDefault onClick={onClick}>{label}</ButtonDefault>;
}
