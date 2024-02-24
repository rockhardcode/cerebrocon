import { useState } from "react";
import Button from '@mui/material/Button';
import "./TabOne.css"
import PropTypes from 'prop-types';
// {
//     categoryName: "Non-AMASI Members",
//     currency: "INR",
//     amount: "12980"
// },

const TabOne = ({category, handleChange, handleAmount}) => {
    const [selectedCheckbox, setSelectedCheckbox] = useState('');

    const handleCheckboxChange = (event) => {
      setSelectedCheckbox(event.target.value);
    };
    const handleClick = () => {
        if(selectedCheckbox){
        handleChange('2')
        handleAmount(selectedCheckbox)
        }
    }
  
    return(
        <div className="tab-one-container">
      <div className="inner-tab-one">
      {category.map((checkbox) => (
        <div key={checkbox.categoryName} className="tab-one-options">
          <label>
            <input
              type="checkbox"
              value={checkbox.categoryName}
              checked={selectedCheckbox === checkbox.categoryName}
              onChange={handleCheckboxChange}
            />
            <span className="category-name">{checkbox.categoryName}</span>
          </label>
          <div className="category-price"><span>{checkbox.currency}</span><span>{checkbox.amount}</span></div>
        </div>
      ))}
      <div><Button variant="contained" onClick={handleClick}>Next</Button></div>
      </div>
    </div>
    )
}
TabOne.propTypes = {
  category: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAmount: PropTypes.func.isRequired
};

export default TabOne