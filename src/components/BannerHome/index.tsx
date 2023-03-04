import {
  Container,
  BannerContainer,
  Title,
  Subtitle,
  FilterBannerContainer,
  SmallButton,
} from "./styles";

type BannerHomeProps = {
  title: string;
  subtitle: string;
};

export default function BannerHome({ title, subtitle }: BannerHomeProps) {
  return (
    <section>
      <BannerContainer>
        <FilterBannerContainer />
        <Container>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <SmallButton label="Ver produto" />
        </Container>
      </BannerContainer>
    </section>
  );
}
