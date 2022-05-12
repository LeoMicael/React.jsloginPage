import React, { useState, useContext } from 'react'

import { AuthContext } from "../auth/authenticated"

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItens: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`

    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        margin: '2em',
    },
    FormControl: {
        backGroundColor: 'black',
    },
})
const LoginView = (props) => {

    const { classes } = props

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password)
        login(email, password);
    }
    return (
        <main id='login' className={classes.main}>
            <Paper onSubmit={handleSubmit} className={classes.paper}>
                <Typography className={classes.label}>
                    <h1>
                        SingIn
                    </h1>
                </Typography>

                <form className={classes.form}>
                    <FormControl className={classes.FormControl}>
                        <InputLabel> Email </InputLabel>
                        <Input className={classes.input} type='email' id='email' autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                    </FormControl>
                    <FormControl>
                        <InputLabel > Senha </InputLabel>
                        <Input className={classes.input} type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                    </FormControl>

                    <Button type='submit'
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Entrar
                    </Button>
                </form>
            </Paper>
        </main>
    );
}

LoginView.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(LoginView);
