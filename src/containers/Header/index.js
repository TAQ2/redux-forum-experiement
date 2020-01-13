import React from "react";
// import { Spring } from "react-spring/renderprops";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { connect } from "react-redux";

import { screenBreakpoints } from "../../theme";
import { PropTypes } from "prop-types";

const Container = styled(animated.header)`
  @media (max-width: ${screenBreakpoints.tablet}px) {
    justify-content: space-around;
  }

  font-family: Chomsky;
  padding: 0 5%;
  position: sticky;
  width: 100%;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.3em;
`;

function Header({ hasScrolled, screenWidth }) {
  const animation = useSpring({
    fontSize:
      screenWidth <= screenBreakpoints.small
        ? "2em"
        : hasScrolled
        ? "2.5em"
        : "3em",
    background: hasScrolled
      ? "linear-gradient(white 90%, lightblue 10%)"
      : "linear-gradient(lightblue 0%, lightblue 100%)"
  });

  return (
    <Container style={animation}>
      <span>Fake Latin News</span>
      {screenWidth > screenBreakpoints.tablet && (
        <span
          style={{
            fontSize: "0.5em",
            color: "#666"
          }}
        >
          Lorem ipsum dolor sit amet
        </span>
      )}
    </Container>
  );
}

Header.propTypes = {
  hasScrolled: PropTypes.bool.isRequired,
  screenWidth: PropTypes.number.isRequired
};

export default connect(state => ({
  hasScrolled: state.userMetrics.scrollY > 0,
  screenWidth: state.userMetrics.screenWidth
}))(Header);
