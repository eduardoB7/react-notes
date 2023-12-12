import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

import { FiPlus, FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

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
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>
      <Content>
        <Section title={"Minhas notas"}>
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "next" },
              ],
            }}
          />
        </Section>
      </Content>
      <NewNote to={"/new"}>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
