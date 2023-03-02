import Button from "../Button";

import {
  Container,
  BannerContainer,
  Title,
  Subtitle,
  FilterBannerContainer,
} from "./styles";

type BannerHomeProps = {
  title: string;
  subtitle: string;
};

export default function BannerHome({ title, subtitle }: BannerHomeProps) {
  return (
    <BannerContainer>
      <FilterBannerContainer />
      <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button label="Ver produto" />
      </Container>
    </BannerContainer>
  );
}
