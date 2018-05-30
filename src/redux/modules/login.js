// ACTIONS
const TOGGLE_DIALOGUE = 'TOGGLE_DIALOGUE';

// ACTION CREATORS
const toggleDialogue = () => ({
    type: TOGGLE_DIALOGUE,
});

// ASYNC ACTION CREATORS
export const updateToggleDialogue = () => dispatch => {
    dispatch(toggleDialogue());
};

// REDUCER
export default (
    state = {
        isLoading: false,
        dialogue: false,
    },
    action,
) => {
    switch (action.type) {
    case TOGGLE_DIALOGUE: {
        return { ...state, dialogue: !state.dialogue };
    }
    default:
        return state;
    }
};
