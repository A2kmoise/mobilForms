
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const RentalApplicationScreen = () => {
  const [applicantName, setApplicantName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const monthlyRent = 500; // Example rent

    if (!applicantName) {
      newErrors.applicantName = 'Applicant Name is required';
    }
    if (!phone) {
      newErrors.phone = 'Phone Number is required';
    }
    if (!email || !email.includes('@')) {
      newErrors.email = 'A valid Email is required';
    }
    if (!propertyType) {
      newErrors.propertyType = 'Property Type is required';
    }
    const numBedrooms = parseInt(bedrooms, 10);
    if (isNaN(numBedrooms) || numBedrooms <= 0) {
      newErrors.bedrooms = 'Number of Bedrooms must be greater than 0';
    }
    const income = parseFloat(monthlyIncome);
    if (isNaN(income) || income <= 0) {
      newErrors.monthlyIncome = 'Monthly Income must be greater than 0';
    } else if (income < 3 * monthlyRent) {
      newErrors.monthlyIncome = `Monthly Income must be at least 3 times the monthly rent ($${3 * monthlyRent})`;
    }
    if (!preferredLocation) {
      newErrors.preferredLocation = 'Preferred Location is required';
    }
    if (!moveInDate) {
      newErrors.moveInDate = 'Move-in Date is required';
    }
    if (!employmentStatus) {
      newErrors.employmentStatus = 'Employment Status is required';
    }
    if (additionalInfo.length > 250) {
      newErrors.additionalInfo = 'Additional Information cannot exceed 250 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Rental application submitted successfully');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Property Rental Application</Text>

      <TextInput
        style={styles.input}
        placeholder="Applicant Name"
        value={applicantName}
        onChangeText={setApplicantName}
      />
      {errors.applicantName && <Text style={styles.error}>{errors.applicantName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

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
        placeholder="Property Type"
        value={propertyType}
        onChangeText={setPropertyType}
      />
      {errors.propertyType && <Text style={styles.error}>{errors.propertyType}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Number of Bedrooms"
        value={bedrooms}
        onChangeText={setBedrooms}
        keyboardType="numeric"
      />
      {errors.bedrooms && <Text style={styles.error}>{errors.bedrooms}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Monthly Income"
        value={monthlyIncome}
        onChangeText={setMonthlyIncome}
        keyboardType="numeric"
      />
      {errors.monthlyIncome && <Text style={styles.error}>{errors.monthlyIncome}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Preferred Location"
        value={preferredLocation}
        onChangeText={setPreferredLocation}
      />
      {errors.preferredLocation && <Text style={styles.error}>{errors.preferredLocation}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Move-in Date (YYYY-MM-DD)"
        value={moveInDate}
        onChangeText={setMoveInDate}
      />
      {errors.moveInDate && <Text style={styles.error}>{errors.moveInDate}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Employment Status"
        value={employmentStatus}
        onChangeText={setEmploymentStatus}
      />
      {errors.employmentStatus && <Text style={styles.error}>{errors.employmentStatus}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Additional Information (Optional)"
        value={additionalInfo}
        onChangeText={setAdditionalInfo}
        maxLength={250}
        multiline
      />
      {errors.additionalInfo && <Text style={styles.error}>{errors.additionalInfo}</Text>}

      <Button title="Submit Application" onPress={handleSubmit} />
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

export default RentalApplicationScreen;