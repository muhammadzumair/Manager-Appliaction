import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
class EmployeeEdit extends Component {

    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }
    onTextPress() {
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);

    }
    onAccept() {
        const {uid} = this.props.employee;
        this.props.employeeDelete({ uid });
    }
    onDecline() {
        this.setState({ showModal: false });
    }
    render() {
        return (
            <ScrollView>
                
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);