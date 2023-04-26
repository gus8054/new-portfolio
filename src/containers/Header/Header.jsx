import { Container, Div1, H1, H2, LeftBar, Section, UpDown } from "./HeaderStyle";
import { IntroMyself, Layout } from "@/components";

const Header = () => {
  return (
    <Section id="home">
      <Layout>
        <Container>
          <LeftBar />
          <Div1>
            <H1>Hi, I&apos;m</H1>
            <H2>
              <IntroMyself />
            </H2>
          </Div1>
        </Container>
      </Layout>
      <UpDown />
    </Section>
  );
};

export default Header;
