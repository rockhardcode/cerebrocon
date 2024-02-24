import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Grid } from '@mui/material';

function TabTwo({ handleChange, handleFormValue }) {
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    foodPreference: '',
    medicalRegistrationNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked ? value : '',
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    if (
      formData.salutation &&
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.addressLine1 &&
      formData.city &&
      formData.zip &&
      formData.country &&
      formData.state &&
      formData.foodPreference &&
      formData.medicalRegistrationNumber
    ) {
      handleChange('3');
      console.log(formData);
      handleFormValue(formData)
    } else {
      alert('Please fill in all mandatory fields.');
    }
  };

  const handleBack = () => {
    handleChange('1');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Salutation *</InputLabel>
            <Select
              value={formData.salutation}
              onChange={handleInputChange}
              name="salutation"
              required
            >
              <MenuItem value="Dr">Dr</MenuItem>
              <MenuItem value="Prof">Prof</MenuItem>
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="First Name *"
            value={formData.firstName}
            onChange={handleInputChange}
            name="firstName"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Middle Name"
            value={formData.middleName}
            onChange={handleInputChange}
            name="middleName"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Last Name *"
            value={formData.lastName}
            onChange={handleInputChange}
            name="lastName"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email *"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number *"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            name="phoneNumber"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address Line 1 *"
            value={formData.addressLine1}
            onChange={handleInputChange}
            name="addressLine1"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address Line 2"
            value={formData.addressLine2}
            onChange={handleInputChange}
            name="addressLine2"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="City *"
            value={formData.city}
            onChange={handleInputChange}
            name="city"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="ZIP *"
            value={formData.zip}
            onChange={handleInputChange}
            name="zip"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Country *</InputLabel>
            <Select
              value={formData.country}
              onChange={handleInputChange}
              name="country"
              required
            >
              <MenuItem value="USA">United States</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="UK">United Kingdom</MenuItem>
              <MenuItem value="Australia">Australia</MenuItem>
              {/* Add more country options */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="State *"
            value={formData.state}
            onChange={handleInputChange}
            name="state"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <InputLabel>Food Preference *</InputLabel>
            <Select
              value={formData.foodPreference}
              onChange={handleInputChange}
              name="foodPreference"
              required
            >
              <MenuItem value="Veg">Veg</MenuItem>
              <MenuItem value="Non-Veg">Non-Veg</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Medical Registration Number *"
            value={formData.medicalRegistrationNumber}
            onChange={handleInputChange}
            name="medicalRegistrationNumber"
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <Button onClick={handleBack} variant="contained" color="primary">Back</Button>
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
}

TabTwo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleFormValue: PropTypes.func.isRequired
};

export default TabTwo;