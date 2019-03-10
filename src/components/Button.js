import React from 'react'
import styled from "styled-components"

const isOperator = val => {
	return !isNaN(val) || val === "." || val ==="=";
};

export const Button = props => (
	<ButtonWrapper>
		<div 
		className={`button ${isOperator(props.children) ? null : "operator"}`}
		onClick={() => props.handleClick(props.children)}
		>
		{props.children}	
		</div>
	</ButtonWrapper>
	)

	const ButtonWrapper = styled.div`
    .button {
      height: 60px;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #c4c4c4;
      background-color: transparent;
			font-size: 2rem;
			text-align: center;
      color: #333;
      background-image: linear-gradient(
        to bottom,
        transparent,
        transparent 50%,
        rgba(0, 0, 0, 0.04)
      );
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05),
        inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
        inset 0 -1px 0 0 rgba(255, 255, 255, 0.15),
        0 1px 0 0 rgba(255, 255, 255, 0.15);
      text-shadow: 0 1px rgba(255, 255, 255, 0.4);
    }

    .button:hover {
      background-color: #eaeaea;
    }
  `