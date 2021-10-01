import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

export default function RegisterForm() {
    const classes = useStyles()
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [firstnameError, setFirstNameError] = useState(false)
    const [lastnameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmpasswordError, setConfirmPasswordError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setFirstNameError(false)
        setLastNameError(false)
        setEmailError(false)
        setPasswordError(false)
        setConfirmPasswordError(false)

        if (firstname == '') {
            setFirstNameError(true)
        }
        if (lastname == '') {
            setLastNameError(true)
        }
        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
        if (confirmpassword == '') {
            setConfirmPasswordError(true)
        }
        if (firstname && lastname && email && password && confirmpassword) {
            console.log(firstname, lastname, email, password, confirmpassword)
        }
    }

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                color="textPrimary"
                gutterBottom
            >
                Register
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setFirstName(e.target.value)}
                    className={classes.field}
                    label="First Name"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    error={firstnameError}
                />
                <TextField
                    onChange={(e) => setLastName(e.target.value)}
                    className={classes.field}
                    label="Last Name"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    error={lastnameError}
                />
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.field}
                    label="Email"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    error={emailError}
                />
                <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes.field}
                    label="Password"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    error={passwordError}
                />
                <TextField
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={classes.field}
                    label="Confirm Password"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    error={confirmpasswordError}
                />
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </form>
        </Container>
    )
}
