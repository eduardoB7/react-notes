import { Container, Links } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function Datails() {
  return (
    <Container>
      <Header />
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
      <Button textContent={"Voltar"} />
    </Container>
  );
}
