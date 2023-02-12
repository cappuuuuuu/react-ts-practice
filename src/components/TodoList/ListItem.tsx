import styled, { css, keyframes } from 'styled-components'
import {
  CheckBoxOutlineBlank,
  Delete,
  CheckBox
} from '@mui/icons-material'
import { type ListItemTypes } from './index'

const strikeitem = keyframes`
  to { width: calc(100% + 1rem); }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: rgba(255,255,255,0.1);
`

const Description = styled.div<{ isChecked: boolean }>`
  position: relative;
  max-width: 80%;
  word-break: break-word;

  ${props => props.isChecked && css`
    opacity: 0.6;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -0.5rem;
      display: block;
      width: 0%;
      height: 1px;
      background: #FFF;
      animation: ${strikeitem} .3s ease-out 0s forwards;
    }
  `}
`

const CheckboxWrap = styled.span`
  margin-right: 4px;
  cursor: pointer;
`

const DeleteButton = styled(Delete)`
  cursor: pointer;
`

interface ListItemProps extends ListItemTypes {
  index: number
  handleCheck: (index: number) => void
  handleRemove: (index: number) => void
}

function ListItem ({ description, isChecked, index, handleCheck, handleRemove }: ListItemProps): JSX.Element {
  return (
    <Item>
      <Description isChecked={isChecked}>{description}</Description>
      <div>
        <CheckboxWrap onClick={() => { handleCheck(index) }}>
          { isChecked ? <CheckBox/> : <CheckBoxOutlineBlank/>}
        </CheckboxWrap>
        <DeleteButton onClick={() => { handleRemove(index) }}/>
      </div>
    </Item>
  )
}

export default ListItem
