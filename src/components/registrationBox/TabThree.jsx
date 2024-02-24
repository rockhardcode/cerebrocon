import PropTypes from 'prop-types';
import "./TabThree.css"

const TabThree = ({formValue, amount, category, handleChange}) => {
  // State to hold the data
  const selectedAmount = category.find((item) => { return item.categoryName === amount})
 console.log(formValue, 'formValue')
 const handleBack = () => {
    handleChange('2')
 }
 const handleSubmit = (e) => {
    e.preventDefault()
    var options = {
        key: "fgsfdgsdfg",
        key_secreat: "dfgsdfgdfgdfg",
        amount: 100,
        currency: "INR",
        name: "CerebroCon",
        description: "thank you",
        handler: function(response){
            alert(response.razorpay_payment_id)
        },
        prefill: {
            name: "rakesh",
            email: "rakesh.aksh7@gmail.com",
            contact: "7989043818",
        },
        notes: {
            address: "razorpay office",
        },
        theme: {
            color: "#3399cc"
        }
    }
    var pay = new window.Razorpay(options);
    pay.open()
 }
  return (
    <div className='summary-container'>
        <div className='summary-subcontainer'>
            <div className='order-summary'><h2>Order Summary</h2></div>
        <div className='order-heading'>
                <h3>Ticket</h3>
                <h5>Sub-Total</h5>
            </div>
            <div className='order-name'>
                <h3>Order Name</h3>
                <h4>{selectedAmount.categoryName}</h4>
            </div>
            <hr />
            <div className='order-price'>
                <h3>Order Price</h3>
                <h4>{selectedAmount.currency}&nbsp;{selectedAmount.amount}/-</h4>
            </div>
            <hr />
            <div className='grand-total'>
                <h3>Grand Total</h3>
                <h4>{selectedAmount.currency}&nbsp;{selectedAmount.amount}/-</h4>
            </div>
        </div>
        <div className='porceed-buttons'>
        <button className='btn-back' onClick={handleBack}>Back</button>
        <hr />
      <button className='btn-proceed' onClick={handleSubmit}>Proceed</button>
        </div>
    </div>
  );
};
TabThree.propTypes = {
    formValue: PropTypes.func.isRequired,
    amount: PropTypes.func.isRequired,
    category: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
  };
  

export default TabThree;
