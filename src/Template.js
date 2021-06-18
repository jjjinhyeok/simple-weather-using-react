import React from 'react';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -180px 0 0 -180px;
  background: ${props => props.theme.palette.box};
  box-shadow: 2px 2px 8px 0 gray;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

function Template({ children }) {
  return ( 
    <TemplateBlock>
      {children}
    </TemplateBlock>
  );
}

export default Template;