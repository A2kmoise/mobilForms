
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const BankingScreen = () => {
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [description, setDescription] = useState('');
  const [pin, setPin] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!accountName) {
      newErrors.accountName = 'Account Name is required';
    }
    if (!/^[0-9]+$/.test(accountNumber)) {
      newErrors.accountNumber = 'Account Number must contain only numbers';
    }
    const transferAmount = parseFloat(amount);
    if (isNaN(transferAmount) || transferAmount <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }
    if (!currency) {
      newErrors.currency = 'Currency is required';
    }
    if (description.length > 100) {
      newErrors.description = 'Description cannot exceed 100 characters';
    }
    if (!/^[0-9]{4}$/.test(pin)) {
      newErrors.pin = 'PIN must be exactly 4 digits';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Transfer submitted successfully');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Online Banking Transfer</Text>

      <TextInput
        style={styles.input}
        placeholder="Account Name"
        value={accountName}
        onChangeText={setAccountName}
      />
      {errors.accountName && <Text style={styles.error}>{errors.accountName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
        keyboardType="numeric"
      />
      {errors.accountNumber && <Text style={styles.error}>{errors.accountNumber}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      {errors.amount && <Text style={styles.error}>{errors.amount}</Text>}

      {/* Replace with a Picker for Currency */}
      <TextInput
        style={styles.input}
        placeholder="Currency"
        value={currency}
        onChangeText={setCurrency}
      />
      {errors.currency && <Text style={styles.error}>{errors.currency}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Transfer Description (Optional)"
        value={description}
        onChangeText={setDescription}
        maxLength={100}
      />
      {errors.description && <Text style={styles.error}>{errors.description}</Text>}

      <TextInput
        style={styles.input}
        placeholder="PIN"
        value={pin}
        onChangeText={setPin}
        keyboardType="numeric"
        secureTextEntry
        maxLength={4}
      />
      {errors.pin && <Text style={styles.error}>{errors.pin}</Text>}

      <Button title="Submit Transfer" onPress={handleSubmit} />
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

export default BankingScreen;