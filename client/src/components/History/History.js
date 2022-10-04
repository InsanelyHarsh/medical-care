import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IncorporationForm from "./History2";
import "./History.css"
export default function HistoryForm() {
    return (
        <div className="history-form">
             <form  noValidate> 
                <Grid container alignItems="flex-start" spacing={2}>
                <Grid container direction="column" item xs={6} spacing={1}>
                <Grid item xs={12}>
                        <TextField
                            autoComplete="patient_id"
                            name="patient_id"
                            variant="outlined"
                            required
                            id="patient_id"
                            label="patient_id"
                            // onChange={onChange}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            id="problem"
                            label="Problem"
                            name="problem"
                            // onChange={onChange}
                            autoComplete="problem"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                            variant="outlined"
                            name="treatment"
                            label="Treatment"
                            type="string"
                            id="treatment"
                            // onChange={onChange}
                            autoComplete="treatment"
                        />
                    </Grid>
                </Grid>
                <Grid container direction="column" item xs={6} spacing={1}>
                <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            name="description"
                            label="Description"
                            type="text"
                            id="description"
                            // onChange={onChange}
                            autoComplete="Description"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            name="duration"
                            label="Duration of Treatment"
                            type="string"
                            id="duration"
                            // onChange={onChange}
                            autoComplete="duration"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <IncorporationForm />
                    </Grid>
                </Grid>
                    
                </Grid>
            </form>
            
            <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="sub"
                >
                    Submit
            </Button>
            
        </div>
    )
}