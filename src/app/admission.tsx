
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const AdmissionScreen = () => {
  const [studentName, setStudentName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [previousSchool, setPreviousSchool] = useState('');
  const [program, setProgram] = useState('');
  const [academicScore, setAcademicScore] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!studentName) {
      newErrors.studentName = 'Student Name is required';
    }
    if (!dob) {
      newErrors.dob = 'Date of Birth is required';
    }
    if (!gender) {
      newErrors.gender = 'Gender is required';
    }
    if (!nationality) {
      newErrors.nationality = 'Nationality is required';
    }
    if (email && !email.includes('@')) {
      newErrors.email = 'Email address is invalid';
    }
    if (!phone) {
      newErrors.phone = 'Phone Number is required';
    }
    if (!previousSchool) {
      newErrors.previousSchool = 'Previous School is required';
    }
    if (!program) {
      newErrors.program = 'Program is required';
    }
    const score = parseInt(academicScore, 10);
    if (isNaN(score) || score < 0 || score > 100) {
      newErrors.academicScore = 'Academic Score must be a number between 0 and 100';
    } else if (score < 50) {
      newErrors.academicScore = 'Academic Score must be at least 50 to proceed';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Admission</Text>

      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={studentName}
        onChangeText={setStudentName}
      />
      {errors.studentName && <Text style={styles.error}>{errors.studentName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dob}
        onChangeText={setDob}
      />
      {errors.dob && <Text style={styles.error}>{errors.dob}</Text>}

      {/* Replace with a Picker for Gender */}
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Nationality"
        value={nationality}
        onChangeText={setNationality}
      />
      {errors.nationality && <Text style={styles.error}>{errors.nationality}</Text>}

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
        placeholder="Previous School"
        value={previousSchool}
        onChangeText={setPreviousSchool}
      />
      {errors.previousSchool && <Text style={styles.error}>{errors.previousSchool}</Text>}

      {/* Replace with a Picker for Program */}
      <TextInput
        style={styles.input}
        placeholder="Program"
        value={program}
        onChangeText={setProgram}
      />
      {errors.program && <Text style={styles.error}>{errors.program}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Academic Score (0-100)"
        value={academicScore}
        onChangeText={setAcademicScore}
        keyboardType="numeric"
      />
      {errors.academicScore && <Text style={styles.error}>{errors.academicScore}</Text>}

      <Button title="Submit" onPress={handleSubmit} />
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

export default AdmissionScreen;