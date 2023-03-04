import {
  FooterBackground,
  Container,
  AreaLinks,
  AreaNewsletter,
  GridContet,
  AreaCopy,
} from "./styles";

import VisaIcon from "../../assets/images/icons/VisaIcon.svg";
import EloIcon from "../../assets/images/icons/EloIcon.svg";
import AleloIcon from "../../assets/images/icons/AleloIcon.svg";
import DinnersIcon from "../../assets/images/icons/DinnersIcon.svg";
import IfoodIcon from "../../assets/images/icons/IfoodIcon.svg";
import MastercardIcon from "../../assets/images/icons/MastercardIcon.svg";
import PixIcon from "../../assets/images/icons/PixIcon.svg";
import AmexIcon from "../../assets/images/icons/AmexIcon.svg";
import TicketIcon from "../../assets/images/icons/TicketIcon.svg";
import SodexoIcon from "../../assets/images/icons/SodexoIcon.svg";
import FacebookIcon from "../../assets/images/icons/Facebook.svg";
import InstagramIcon from "../../assets/images/icons/Instagram.svg";
import YoutubeIcon from "../../assets/images/icons/Youtube.svg";
import EconverseLogo from "../../assets/images/icons/Econverse.svg";
import VtexLogo from "../../assets/images/icons/VtexNegative.svg";

export default function Footer() {
  return (
    <FooterBackground>
      <GridContet>
        <AreaLinks>
          <div className="about">
            <div className="links">
              <nav>
                <h3>Sobre nós</h3>
                <ul>
                  <li>
                    <a href="/">Conheça</a>
                  </li>
                  <li>
                    <a href="/">Onde comprar</a>
                  </li>
                  <li>
                    <a href="/">Indicação e desconto</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="social">
              <ul>
                <li>
                  <a href="/">
                    <img src={FacebookIcon} alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={InstagramIcon} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={YoutubeIcon} alt="Youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="info">
            <h3>Informações úteis</h3>
            <nav>
              <ul>
                <li>
                  <a href="/">Fale conosco</a>
                </li>
                <li>
                  <a href="/">Dúvidas</a>
                </li>
                <li>
                  <a href="/">Prazos de entrega</a>
                </li>
                <li>
                  <a href="/">Formas de pagamento</a>
                </li>
                <li>
                  <a href="/">Política de privacidade</a>
                </li>
                <li>
                  <a href="/">Trocas e devoluções</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="payment">
            <h3>Formas de pagamento</h3>
            <ul>
              <li>
                <img src={VisaIcon} alt="Cartão Visa" />
              </li>
              <li>
                <img src={EloIcon} alt="Cartão Elo" />
              </li>
              <li>
                <img src={AleloIcon} alt="Cartão Alelo" />
              </li>
              <li>
                <img src={DinnersIcon} alt="Cartão Dinners" />
              </li>
              <li>
                <img src={IfoodIcon} alt="Cartão Ifood" />
              </li>
              <li>
                <img src={MastercardIcon} alt="Cartão Mastercard" />
              </li>
              <li>
                <img src={PixIcon} alt="Cartão Pix" />
              </li>
              <li>
                <img src={AmexIcon} alt="Cartão Amex" />
              </li>
              <li>
                <img src={TicketIcon} alt="Cartão Ticket" />
              </li>
              <li>
                <img src={SodexoIcon} alt="Cartão Sodexo" />
              </li>
            </ul>
          </div>
        </AreaLinks>
        <AreaNewsletter>
          <div className="content">
            <h4>
              <span>Cadastre-se e Receba nossas</span>
              novidades e promoções
            </h4>
            <p>
              Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
              lorem ipsum
            </p>
            <div className="inputArea">
              <input type="text" placeholder="Seu e-mail" />
              <button type="submit">Ok</button>
            </div>
          </div>
        </AreaNewsletter>
      </GridContet>
      <AreaCopy>
        <div className="content-container">
          <div className="copy">
            <small>
              Copyright © 2019. Todos os direitos reservados. Todas as marcas e
              suas imagens são de propriedade de seus respectivos donos. É
              vedada a reprodução, total ou parcial, de qualquer conteúdo sem
              expressa autorização.
            </small>
          </div>
          <div className="brands">
            <a href="/">
              <img src={EconverseLogo} alt="Logo Econverse" />
            </a>
            <a href="/">
              <img src={VtexLogo} alt="Logo Vtex" />
            </a>
          </div>
        </div>
      </AreaCopy>
    </FooterBackground>
  );
}
