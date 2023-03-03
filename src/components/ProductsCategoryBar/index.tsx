import { ProductsCategoryContainer, CategoryButton } from "./styles";

export default function ProductsCategoryBar() {
  return (
    <ProductsCategoryContainer>
      <CategoryButton>
        <span className="highlight">Celular</span>
      </CategoryButton>
      <CategoryButton>
        <span>Acessórios</span>
      </CategoryButton>
      <CategoryButton>
        <span>Tablets</span>
      </CategoryButton>
      <CategoryButton>
        <span>Notebooks</span>
      </CategoryButton>
      <CategoryButton>
        <span>Tvs</span>
      </CategoryButton>
      <CategoryButton>
        <span>Ver todos</span>
      </CategoryButton>
    </ProductsCategoryContainer>
  );
}
