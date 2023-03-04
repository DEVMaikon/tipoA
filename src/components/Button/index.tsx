import { ButtonDefault } from "./styles";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ label, className, onClick }: ButtonProps) {
  return (
    <ButtonDefault onClick={onClick} className={className}>
      {label}
    </ButtonDefault>
  );
}
