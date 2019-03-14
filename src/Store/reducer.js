const initialState = {
    todoList: [{ taskName: 'example task', taskContent: 'example content'}],
    user: {
        isLoggedIn: false,
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;