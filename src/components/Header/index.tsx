import ButtonsCategoriesBar from "../ButtonsCategoriesBar";

import {
  AlertsBar,
  UserActions,
  CategoriesBar,
  ButtonUserActions,
  Container,
} from "./style";

import ShieldCheck from "../../assets/images/icons/ShieldCheck.svg";
import Truck from "../../assets/images/icons/Truck.svg";
import CreditCard from "../../assets/images/icons/CreditCard.svg";
import VtexLogo from "../../assets/images/LogoVtex.svg";
import Return from "../../assets/images/icons/Return.svg";
import Heart from "../../assets/images/icons/Heart.svg";
import UserCircle from "../../assets/images/icons/UserCircle.svg";
import ShoppingCart from "../../assets/images/icons/ShoppingCart.svg";
import CrownSimple from "../../assets/images/icons/CrownSimple.svg";

export default function Header() {
  return (
    <header>
      <Container>
        <AlertsBar>
          <ul>
            <li>
              <div className="icon">
                <img src={ShieldCheck} alt="Ícone de segurança" />
              </div>
              <div className="text">
                Compra <span className="highlight">100% segura</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <img src={Truck} alt="Ícone de caminhão de entrega" />
              </div>
              <div className="text">
                <span className="highlight">Frete grátis</span> acima de R$ 200
              </div>
            </li>
            <li>
              <div className="icon">
                <img src={CreditCard} alt="Ícone de cartão de crédito" />
              </div>
              <div className="text">
                <span className="highlight">Parcele</span> suas compras
              </div>
            </li>
          </ul>
        </AlertsBar>

        <UserActions>
          <div className="logo">
            <img src={VtexLogo} alt="Logo Vtex" />
          </div>
          <div className="searchBar">
            <input type="text" placeholder="O que você está buscando?" />
          </div>
          <div className="userArea">
            <ButtonUserActions aria-label="Notificações">
              <img src={Return} alt="Notificações" />
            </ButtonUserActions>
            <ButtonUserActions aria-label="Favoritos">
              <img src={Heart} alt="Favoritos" />
            </ButtonUserActions>
            <ButtonUserActions aria-label="Conta">
              <img src={UserCircle} alt="Conta" />
            </ButtonUserActions>
            <ButtonUserActions aria-label="Carrinho">
              <img src={ShoppingCart} alt="Carrinho" />
            </ButtonUserActions>
          </div>
        </UserActions>

        <CategoriesBar>
          <ButtonsCategoriesBar label="Todas Categorias" />
          <ButtonsCategoriesBar label="Supermercado" />
          <ButtonsCategoriesBar label="Livros" />
          <ButtonsCategoriesBar label="Modas" />
          <ButtonsCategoriesBar label="Lançamentos" />
          <ButtonsCategoriesBar label="Ofertas do dia" active />
          <ButtonsCategoriesBar icon={CrownSimple} label="Assinatura" />
        </CategoriesBar>
      </Container>
    </header>
  );
}
