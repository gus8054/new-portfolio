import styled from "styled-components";

const Layout = styled.div`
  margin: auto;
  max-width: ${(props) => props.theme.breakpoint.lg};
  padding: 0 2rem;
`;

export default Layout;
