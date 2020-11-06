import { ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER } from '../constants'

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text: text,
        dueDate: dueDate

    }
    console.log('action in addReminder', action)
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id: id
    }
    console.log('deleting in actions', action);
    return action;
}
export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    }
}

