import { Container, FormProfile, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <FormProfile>
        <Avatar>
          <img
            src="https://www.github.com/eduardoB7.png"
            alt="Foto do usuario"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} required />
        <Input placeholder="E-mail" type="email" icon={FiMail} required />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          required
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          required
        />
        <Button textContent={"Salvat"} />
      </FormProfile>
    </Container>
  );
}
