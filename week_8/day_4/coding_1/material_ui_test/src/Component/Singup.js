import React, { Component } from 'react';
import Style from './Login.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


export default class Singup extends Component {
  render() {
    return (
        <div className={Style.center}>
            <div>
                <Typography variant="h4" color="primary">To.Do List </Typography>
            </div>
            <div className={Style.card_size}>
            <Card>
                <CardContent>
                    <Typography variant="h4">Sing Up</Typography>
                    <div className={Style.textfield}>
                        <TextField id="outlined-basic" label="Enter your mail id" variant="outlined" style={{width:"90%"}} />
                    </div>
                    <div className={Style.textfield}>
                        <TextField id="outlined-basic" label="Enter your password" variant="outlined" style={{width:"90%"}} />
                    </div>
                    <div className={Style.textfield}>
                        <Button variant="contained" color="primary" style={{width:"90%"}}>Continue</Button>
                    </div>
                    <div className={Style.textfield}>
                    <Typography variant="body2" component="p">By continuing, you agree to To.Do Conditions of Use and Privacy Notice.</Typography>
                    </div>
                </CardContent>
            </Card>
            </div>
        </div>
    )
  }
}
