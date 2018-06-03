const styles = theme => ({
    textField: {
        border: '1px solid #666699',
        borderRadius: 7.5,
        backgroundColor: '#FFF',
        padding: '0 7.5px',
        width: '100%',
    },
    inputFocused: {
        fontSize: 16,
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['background-color']),
        fontFamily: ['Roboto', 'Arial'].join(','),
        '&:focus': {
            backgroundColor: '#CEE3EE',
        },
    },
    adornment: {
        margin: '0 5px',
        padding: '0 5px',
    },
    underlineStyle: {
        display: 'none',
    },
});
export default styles;
