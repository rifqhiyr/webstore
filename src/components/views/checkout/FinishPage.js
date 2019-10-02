import React, { Component } from 'react'
import '../../../assets/scss/ConfirmationPage.scss'

class FinishPage extends Component {
    render() {
        return (
            <div className="checkout-section">
                <div className="checkout-container">
                    <div className="checkout-title">
                        <h3>Checkout</h3>
                    </div>
                    <div className="checkout-success">
                        <img src={require("../../../assets/images/Rocket-PNG-Clipart.png")} alt="Success"/>
                        <div className="success-items">
                            <h3>SUCCESS!</h3>
                            <p>Your items will be shipped shortly,</p>
                            <p>you will get email with details.</p>
                        </div>
                    </div>
                    <div className="checkout-shop">
                        <button className="btn-shop">Back To Shop</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FinishPage