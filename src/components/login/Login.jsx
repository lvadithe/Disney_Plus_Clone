import React from 'react'
import './login.css';

function Login() {
    return (
        <div className="container__login">
            <div className="content__login">
                <img src="/images/login__logo.png" alt="" className="content__logo_one" />
                <a href="" className="sign__up">GET ALL THERE</a>
                <p className="description__component">
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+
                    subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </p>
                <img src="/images/cta-logo-two.png" alt="" className="logo__two" />
            </div>
        </div>
    )
}

export default Login