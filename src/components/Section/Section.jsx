import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styled';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <Wrapper>
        <Title>{title}</Title>
        {children}
      </Wrapper>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
