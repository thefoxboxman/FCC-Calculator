import React from 'react'
import styled from "styled-components"

export default function CalculatorFace() {
	return (
    <CalculatorWrapper>
      <div class="calculator">
        <input type="text" class="calculator-screen" id="display" value="0" disabled />

        <div class="calculator-keys">
          <button type="button" class="operator" id="add" value="+">
            +
          </button>
          <button type="button" class="operator" id="subtract" value="-">
            -
          </button>
          <button type="button" class="operator" id="multiply" value="*">
            &times;
          </button>
          <button type="button" class="operator" id="divide" value="/">
            &divide;
          </button>

          <button type="button" id="seven" value="7">
            7
          </button>
          <button type="button" id="eight" value="8">
            8
          </button>
          <button type="button" id="nine" value="9">
            9
          </button>

					<button type="button" id="four" value="4">
            4
          </button>
					<button type="button" id="five" value="5">
            5
          </button>
					<button type="button" id="six" value="6">
            6
          </button>

					<button type="button" id="one" value="1">
            1
          </button>
          <button type="button" id="two"value="2">
            2
          </button>
					<button type="button" id="three" value="3">
            3
          </button>

					<button type="button" id="zero" value="0">
            0
          </button>
          <button type="button" class="decimal" id="decimal" value=".">
            .
          </button>
          <button type="button" class="all-clear" id="clear" value="all-clear">
            AC
          </button>

          <button type="button" class="equal-sign" id="equals" value="=">
            =
          </button>
        </div>
      </div>
    </CalculatorWrapper>
  )
}

const CalculatorWrapper = styled.div`
  .calculator {
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
  }

  .calculator-screen {
    width: 100%;
    font-size: 3rem;
    height: 80px;
    border: none;
    background-color: #252525;
    color: #fff;
    text-align: right;
    padding-right: 20px;
    padding-left: 10px;
  }

  button {
    height: 60px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    background-color: transparent;
    font-size: 2rem;
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

  button:hover {
    background-color: #eaeaea;
  }

  .operator {
    color: #337cac;
  }

  .all-clear {
    background-color: #f0595f;
    border-color: #b0353a;
    color: #fff;
  }

  .all-clear:hover {
    background-color: #f17377;
  }

  .equal-sign {
    background-color: #2e86c0;
    border-color: #337cac;
    color: #fff;
    height: 100%;
    grid-row-start: 2;
    grid-row-end: 6;
    grid-column-start: 4;
    grid-column-end: 5;
  }

  .equal-sign:hover {
    background-color: #4e9ed4;
  }

  .calculator-keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 20px;
  }
`
