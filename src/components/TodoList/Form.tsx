import { useState } from 'react'
import styled from 'styled-components'
import { type ListItemTypes } from './index'

const FormWrap = styled.div`
  margin-bottom: 30px;
`

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 15px;
`

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`

const Input = styled.input`
  flex-grow: 1;
  margin-right: 15px;
  padding: 15px 20px;
  outline: none;
  border: none;
  color: #FF6666;
`

const AddButton = styled.div`
  border: 1px solid #fff;
  padding: 15px;
  font-size: 12px;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background: #e95656;
  }
`

interface FormProps {
  onSubmit: (value: ListItemTypes) => void
}

function Form ({ onSubmit }: FormProps): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('')

  function addItem (): void {
    onSubmit({
      description: inputValue,
      isChecked: false
    })

    setInputValue('')
  }

  return (
    <FormWrap>
      <Title>Add to the todo list</Title>
      <InputWrap>
        <Input value={inputValue} onChange={e => { setInputValue(e.target.value.trim()) }}/>
        <AddButton onClick={addItem}>ADD ITEM</AddButton>
      </InputWrap>
    </FormWrap>
  )
}

export default Form
