import React from "react";
import '../styles/Payment.css'
import { Link } from "react-router-dom";
import visa from '../Assets/visa.png'
import Modal from './Shop/Finalize'

function Payment(props) {
    const [paymentForm, setPaymentForm] = React.useState({
        cardNo: "",
        cardM: "",
        cardY: "",
        cvv:"",
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        street:"",
        zip: "",
        email: "",
    })
    const [modal, setModal] = React.useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    function handleChange(event) {
        setPaymentForm(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(paymentForm);
        const isFormValid = Object.values(paymentForm).every(value => value.trim() !== "");
        if (!isFormValid) {
            alert("Please fill in all required fields.");
            return;
        }

       toggleModal();
    }

    return(
        <div className="Payment"style={{ background:  props.styles.background,color :props.styles.font_color  }}>
            <Modal
                styles={props.styles}
                toggleModal={toggleModal}
                modal={modal}
                productName="jkl"
                imageSrc="jkl" 
                paymentForm = {paymentForm}
            />
            <h2>Payment</h2>
            <hr className="solid" />
            <form className="payment-form" onSubmit={handleSubmit}>
                <div className="payment-section">
                    <div className="card-info">
                        <h2>Card information</h2>
                        <p>Indicate details of the card from which money will be debited</p>
                        <div className="payment-card" style={{ background: props.styles.extras }}>
                            <div className="card-row-1" >
                                <img src={visa} alt="Visa Card"></img>
                            </div>
                            <div className="card-row-2">  
                                <p>Card number</p>
                                <input style={{ background: props.styles.extras }} placeholder="0000 0000 0000 0000" onChange={handleChange} name="cardNo" value={paymentForm.cardNo}></input>
                            </div>
                            <div className="card-row-3">  
                                <div className="month-year">
                                    <p>Month and year</p>
                                    <div className="month-year-1">
                                        <input style={{ background: props.styles.extras }}placeholder="00" onChange={handleChange} name="cardM" value={paymentForm.cardM} type="text" />
                                        <b>/</b><input style={{ background: props.styles.extras }} placeholder="00" onChange={handleChange} name="cardY" value={paymentForm.cardY} type="text" />
                                    </div>
                                </div>
                                <div className="cvv">
                                    <p>CVV code</p>
                                    <input style={{ background: props.styles.extras }} placeholder="000" onChange={handleChange} name="cvv" value={paymentForm.cvv} type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="personal-info">
                        <h2>Personal information</h2>
                        <div className="info-data">
                            <input style={{ background: props.styles.extras }}placeholder="First name" type="text" onChange={handleChange} name="firstName" value={paymentForm.firstName} className="input-short" />
                            <input style={{ background: props.styles.extras }}placeholder="Last name" type="text" onChange={handleChange} name="lastName" value={paymentForm.lastName} className="input-short" />
                            <input style={{ background: props.styles.extras }}placeholder="Country" type="text" onChange={handleChange} name="country" value={paymentForm.country} className="input-long" />
                            <input style={{ background: props.styles.extras }}placeholder="City" type="text" onChange={handleChange} name="city" value={paymentForm.city} className="input-short" />
                            <input style={{ background: props.styles.extras }}placeholder="Zip code" type="text" onChange={handleChange} name="zip" value={paymentForm.zip} className="input-short" />
                            <input style={{ background: props.styles.extras }}placeholder="Address" type="text" onChange={handleChange} name="street" value={paymentForm.street} className="input-long" />
                            <input style={{ background: props.styles.extras }}placeholder="E-mail" type="text" onChange={handleChange} name="email" value={paymentForm.email} className="input-long" />
                            </div>
                    </div>
                </div>
                <button type="submit" className="newsletter-btn">Pay</button>
            </form>
        </div>
    )
}

export default Payment;
