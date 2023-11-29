import { Container, FormNew } from "./style";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <FormNew>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>
          <Input placeholder="Titúlo" />
        </FormNew>
      </main>
    </Container>
  );
}
