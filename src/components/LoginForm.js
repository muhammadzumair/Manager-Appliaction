import React,{Component} from 'react';
import {Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {emailChange, passwordChanged, LoginUser} from '../actions';
import {connect} from 'react-redux';

class LoginForm extends Component{
 
    onEmailChange(text){
        this.props.emailChange(text)
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const {email, password} = this.props;
        this.props.LoginUser({email, password});
    }
    renderButton(){
        if (this.props.loading){
            return <Spinner size="large" />
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }
    render(){
        console.log(this.props.email)
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="enter@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email} 
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="enter password" 
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>      
                <CardSection>
                    
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps= ({auth}) => {
    const {email,password,error,loading} = auth;
    return{
        email,
        password,
        error,
        loading

    }
}

const styles={
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default connect(mapStateToProps, {emailChange,passwordChanged, LoginUser})(LoginForm);