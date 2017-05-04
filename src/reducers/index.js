import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormRecducer from './EmployeeFormReducer'
import EmployeesRedcucer from './EmployeesRedcucer'
export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormRecducer,
    employees: EmployeesRedcucer
});