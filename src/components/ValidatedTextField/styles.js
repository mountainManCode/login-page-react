const styles = theme => ({
    textField: {
        border: '1px solid #666699',
        borderRadius: 7.5,
        backgroundColor: '#FFF',
        padding: '0 7.5px',
        width: '100%',
    },
    inputFocused: {
        backgroundColor: '#FFF',
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
    fieldStyle: {
        width: '50%',
    },
    // errorStyle: {
    //     color: 'red',
    //     position: 'absolute',
    //     bottom: '-0.42rem',
    // },
    underlineStyle: {
        display: 'none',
    },
});
export default styles;
