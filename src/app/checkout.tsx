
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const CheckoutScreen = () => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [city, setCity] = useState('');
  const [productQuantity, setProductQuantity] = useState('1');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!customerName) {
      newErrors.customerName = 'Customer Name is required';
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    }
    if (email && !email.includes('@')) {
      newErrors.email = 'Email address is invalid';
    }
    if (!deliveryAddress) {
      newErrors.deliveryAddress = 'Delivery Address is required';
    }
    if (!city) {
      newErrors.city = 'City is required';
    }
    const quantity = parseInt(productQuantity, 10);
    if (isNaN(quantity) || quantity <= 0) {
      newErrors.productQuantity = 'Quantity must be greater than 0';
    }
    if (!paymentMethod) {
      newErrors.paymentMethod = 'Payment Method is required';
    }
    if (!deliveryOption) {
      newErrors.deliveryOption = 'Delivery Option is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Checkout successful');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Commerce Checkout</Text>

      <TextInput
        style={styles.input}
        placeholder="Customer Name"
        value={customerName}
        onChangeText={setCustomerName}
      />
      {errors.customerName && <Text style={styles.error}>{errors.customerName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Delivery Address"
        value={deliveryAddress}
        onChangeText={setDeliveryAddress}
      />
      {errors.deliveryAddress && <Text style={styles.error}>{errors.deliveryAddress}</Text>}

      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      {errors.city && <Text style={styles.error}>{errors.city}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Product Quantity"
        value={productQuantity}
        onChangeText={setProductQuantity}
        keyboardType="numeric"
      />
      {errors.productQuantity && <Text style={styles.error}>{errors.productQuantity}</Text>}

      {/* Replace with Pickers for Payment Method and Delivery Option */}
      <TextInput
        style={styles.input}
        placeholder="Payment Method"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />
      {errors.paymentMethod && <Text style={styles.error}>{errors.paymentMethod}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Delivery Option"
        value={deliveryOption}
        onChangeText={setDeliveryOption}
      />
      {errors.deliveryOption && <Text style={styles.error}>{errors.deliveryOption}</Text>}

      <Button title="Checkout" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default CheckoutScreen;