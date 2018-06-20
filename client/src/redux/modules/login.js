// ACTIONS
const GET_EMAIL = 'GET_EMAIL';
const GET_PASSWORD = 'GET_PASSWORD';
const GET_LOADING = 'GET_LOADING';
const GET_PROFILE = 'GET_PROFILE';
const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';
const GET_GREETING = 'GET_GREETING';
const TOGGLE_DIALOGUE = 'TOGGLE_DIALOGUE';
const RESET_LOGIN = 'RESET_LOGIN';

// ACTION CREATORS
const getEmail = email => ({
    type: GET_EMAIL,
    payload: email,
});

const getPassword = password => ({
    type: GET_PASSWORD,
    payload: password,
});

const resetLogin = (email, password) => ({
    type: RESET_LOGIN,
    email,
    password,
});

const getLoading = () => ({
    type: GET_LOADING,
});

const getProfile = user => ({
    type: GET_PROFILE,
    payload: user,
});

const getProfileError = error => ({
    type: GET_PROFILE_ERROR,
    payload: error,
});

const getGreeting = (greeting) => ({
    type: GET_GREETING,
    payload: greeting,
});

const toggleDialogue = () => ({
    type: TOGGLE_DIALOGUE,
});

// ASYNC ACTION CREATORS
const MESSAGES_URL = 'http://localhost:3004/messages';
const USERS_URL = 'http://localhost:3004/users';


export const fetchEmail = email => dispatch => {
    dispatch(getEmail(email));
};

export const fetchPassword = password => dispatch => {
    dispatch(getPassword(password));
};

export const fetchReset = (email, password) => dispatch => {
    dispatch(resetLogin(email, password));
};

export const fetchGreeting = () => dispatch => {
    dispatch(getLoading());

    const messages = fetch(MESSAGES_URL).then(r => r.json());

    return Promise.all([messages]).then(response => {
        const [messagesList] = response;

        const loginGreeting = messagesList.find(message =>
            message.greeting);
        const welcome = Object.values(loginGreeting).toString();

        dispatch(getGreeting(welcome));
    });
};

export const fetchUser = (email, password) => dispatch => {
    dispatch(getLoading());
    const users = fetch(USERS_URL).then(r => r.json());

    return Promise.all([users]).then(response => {
        const [usersList] = response;

        const profile = usersList.filter(user =>
            user.email === email && user.password === password);
        dispatch(getProfile(profile));
        if (profile.length > 0) {
            dispatch(toggleDialogue());
        } else { dispatch(getProfileError('Please enter correct email and password.')); }
    })
        .catch(error => dispatch(getProfileError(error)));
};

export const updateToggleDialogue = () => dispatch => {
    dispatch(toggleDialogue());
};

// REDUCER
export default (
    state = {
        isLoading: false,
        dialogue: false,
        email: '',
        error: '',
        greeting: '',
        password: '',
        user: [],
    },
    action,
) => {
    switch (action.type) {
    case GET_EMAIL: {
        return {
            ...state,
            email: action.payload,
        };
    }
    case GET_PASSWORD: {
        return {
            ...state,
            password: action.payload,
        };
    }
    case RESET_LOGIN: {
        return {
            ...state,
            email: '',
            password: '',
        };
    }
    case TOGGLE_DIALOGUE: {
        return { ...state, dialogue: !state.dialogue };
    }
    case GET_GREETING: {
        return {
            ...state,
            isLoading: false,
            greeting: action.payload,
            error: '',
        };
    }
    case GET_LOADING: {
        return { ...state, isLoading: true, error: '' };
    }
    case GET_PROFILE: {
        return {
            ...state,
            isLoading: false,
            user: action.payload,
            error: '',
        };
    }

    case GET_PROFILE_ERROR: {
        return { ...state, isLoading: false, error: action.payload };
    }
    default:
        return state;
    }
};
