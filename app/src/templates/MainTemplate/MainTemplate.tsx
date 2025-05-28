import { Container } from '../../components/container/Container';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Footer } from '../../components/footer/Footer';

type MainTemplateProps = {
  children: React.ReactNode;
}

export function MainTemplate(props: MainTemplateProps) {

  return (
    <>
      
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {props.children}

      <Container>
        <Footer />
      </Container>

    </>
  )
};
