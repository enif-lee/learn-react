import styled, {css} from "styled-components";
import React, {useState} from "react";
import {MdAdd} from "react-icons/all";


interface CircleButtonProps {
    open: boolean
}

const CircleButton = styled.button<CircleButtonProps>`
  background: #38d9a9;

  &:hover {
    background: #63e6be;
  }

  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: .125s all ease-in;
  ${props => props.open &&
          css`
            background: #ff6b6b;

            &:hover {
              background: #ff8787;
            }

            &:active {
              background: #fa5252;
            }

            transform: translate(-50%, 50%) rotate(45deg);
          `
  }
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate: React.FunctionComponent = () => {
    const [open, setOpen] = useState(false)
    const onToggle = () => setOpen(!open);

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm>
                        <Input  autoFocus placeholder={"할일을 입력 후, Enter를 누르세요."}/>
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton open={open} onClick={onToggle}>
                <MdAdd />
            </CircleButton>
        </>
    )
}

export default TodoCreate;
