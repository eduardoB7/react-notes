import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnote</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText texContext={"Todos"} isActive />
        </li>
        <li>
          <ButtonText texContext={"React"} />
        </li>
        <li>
          <ButtonText texContext={"Node"} />
        </li>
      </Menu>
      <Search></Search>
      <Content></Content>
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
