import React from 'react';
import { Wrapper, Title } from './Section.styled'

const Section = ({ title, children }) => {
  return (
 <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default Section;
