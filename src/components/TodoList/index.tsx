import styled from 'styled-components'
import ListItem from './ListItem'
import Form from './Form'
import { useState } from 'react'

const Container = styled.div`
  font-family: 'Quicksand', sans-serif;
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 450px;
  background: #FF6666;
  color: #FFF;
  box-shadow: -20px -20px 0px 0px rgb(100 100 100 / 10%);
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export interface ListItemTypes {
  description: string
  isChecked: boolean
}

function TodoList (): JSX.Element {
  const [list, setList] = useState<ListItemTypes[]>([])

  function submitItem (value: ListItemTypes): void {
    setList([
      ...list,
      value
    ])
  }

  function checkItem (itemIndex: number): void {
    setList(list.map((item, index) => {
      return (itemIndex === index)
        ? {
            ...item,
            isChecked: !item.isChecked
          }
        : item
    }))
  }

  function removeItem (itemIndex: number): void {
    setList(list.filter((_, index) => itemIndex !== index))
  }

  return (
    <Container>
      <Form onSubmit={submitItem}/>
      <ListContainer>
        {
          list.map((v, index) => (
            <ListItem
              description={v.description}
              isChecked={v.isChecked}
              index={index}
              key={index}
              handleCheck={checkItem}
              handleRemove={removeItem}
            />
          ))
        }
      </ListContainer>
    </Container>
  )
}

export default TodoList
