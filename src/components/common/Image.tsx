import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 2px 4px 6px 2px rgb(64 60 67 / 66%);
`;

const Image = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;
