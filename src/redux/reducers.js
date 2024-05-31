import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionTypes";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    filter: localStorage.getItem('filter') || "ALL",
    searchTerm: localStorage.getItem('searchTerm') || ""
};
const saveStateToLocalStorage = (state) => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
    localStorage.setItem('filter', state.filter);
    localStorage.setItem('searchTerm', state.searchTerm);
};
const todoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_TODO:
            newState = {
                ...state,
                todos: [...state.todos, { text: action.payload.text, completed: false }]
            };
            saveStateToLocalStorage(newState);
            return newState;
        case TOGGLE_TODO:
            newState = {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                )
            };
            saveStateToLocalStorage(newState);
            return newState;
        case REMOVE_TODO:
            newState = {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload.id)
            };
            saveStateToLocalStorage(newState);
            return newState;
        case MARK_COMPLETED:
            newState = {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: true } : todo
                )
            };
            saveStateToLocalStorage(newState);
            return newState;
        case MARK_INCOMPLETED:
            newState = {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: false } : todo
                )
            };
            saveStateToLocalStorage(newState);
            return newState;
        case FILTER_TODOS:
            newState = {
                ...state,
                filter: action.payload.filter
            };
            saveStateToLocalStorage(newState);
            return newState;
        case UPDATE_SEARCH_TERM:
            newState = {
                ...state,
                searchTerm: action.payload.searchTerm
            };
            saveStateToLocalStorage(newState);
            return newState;
        case MARK_ALL_COMPLETED:
            newState = {
                ...state,
                todos: state.todos.map(todo => ({ ...todo, completed: true }))
            };
            saveStateToLocalStorage(newState);
            return newState;
        default:
            return state;
    }
};

export default todoReducer;
