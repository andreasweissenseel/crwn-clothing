import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
    const currency = 'EUR'
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51EBGacIBJoahF1bcL2oNjymsf7gSBuibO3iQto1ReTRqw8AE8rO9EQvHnfBAbyqHc0J8jt884sLQsSCNHYwTDvYa00L7QEUPAV";

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                currency,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please make sure you use the provided credit card!');
        })
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress={false}
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price} €`}
            amount={priceForStripe}
            currency={currency}
            locale='de'
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;
