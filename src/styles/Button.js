// import styled from "styled-components";

// export const Button = styled.button`
//   text-decoration: none;
//   max-width: auto;
//   background-color: #4B3049;
//   color: rgb(255 255 255);
//   padding: 0.6rem 1.7rem;
//   border: none;
//   text-transform: uppercase;
//   text-align: center;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   -webkit-transition: all 0.3s ease 0s;
//   -moz-transition: all 0.3s ease 0s;
//   -o-transition: all 0.3s ease 0s;

//   &:hover,
//   &:active {
//     transform: scale(0.96);
//   }

//   a {
//     text-decoration: none;
//     color: rgb(255 255 255);
//     font-size: 1.8rem;
//   }
// `;

import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ variant }) =>
    variant === "primary" ? "#2874f0" : "#fb641b"};

  color: #fff;
  padding: 10px 18px;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', Arial, sans-serif;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" ? "#1f5bb5" : "#e55b17"};
  }

  &:disabled {
    background-color: #c2c2c2;
    cursor: not-allowed;
  }
`;