// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';

// const Footer = () => {
//     const useStyles = makeStyles((theme) => ({
//         footer: {
//             background: "#4949BC",
//             height: 250,
//             display: "flex",
//             flexDirection: "row",
//             padding: 30,
//         },
//         c1: {
//             width: "30%",
//             textAlign: "center",
//             fontSize: "50px",
//             padding: 20,
//             fontWeight: "bold",
//         },
//         c2: {
//             width: "23%",
//             textAlign: "center",
//             fontSize: "30px",
//             display: "flex",
//             flexDirection: "column",
//         },
//         c3: {
//             width: "23%",
//             textAlign: "center",
//             fontSize: "30px",
//         },
//         c4: {
//             width: "23%",
//             textAlign: "center",
//             fontSize: "30px",
//         },
//         small: {
//             fontSize: "18px",
//         },
//         info: {
//             display: "flex",
//             flexDirection: "column",
//             paddingTop: 20,
//         },
//         title: {
//             fontWeight: "bold",
//         }
//     }));
//     const classes = useStyles();

//   return (
//     <div className={classes.footer}>
//         <div className={classes.c1}>
//             RailsCrypto
//         </div>

//         <div className={classes.c2}>
//             <div className={classes.title}>Language</div>
//             <div className={classes.info}>
//                 <div className={classes.small} href='https://rubyonrails.org/' target="_blank">Ruby On Rails</div>
//                 <div className={classes.small} href="https://reactjs.org/" target="_blank">React JS</div>
//             </div>
//         </div>

//         <div className={classes.c3}>
//             <div className={classes.title}>About Us</div>
//             <div className={classes.info}>
//                 <div className={classes.small}> Team </div>
//                 <div className={classes.small}> Report</div>
//             </div>
//         </div>

//         <div className={classes.c4}>
//             <div className={classes.title}>Contact Us</div>
//             <div className={classes.info}>
//                 <div className={classes.small} href="https://github.com/NguyenTungSon0503/RailsCrypto" target="_blank">Github</div>
//                 <div className={classes.small} href="https://www.facebook.com/tungson.nguyen.9699" target="_blank">Facebook</div>
//                 <div className={classes.small}></div>
                
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Footer

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  color: #333;
  padding: 2rem 1rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const NavLink = styled.a`
  color: #333;
  margin: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const SocialLink = styled.a`
  color: #333;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Nav>
        <NavLink onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </Nav>
      <SocialMedia>
        <SocialLink href="#">
          <i className="fab fa-facebook"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-twitter"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-instagram"></i>
        </SocialLink>
      </SocialMedia>
      <FooterText>&copy; 2023 My Company. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;