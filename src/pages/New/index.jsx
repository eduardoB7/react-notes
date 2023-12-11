import { Container, FormNew } from "./style";

import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Texarea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
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
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title={"Links úteis"}>
            <div className="MarkTags">
              <NoteItem value={"https://rocketseat.com.br"} />
              <NoteItem isNew placeholder="Novo link" />
            </div>
          </Section>
          <Button textContent={"Salvar"} />
        </FormNew>
      </main>
    </Container>
  );
}
