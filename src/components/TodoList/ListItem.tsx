import styled from 'styled-components'
import {
  CheckBoxOutlineBlank,
  Delete,
  CheckBox
} from '@mui/icons-material'
import { type ListItemTypes } from './index'

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: rgba(255,255,255,0.1);
`

const Description = styled.div`
`

const CheckboxWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;
  cursor: pointer;
`

const DeleteButton = styled(Delete)`
  cursor: pointer;
`

function ListItem ({ description, isChecked }: ListItemTypes): JSX.Element {
  return (
    <Item>
      <Description>{description}</Description>
      <div>
        <CheckboxWrap>
          { isChecked ? <CheckBox/> : <CheckBoxOutlineBlank/>}
        </CheckboxWrap>
        <DeleteButton/>
      </div>
    </Item>
  )
}

export default ListItem
