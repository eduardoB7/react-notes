import { Container, Links } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Datails() {
  return (
    <Container>
      <Header />
      <ButtonText texContext={"Excluir a nota"} />
      <Section title={"Links úteis"}>
        <Links>
          <li>
            <a target="_blank" href="https://app.rocketseat.com.br/">
              https//:www.rocketseat.com.br
            </a>
          </li>
          <li>
            <a target="_blank" href="https://app.rocketseat.com.br/">
              https//:www.rocketseat.com.br
            </a>
          </li>
        </Links>
      </Section>
      <Section title={"Marcadores"}>
        <Tag texContent={"Express"} />
        <Tag texContent={"Nodejs"} />
      </Section>
      <Button textContent={"Voltar"} />
    </Container>
  );
}
