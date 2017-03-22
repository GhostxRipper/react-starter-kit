import styled from 'styled-components'

export const Input = styled.input`
  display: block;
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em auto;
  background: white;
  border: solid 1px lightgrey;
  border-radius: 3px;
  appearance: none;
  outline: none;

  &:hover, &:focus {
    border-color: rgb(0, 128, 255);
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }

  &::-webkit-input-placeholder {
    color: lightgray;
  }
`

export const Button = styled.button`
  display: block;
  background: none;
  color: rgb(0, 128, 255);
  font-size: 1em;
  margin: 1em auto;
  padding: 0.25em 1em;
  border-radius: 3px;
  appearance: none;
  outline: none;
  cursor: pointer;
  border: none;

  &:active {
    color: lightgray;
  }
`
export const Body = styled.div`
  margin: 0;
  padding: 0;
`
