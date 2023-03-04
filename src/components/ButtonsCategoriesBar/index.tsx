import { ButtonCategory } from "./style";

type ButtonsCategoriesBarProps = {
  label: string;
  icon?: string;
  active?: boolean;
};

export default function ButtonsCategoriesBar({
  label,
  icon,
  active,
}: ButtonsCategoriesBarProps) {
  return icon || (icon && active) ? (
    <ButtonCategory>
      <div className="image">
        <img src={icon} alt="Ícone decorativo" />
      </div>
      <span>{label}</span>
    </ButtonCategory>
  ) : active ? (
    <ButtonCategory active>
      <span>{label}</span>
    </ButtonCategory>
  ) : (
    <ButtonCategory>
      <span>{label}</span>
    </ButtonCategory>
  );
}
