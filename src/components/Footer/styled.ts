import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
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

export const FooterItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f6f8a;
`;

export const FooterItemText = styled.h5`
  font-size: 1rem;
  color: #2f6f8a;
  padding: 1rem 0;
`;