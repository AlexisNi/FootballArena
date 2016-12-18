/**
 * Created by alex on 18/10/2016.
 */
export var User = (function () {
    function User(email, password, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
