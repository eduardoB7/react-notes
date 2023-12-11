import { Container, FormNew } from "./style";

import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Texarea";
import { Section } from "../../components/Section";

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
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title={"Links úteis"}>
            <NoteItem value={"https://rocketseat.com.br"} />
            <NoteItem isNew placeholder="Novo link" />
          </Section>
        </FormNew>
      </main>
    </Container>
  );
}
