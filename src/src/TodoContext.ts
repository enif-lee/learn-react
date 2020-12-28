import React, {useReducer} from "react";


export interface Todo {
    id: number
    text: string
    done: boolean
}

const initialTodos: Todo[] = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false
    }
]

type TodoAction = { type: 'CREATE', todo: Todo }
    | { type: 'TOGGLE', id: number }
    | { type: 'REMOVE', id: number }


const todoReducer: React.Reducer<Todo[], TodoAction> = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return state.concat(action.todo)
        case "TOGGLE":
            const todo = state.filter(todo => todo.id === action.id)[0];
            if (!!todo)
                todo.done = !todo.done
            return state
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
    }
}

const TodoProvider: React.Provider<any> = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialTodos)
    return children;
}

export default TodoProvider

