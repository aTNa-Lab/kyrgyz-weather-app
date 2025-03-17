import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  padding: 2rem 0;
  p {
    padding: 1rem 0;
    font-size: 1rem;
    text-align: center;
    color: #2f6f8a;
    a {
      color: #1a5a73;
    }
  }
`;

export const FooterItem = styled.div`
  padding-bottom: 1.5rem;

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2f6f8a;
  }

  h5 {
    font-size: 1rem;
    color: #2f6f8a;
    padding: 1rem 0;
  }
`;
