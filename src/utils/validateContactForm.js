export const validateContactForm = (values) => {
    const errors = {};
    // VALIDATE FIRST NAME //
    if(!values.firstName){
        errors.firstName = 'Required';
    } else if(values.firstName.length < 2){
        errors.firstName = 'Must be at least 2 characters';
    } else if(values.firstName.length > 15){
        errors.firstName = 'Must be 15 characters or less';
    }
    // VALIDATE LAST NAME //
    if(!values.lastName){
        errors.lasttName = 'Required';
    } else if(values.lastName.length < 2){
        errors.lastName = 'Must be at least 2 characters';
    } else if(values.lastName.length > 15){
        errors.lastName.lastName = 'Must be 15 characters or less';
    }
    // VALIDATE PHONE NUMBER //
    const reg = /^\d+$/;
    if(!reg.test(values.phoneNum)){
        errors.phoneNum = 'The phone number should contain only numbers'
    }
    // VALIDATE EMAIL //
    if(!values.email.includes('@')){
        errors.email = 'Email should contain an @ symbol'
    }

    return errors;
}