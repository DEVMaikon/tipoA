import { ButtonDefault } from "./styles";

type ButtonProps = {
  label: string;
};

export default function Button({ label }: ButtonProps) {
  return <ButtonDefault>{label}</ButtonDefault>;
}
