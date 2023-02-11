import styled from 'styled-components'
import {
  CheckBoxOutlineBlank,
  Delete,
  CheckBox
} from '@mui/icons-material'
import { type ItemTypes } from './index'

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: rgba(255,255,255,0.1);
`

const Description = styled.div`
`

const Checkbox = styled(CheckBoxOutlineBlank)`
  margin-right: 6px;
  cursor: pointer;
`

const DeleteButton = styled(Delete)`
  cursor: pointer;
`

function ListItem ({ value }: ItemTypes): JSX.Element {
  return (
    <Item>
      <Description>Learn React.js</Description>
      <div>
        <Checkbox/>
        <DeleteButton/>
      </div>
    </Item>
  )
}

export default ListItem
