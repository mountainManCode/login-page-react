import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, withMobileDialog } from '@material-ui/core/';

import { fetchGreeting, updateToggleDialogue } from '../../redux/modules/login';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class LoginConfirmation extends Component {
    async componentDidMount() {
        await this.props.dispatch(fetchGreeting());
    }

    handleSignOut = () => {
        this.props.dispatch(updateToggleDialogue());
    };

    render() {
        const {
            dialogue, greeting, user, fullScreen
        } = this.props;

        const userName = user.find(value => value.fullName);

        return (
            <div>
                <Dialog
                    open={this.props.dialogue === true}
                    fullScreen={fullScreen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="dialog-slide-user"
                    aria-describedby="dialog-slide-greeting"
                >
                    <DialogTitle id="dialog-slide-user">
                        {userName ? `Hey there, ${userName.fullName}.` : ''}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="dialog-slide-greeting">
                            {greeting}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleSignOut} color="primary">
                            SignOut
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dialogue: state.login.dialogue,
    greeting: state.login.greeting,
    user: state.login.user,
});

export default compose(connect(mapStateToProps), withMobileDialog())(LoginConfirmation);
