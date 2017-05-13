import React, {Component} from 'react';
import {Card, CardSection,Button} from './common';
import {connect} from 'react-redux';
import EmployeeForm  from './EmployeeForm';
import {employeeUpdate, employeeCreate} from '../actions'

class EmployeeCreate extends Component{
    onButtonPress(){
        const {name,phone,shift} = this.props;
        this.props.employeeCreate({name, shift: shift || 'Monday', phone});
    }
    render(){
        return(
            <Card>
               <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;
    return {name,phone,shift};
}



export default connect(mapStateToProps ,{
    employeeUpdate,
    employeeCreate
}) (EmployeeCreate);