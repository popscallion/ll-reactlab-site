import React from 'react';
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Logo } from './Logo.svg'

const rotateFront = keyframes`
  0% {
    transform: rotateY(0deg);
  } 50%{
    opacity:0%
  }
  100% {
    transform: rotateY(360deg);
  }
`

const rotateBack = keyframes`
  from {
    transform: rotate3D(0.33,-1,0.33,15deg);
  } to {
    transform: rotate3D(0.33,-1,0.33,375deg);
  }
`

const StyledLogo = styled(Logo)`
  .front{
    fill:black;
    animation: ${rotateFront} infinite 3s ease;
    transform-origin: 50% 50%;
  }
  .back{
    fill:{fill}
    animation: ${rotateBack} infinite 3s ease;
    transform-origin: 50% 50%;
  }
`

export default StyledLogo;
