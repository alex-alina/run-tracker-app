import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { InputLabel } from '@material-ui/core';
import { styles } from './AddRunModalStyles';

class AddRunModal extends PureComponent {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.distance, this.state.duration, this.state.date);
    this.setState({
      open: false,
      distance: "",
      duration: "",
      date: "",
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" size="medium" color="primary" className={classes.button} >
          Add run
        </Button>

        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogContent>
            <ValidatorForm ref="form" onSubmit={this.handleSubmit} className={classes.form} autoComplete="off" noValidate>
              <TextValidator
                required
                id="distance"
                label="Distance(km)"
                type="number"
                name="distance"
                value={this.state.distance || ""}
                onChange={this.handleChange}
                placeholder="Enter distance"
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                autoComplete="off"
                validators={['required', 'isNumber']}
                errorMessages={['Required field', 'Please insert a number']}
              />
              <TextValidator
                required
                id="duration"
                label="Duration(min)"
                type="number"
                name="duration"
                value={this.state.duration || ""}
                onChange={this.handleChange}
                placeholder="Enter duration"
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                autoComplete="off"
                validators={['required', 'isNumber']}
                errorMessages={['Required field', 'Please insert a number']}
              />
              <TextValidator
                required
                id="date"
                label="Date"
                type="date"
                name="date"
                value={this.state.date || ""}
                onChange={this.handleChange}
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                validators={['required']}
                errorMessages={['Required field']}
              />

              <div className={classes.positionSubmitBtn}>
                <InputLabel htmlFor="submit">
                  <Button
                    onClick={this.handleClose}
                    variant="contained"
                    color="primary"
                    size="large"
                    component="span"
                    className={classes.submitBtn}
                  >
                    Save
                  </Button>
                </InputLabel>
                <input id="submit" className="submit-btn" type="submit" value="Save distance" style={{ display: "none" }} />
              </div>

            </ValidatorForm>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

AddRunModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddRunModal);