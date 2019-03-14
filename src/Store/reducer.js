import {
    COMPLETE_TODO,
} from './actions';

const initialState = {
    todoList: [
        { taskName: 'example task', taskContent: 'example content', completed: false, id: 0 },
        { taskName: 'example task', taskContent: 'example content', completed: false, id: 1 },
        { taskName: 'example task', taskContent: 'example content', completed: false, id: 2 }
    ],
    user: {
        isLoggedIn: true,
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE_TODO:
            const completeTodoState = Object.assign({}, state);
            for (let i = 0; i < completeTodoState.todoList.length; i++){
                if (completeTodoState.todoList[i].id === action.payload.id) {
                    completeTodoState.todoList[i].completed = !completeTodoState.todoList[i].completed;
                    console.log(completeTodoState.todoList[i].completed);
                }
            }
            return completeTodoState;
        default:
            return state;
    }
    console.log(state);
}

export default reducer;