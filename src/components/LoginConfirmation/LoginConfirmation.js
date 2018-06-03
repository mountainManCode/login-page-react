import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

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
        const { dialogue, greeting, user } = this.props;

        const userName = user.find(value => value.fullName);

        return (
            <div>
                <Dialog
                    open={this.props.dialogue === true}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {userName ? `Hey there, ${userName.fullName}.` : ''}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
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

export default connect(mapStateToProps)(LoginConfirmation);
