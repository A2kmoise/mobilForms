
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const AppointmentScreen = () => {
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [reasonForVisit, setReasonForVisit] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!patientName) {
      newErrors.patientName = 'Patient Name is required';
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    }
    if (email && !email.includes('@')) {
      newErrors.email = 'Email address is invalid';
    }
    if (!department) {
      newErrors.department = 'Department is required';
    }
    if (!doctor) {
      newErrors.doctor = 'Doctor is required';
    }
    if (!appointmentDate) {
      newErrors.appointmentDate = 'Appointment Date is required';
    } else {
      const today = new Date();
      const selectedDate = new Date(appointmentDate);
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.appointmentDate = 'Appointment date cannot be in the past';
      }
    }
    if (!appointmentTime) {
      newErrors.appointmentTime = 'Appointment Time is required';
    }
    if (reasonForVisit.length < 10) {
      newErrors.reasonForVisit = 'Reason for Visit must be at least 10 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Appointment booked successfully');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hospital Appointment</Text>

      <TextInput
        style={styles.input}
        placeholder="Patient Name"
        value={patientName}
        onChangeText={setPatientName}
      />
      {errors.patientName && <Text style={styles.error}>{errors.patientName}</Text>}

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
        placeholder="Email (Optional)"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      {/* Replace with a Picker for Department */}
      <TextInput
        style={styles.input}
        placeholder="Department"
        value={department}
        onChangeText={setDepartment}
      />
      {errors.department && <Text style={styles.error}>{errors.department}</Text>}

      {/* Replace with a Picker for Doctor */}
      <TextInput
        style={styles.input}
        placeholder="Doctor"
        value={doctor}
        onChangeText={setDoctor}
      />
      {errors.doctor && <Text style={styles.error}>{errors.doctor}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Appointment Date (YYYY-MM-DD)"
        value={appointmentDate}
        onChangeText={setAppointmentDate}
      />
      {errors.appointmentDate && <Text style={styles.error}>{errors.appointmentDate}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Appointment Time"
        value={appointmentTime}
        onChangeText={setAppointmentTime}
      />
      {errors.appointmentTime && <Text style={styles.error}>{errors.appointmentTime}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Reason for Visit"
        value={reasonForVisit}
        onChangeText={setReasonForVisit}
        multiline
      />
      {errors.reasonForVisit && <Text style={styles.error}>{errors.reasonForVisit}</Text>}

      <Button title="Book Appointment" onPress={handleSubmit} />
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

export default AppointmentScreen;