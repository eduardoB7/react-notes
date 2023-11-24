import { Container, Profile } from "./style";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/eduardoB7.png" alt="foto do usuario" />
        <div>
          <span>Bem vindo</span>
          <strong>Eduardo Barroso</strong>
        </div>
      </Profile>
    </Container>
  );
}
