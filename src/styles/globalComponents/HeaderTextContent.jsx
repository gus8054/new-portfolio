import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-size: 3rem;
`;

const HeaderText = ({ intro, title, detail, className }) => {
  return (
    <div className={className}>
      {intro && <p>{intro}</p>}
      {title && <H1>{title}</H1>}
      {detail && <p>{detail}</p>}
    </div>
  );
};

const HeaderTextContent = styled(HeaderText)`
  color: ${(props) => props.theme.color.gray};
  font-family: ${(props) => props.theme.font.default};
  line-height: 2;
  font-size: 1.2rem;
`;

export default HeaderTextContent;
