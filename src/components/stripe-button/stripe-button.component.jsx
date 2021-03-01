import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment successful');
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51EBGacIBJoahF1bcL2oNjymsf7gSBuibO3iQto1ReTRqw8AE8rO9EQvHnfBAbyqHc0J8jt884sLQsSCNHYwTDvYa00L7QEUPAV";
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress={false}
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price} €`}
            amount={priceForStripe}
            currency='EUR'
            locale='de'
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;
