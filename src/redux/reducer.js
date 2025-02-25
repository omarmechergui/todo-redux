import { ADDTASK, DARK, DELETETASK, EDITTASK } from "./action_type";

const initialState = {
    tasks: [{ task: 'drenk coffe', id: 1, time: '08:00am', iscomplete: false },
         { task: 'go to lern redux', id: 2, time: '10:00am', iscomplete: false }],
    user: null,
    darkmode: false

}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADDTASK:
            return { ...state, tasks: [...state.tasks, payload] }
        case DELETETASK:
            return { ...state, tasks: state.tasks.filter(task => task.id!== payload) }
        case EDITTASK:
            return { ...state, tasks: state.tasks.map(task => task.id === payload ? { ...task, iscomplete: !task.iscomplete } : task) }
        case DARK :
            return {...state, dark: !state.dark}

        default:
            return state
    }
}

export default reducer;