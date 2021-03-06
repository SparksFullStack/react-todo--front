import {
    COMPLETE_TODO, 
    DELETE_TODO,
    UPDATE_TODO,
    ADD_TODO,
} from './actions';

// * TODO
// Verify JWT and set the state accordingly
const initialState = {
    todoList: [
        { taskName: 'example task', taskContent: 'example content', completed: false, id: 0 },
        { taskName: 'example task', taskContent: 'example content', completed: false, id: 1 },
        { taskName: 'example task', taskContent: 'example content', completed: false, id: 2 }
    ],
    nextTaskID: 3
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
        case DELETE_TODO:
            const deleteTodoState = Object.assign({}, state);
            deleteTodoState.todoList.forEach((task, index) => {
                if (task.id === action.payload) {
                    deleteTodoState.todoList.splice(index, 1);
                }
            });
            return deleteTodoState;
        case UPDATE_TODO:
            
            const updateTodoState = Object.assign({}, state);
            updateTodoState.todoList.find(task => {
                if (task.id === action.payload.id) {
                    console.log(task);
                    task = action.payload;
                }
            });

            return updateTodoState;
        case ADD_TODO:
            const addTodoState = Object.assign({}, state);
            addTodoState.todoList.push(action.payload);
            addTodoState.nextTaskID++;
            return addTodoState;
        default:
            return state;
    }
}

export default reducer;