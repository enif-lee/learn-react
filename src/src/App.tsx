import React from 'react';
import {createGlobalStyle} from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`

interface AppProps {
    title: string
}

const App: React.FunctionComponent<AppProps> & { defaultProps: Partial<AppProps> } = props => {
    return (
        <>
            <GlobalStyle/>
            <TodoTemplate>
                <TodoHead/>
                <TodoList/>
                <TodoCreate/>
            </TodoTemplate>
        </>
    )
}

App.defaultProps = {
    title: "This is default props title"
}

export default App
