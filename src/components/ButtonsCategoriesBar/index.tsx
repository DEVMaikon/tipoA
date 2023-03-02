import { ButtonCategory } from "./style";

type ButtonsCategoriesBarProps = {
  label: string;
  icon?: string;
};

export default function ButtonsCategoriesBar({
  label,
  icon,
}: ButtonsCategoriesBarProps) {
  return icon ? (
    <ButtonCategory>
      <div className="image">
        <img src={icon} alt="Ícone decorativo" />
      </div>
      <span>{label}</span>
    </ButtonCategory>
  ) : (
    <ButtonCategory>
      <span>{label}</span>
    </ButtonCategory>
  );
}
