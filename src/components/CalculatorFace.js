import React, { Component } from "react"
import styled from "styled-components"
import * as math from "mathjs"


const endsWithOperator = /[*/+-]$/

class CalculatorFace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "0",
    }
  }

  /*Handle Operators */
  handleClear = () => this.setState({ input: "0" })

  handleClickAdd = () => {
		let isLastAnOperator = /[*/+-]$/.test(this.state.input)
if (isLastAnOperator){
	let stepBackOne = this.state.input.slice(0, -1)
	this.setState({ input: this.state.input = stepBackOne })
	this.setState({ input: this.state.input + "+" })
} else {
		this.setState({ input: this.state.input + "+" })
}
  }

	handleClickSubtract = () => {
		let isLastAnOperator = /[*/+-]$/.test(this.state.input)
		if (isLastAnOperator) {
			let stepBackOne = this.state.input.slice(0, -1)
			this.setState({ input: this.state.input = stepBackOne })
			this.setState({ input: this.state.input + "-" })
		} else {
			this.setState({ input: this.state.input + "-" })
		}}

	handleClickMultiply = () => {
		let isLastAnOperator = /[*/+-]$/.test(this.state.input)
		if (isLastAnOperator) {
			let stepBackOne = this.state.input.slice(0, -1)
			this.setState({ input: this.state.input = stepBackOne })
			this.setState({ input: this.state.input + "*" })
		} else {
			this.setState({ input: this.state.input + "*" })
		}}

	handleClickDivide = () => {
		let isLastAnOperator = /[*/+-]$/.test(this.state.input)
		if (isLastAnOperator) {
			let stepBackOne = this.state.input.slice(0, -1)
			this.setState({ input: this.state.input = stepBackOne })
			this.setState({ input: this.state.input + "/" })
		} else {
			this.setState({ input: this.state.input + "/" })
		}}

  handleClickDecimal = () => {
		/* find last element of string for comparison*/
		let lastElement = this.state.input[this.state.input.length - 1]
	/* does string include an operator */
		let hasOperator = /[*/+-]/.test(this.state.input)

		if (this.state.input.includes(".") && hasOperator){
			this.setState({ input: this.state.input + "." })
		}	else if (lastElement === ".") {
			this.setState({ input: this.state.input  }) 
		} else if (this.state.input.includes(".")){
			this.setState({ input: this.state.input }) 
		}else{
	this.setState({ input: this.state.input + "." })
	}
}

  handleClickEqual = () => {
    var answer = math.eval(this.state.input)
    var roundedAnswer = math.round(answer, 4)
		this.setState({ input: this.state.input = roundedAnswer })
		
  }

  /*Handle Digits */

  handleClickZero = () => {
    if (this.state.input[0] === "0" && this.state.input[1] != ".") {
      this.setState({ input: (this.state.input = "0") })
    } else this.setState({ input: this.state.input + "0" })
  }

  handleClickOne = () => {
    if (this.state.input[0] === "0" && this.state.input[1] != ".") {
      this.setState({ input: (this.state.input = "1") })
    } else this.setState({ input: this.state.input + "1" })
  }

  handleClickTwo = () => {
    if (this.state.input[0] === "0" && this.state.input[1] != ".") {
      this.setState({ input: (this.state.input = "2") })
    } else this.setState({ input: this.state.input + "2" })
  }

  handleClickThree = () => {
    if (this.state.input[0] === "0" && this.state.input[1] != ".") {
      this.setState({ input: (this.state.input = "3") })
    } else this.setState({ input: this.state.input + "3" })
  }

  handleClickFour = () => {
    if (this.state.input[0] === "0" && this.state.input[1] != ".") {
      this.setState({ input: (this.state.input = "4") })
    } else this.setState({ input: this.state.input + "4" })
  }

  handleClickFive = () => {
    if (this.state.input[0] === "0" && this.state.input[1] != ".") {
      this.setState({ input: (this.state.input = "5") })
    } else this.setState({ input: this.state.input + "5" })
  }

  handleClickSix = () => {
    if (this.state.input[0] === "0" && this.state.input[1] != ".") {
      this.setState({ input: (this.state.input = "6") })
    } else this.setState({ input: this.state.input + "6" })
  }

  handleClickSeven = () => {
    if (this.state.input[0] === "0" && this.state.input[1] != ".") {
      this.setState({ input: (this.state.input = "7") })
    } else this.setState({ input: this.state.input + "7" })
  }
  handleClickEight = () => {
    if (this.state.input[0] === "0" && this.state.input[1] != ".") {
      this.setState({ input: (this.state.input = "8") })
    } else this.setState({ input: this.state.input + "8" })
  }

  handleClickNine = () => {
    if (this.state.input[0] === "0" && this.state.input[1] != ".") {
      this.setState({ input: (this.state.input = "9") })
    } else this.setState({ input: this.state.input + "9" })
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val })
  }

  render() {
    return (
      <CalculatorWrapper>
        <div class="calculator">
          <input
            type="text"
            class="calculator-screen"
            id="display"
            value={this.state.input}
          />

          <div class="calculator-keys">
            <button
              type="button"
              class="operator"
              id="add"
              value="+"
              onClick={this.handleClickAdd}
            >
              +
            </button>
            <button
              type="button"
              class="operator"
              id="subtract"
              value="-"
              onClick={this.handleClickSubtract}
            >
              -
            </button>
            <button
              type="button"
              class="operator"
              id="multiply"
              value="*"
              onClick={this.handleClickMultiply}
            >
              &times;
            </button>
            <button
              type="button"
              class="operator"
              id="divide"
              value="/"
              onClick={this.handleClickDivide}
            >
              &divide;
            </button>

            <button
              type="button"
              id="seven"
              value="7"
              onClick={this.handleClickSeven}
            >
              7
            </button>
            <button
              type="button"
              id="eight"
              value="8"
              onClick={this.handleClickEight}
            >
              8
            </button>
            <button
              type="button"
              id="nine"
              value="9"
              onClick={this.handleClickNine}
            >
              9
            </button>

            <button
              type="button"
              id="four"
              value="4"
              onClick={this.handleClickFour}
            >
              4
            </button>
            <button
              type="button"
              id="five"
              value="5"
              onClick={this.handleClickFive}
            >
              5
            </button>
            <button
              type="button"
              id="six"
              value="6"
              onClick={this.handleClickSix}
            >
              6
            </button>

            <button
              type="button"
              id="one"
              value="1"
              onClick={this.handleClickOne}
            >
              1
            </button>
            <button
              type="button"
              id="two"
              value="2"
              onClick={this.handleClickTwo}
            >
              2
            </button>
            <button
              type="button"
              id="three"
              value="3"
              onClick={this.handleClickThree}
            >
              3
            </button>

            <button
              type="button"
              id="zero"
              value="0"
              onClick={this.handleClickZero}
            >
              0
            </button>
            <button
              type="button"
              class="decimal"
              id="decimal"
              value="."
              onClick={this.handleClickDecimal}
            >
              .
            </button>
            <button
              type="button"
              class="all-clear"
              id="clear"
              value="all-clear"
              onClick={this.handleClear}
            >
              AC
            </button>

            <button
              type="button"
              class="equal-sign"
              id="equals"
              value="="
              onClick={this.handleClickEqual}
            >
              =
            </button>
          </div>
        </div>
      </CalculatorWrapper>
    )
  }
}
export default CalculatorFace

const CalculatorWrapper = styled.div`
  .calculator {
    border: 3px solid #ccc;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
  }

  #display {
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
    background-color: #f0595f;
    border-color: #b0353a;
    color: #fff;
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
