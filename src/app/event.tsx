src/app/checkout.tsx
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const EventRegistrationScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [attendanceType, setAttendanceType] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [dietaryRequirement, setDietaryRequirement] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!email || !email.includes('@')) {
      newErrors.email = 'A valid Email is required';
    }
    if (!phone) {
      newErrors.phone = 'Phone Number is required';
    }
    if (!organization) {
      newErrors.organization = 'Organization is required';
    }
    if (!jobTitle) {
      newErrors.jobTitle = 'Job Title is required';
    }
    if (!attendanceType) {
      newErrors.attendanceType = 'Attendance Type is required';
    }
    const days = parseInt(numberOfDays, 10);
    if (isNaN(days) || days < 1 || days > 3) {
      newErrors.numberOfDays = 'Number of Days must be between 1 and 3';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Registration Summary</Text>
        <Text>Name: {fullName}</Text>
        <Text>Organization: {organization}</Text>
        <Text>Attendance: {attendanceType}</Text>
        <Text>Days: {numberOfDays}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      {errors.fullName && <Text style={styles.error}>{errors.fullName}</Text>}

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
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Organization"
        value={organization}
        onChangeText={setOrganization}
      />
      {errors.organization && <Text style={styles.error}>{errors.organization}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Job Title"
        value={jobTitle}
        onChangeText={setJobTitle}
      />
      {errors.jobTitle && <Text style={styles.error}>{errors.jobTitle}</Text>}

      {/* Replace with a Picker for Attendance Type */}
      <TextInput
        style={styles.input}
        placeholder="Attendance Type"
        value={attendanceType}
        onChangeText={setAttendanceType}
      />
      {errors.attendanceType && <Text style={styles.error}>{errors.attendanceType}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Number of Days (1-3)"
        value={numberOfDays}
        onChangeText={setNumberOfDays}
        keyboardType="numeric"
      />
      {errors.numberOfDays && <Text style={styles.error}>{errors.numberOfDays}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Dietary Requirement (Optional)"
        value={dietaryRequirement}
        onChangeText={setDietaryRequirement}
      />

      <Button title="Register" onPress={handleSubmit} />
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

export default EventRegistrationScreen;