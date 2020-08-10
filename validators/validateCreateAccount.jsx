export default function validateCreateAccount(values){
    let errors = {};

    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ? errors.email = 'type a valid email': void(0);
    values.password.length < 6 ? errors.password = 'pasword must be 6+ characters length': void(0);

    Object.keys(values).map( k => {
        !values[k] ? errors[k] = `${k} is required`: void(0); 
    })
    
    return errors;

}   