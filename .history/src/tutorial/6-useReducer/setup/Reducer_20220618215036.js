import { data } from '../../../data';

// reducer function
const reducer = (state, action) => {
    if (action.type === 'ADD_PERSON') {
        const newItems = [ ...state.people, action.payload ];

        return {
        ...state, // return the current state
        people: newItems,
        isModalOpen: true,
        modalContent: 'item added'
        };
    }

    if (action.type === 'NOT_VALUE') {
        return {
        ...state,
        showModal: true,
        modalContent: 'plase enter value'
        };
    }

    if (action.type === 'CLOSE_MODAL') {
        return {
        ...state,
        isModalOpen: false
        }
    }

    throw new Error('no matching action type');
}; 