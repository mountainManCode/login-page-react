const styles = theme => ({
    paper: {
        minHeight: '300px',
        [theme.breakpoints.up('md')]: {
            borderRadius: 10,
            width: '50%',
            maxWidth: '600px',
            minWidth: '200px',
        },
        [theme.breakpoints.up('sm')]: {
            borderRadius: 10,
            width: '66%',
            maxWidth: '500px',
        },
        [theme.breakpoints.only('xs')]: {
            width: '100%',
            borderRadius: 0,
        },
    },
    loginTitleWrapper: {
        display: 'flex',
        'flex-flow': 'row nowrap',
        'justify-content': 'space-between',
    },
    title: {
        color: '#666699',
    },
    form: {
        display: 'flex',
        'flex-flow': 'column nowrap',
        padding: '5% 10%',
        minHeight: '250px',
        width: '100%',
    },
    formControl: {
        alignSelf: 'center',
    },
    button: {
        background: '#666699',
        borderRadius: 25,
        border: 0,
        color: '#fff',
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        alignSelf: 'flex-end',
        margin: '10px 0',
        height: 48,
        width: '33%',
        minWidth: '150px',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        '&:hover': {
            backgroundColor: '#00FFFF',
        },
    },
    buttonResetPassword: {
        color: '#666699',
        fontSize: 16,
        textTransform: 'capitalize',
        padding: '0',
        lineHeight: '0px',
        minHeight: '0px',
    },
    buttonRegister: {
        color: '#666699',
        fontSize: 16,
        textTransform: 'lowercase',
        padding: '0px 0px 0px 4px',
        lineHeight: '0px',
        minHeight: '0px',
    },
    registerWrapper: {
        display: 'flex',
        'flex-flow': 'row wrap',
        fontSize: 16,
        padding: '0',
        margin: '0',
    },
});

export default styles;
