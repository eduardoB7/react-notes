import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText texContext={"Excluir a nota"} />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            illum et fugiat? Maxime doloremque unde illum sunt doloribus
            molestias, neque tenetur deleniti commodi nulla dolore earum quae
            debitis nihil quaerat! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolorum illum et fugiat? Maxime doloremque unde
            illum sunt doloribus molestias, neque tenetur deleniti commodi nulla
            dolore earum quae debitis nihil quaerat!
          </p>
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
        </Content>
      </main>
    </Container>
  );
}
