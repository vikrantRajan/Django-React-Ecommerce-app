/*

    THIS IS MEANT TO EMMULATE AN AUTHENTICATION PROCESS 
    import axios from 'axios'
*/
let jwtExpireTimer = 30,
validJWT = 'UumLXJkwpnMzHVm9gDITl7L3H1vD41nPKWIFdgNWAm4yjq56llvOqBkmLddBClaIzeNzUssAxCumzjh5kJeaRRw9cKrcGjhv80lC'
class Auth {

    constructor(){
        this.validUsername = 'test'
        this.validPassowrd = '123'
    }

    SignIn(formData, timer = 900) {
        // axios.post(username, password, url)
        const { username, password } = formData
        if (username === this.validUsername && password === this.validPassowrd) {
            this.startTimer(timer);
            console.log('successfully signed in!')
            return {
                username: this.validUsername,
                token: validJWT
                }
        } else {
            throw new Error('Invalid Username or Password');
        }
    }

    async SignOut() {
        jwtExpireTimer = 0
    }

    async Validate(token) {
        // console.log(validJWT, jwtExpireTimer)

        if (token === validJWT && jwtExpireTimer > 0) {
            // console.log('Token Is Valid');
            return true;
        } else {
            // console.log('Token Is Not Valid');
            return false;
        }
    }
    

    startTimer(time) {

        jwtExpireTimer = time;
        const timer = setInterval(() => {
    
            console.log(`${jwtExpireTimer} seconds left for JWT to expire...`);
            jwtExpireTimer--;
    
            if (jwtExpireTimer < 0) {
                clearInterval(timer);
                validJWT = 'null'
                jwtExpireTimer = -1
                console.log('JWT token expired!', validJWT, jwtExpireTimer);
            }
    
        }, 1000);
    }

}

export default Auth
