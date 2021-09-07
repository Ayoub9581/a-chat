import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { default as NextLink } from 'next/link';
import Image from 'next/image';
import useDarkMode from 'use-dark-mode';
import { useTransition, animated } from 'react-spring';
import darkLogo from '@/images/dark/vector/default.svg';
import lightLogo from '@/images/vector/default.svg';
import ScrollToTop from '../UI/scrollToTop';

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const NextStyledLink = styled(NextLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LogoNavBar = ({ notOnePageSection, setMenuOpened }) => {
  // State to show or hide scroll to top component, gets trigged based on the scroll link component
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Animation
  const ScrollTopTransition = useTransition(showScrollTop, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // Logo transition based on dark or light mode
  const { value: darkMode } = useDarkMode(false);
  // Animation
  const LogoNavBarTransition = useTransition(darkMode, null, {
    config: { duration: 200 },
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // // Query for logos
  // const { darkLogo, lightLogo } = useStaticQuery(graphql`
  //   query {
  //     darkLogo: file(relativePath: { eq: "logo/logo_light.png" }) {
  //       childImageSharp {
  //         fixed(height: 35, quality: 80) {
  //           ...GatsbyImageSharpFixed_tracedSVG
  //         }
  //       }
  //     }
  //     lightLogo: file(relativePath: { eq: "logo/logo_dark.png" }) {
  //       childImageSharp {
  //         fixed(height: 35, quality: 80) {
  //           ...GatsbyImageSharpFixed_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // `);

  // Render dark or light logo
  const renderLogo = () => {
    return LogoNavBarTransition.map(({ item, key, props }) =>
      item ? (
        <animated.div key={key} style={props}>
          <Image
            alt="Logo Light"
            title="Logo Light"
            height={70}
            src={darkLogo}
          />
        </animated.div>
      ) : (
        <animated.div key={key} style={props}>
          <Image
            alt="Logo Dark"
            title="Logo Dark"
            height={70}
            src={lightLogo}
          />
        </animated.div>
      )
    );
  };

  // If is not a section from the index(no one page scroll link), render the gatsby link instead
  return notOnePageSection ? (
    <NextStyledLink to="/#about-me">{renderLogo()}</NextStyledLink>
  ) : (
    <>
      <StyledLink
        to="header"
        smooth={true}
        spy={true}
        // When header section is active, hide scroll to top When inactive, show scroll to top
        onSetActive={() => setShowScrollTop(false)}
        onSetInactive={() => setShowScrollTop(true)}
        onClick={() => setMenuOpened(false)}
      >
        {renderLogo()}
      </StyledLink>
      {ScrollTopTransition.map(
        ({ item, key, props }) =>
          item && <ScrollToTop style={props} key={key} />
      )}
    </>
  );
};

export default LogoNavBar;
