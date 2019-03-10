import React from "react"
import styled from "styled-components"

export const Input = props => (
  <InputWrapper>
    <div className="input" type="text" id="display" value="0">
      {props.input}
    </div>
  </InputWrapper>
)

const InputWrapper = styled.div`
  .input {
		display: flex;
    width: 100%;
    font-size: 3rem;
    height: 80px;
    border: none;
    background-color: #000000;
		color: #fff;
		align-items: center;
		justify-content: end;
		padding-right: 20px;
    padding-left: 10px;
  }
`
