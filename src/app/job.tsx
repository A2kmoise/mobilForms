
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const JobApplicationScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [cv, setCv] = useState(null);
  const [errors, setErrors] = useState({});

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
    if (!position) {
      newErrors.position = 'Position is required';
    }
    if (!education) {
      newErrors.education = 'Education Level is required';
    }
    const years = parseInt(experience, 10);
    if (isNaN(years) || years < 0) {
      newErrors.experience = 'Years of Experience must be a non-negative number';
    }
    if (coverLetter.length < 50) {
      newErrors.coverLetter = 'Cover Letter must be at least 50 characters';
    }
    if (!cv) {
      newErrors.cv = 'CV is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Application submitted successfully');
    }
  };

  // A simple placeholder for a file picker
  const handleChooseCv = () => {
    setCv({ name: 'cv.pdf' }); // Mock file object
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Application</Text>

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
        placeholder="Position"
        value={position}
        onChangeText={setPosition}
      />
      {errors.position && <Text style={styles.error}>{errors.position}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Education Level"
        value={education}
        onChangeText={setEducation}
      />
      {errors.education && <Text style={styles.error}>{errors.education}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Years of Experience"
        value={experience}
        onChangeText={setExperience}
        keyboardType="numeric"
      />
      {errors.experience && <Text style={styles.error}>{errors.experience}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Cover Letter (min 50 chars)"
        value={coverLetter}
        onChangeText={setCoverLetter}
        multiline
      />
      {errors.coverLetter && <Text style={styles.error}>{errors.coverLetter}</Text>}

      <View style={styles.cvContainer}>
        <Button title="Choose CV" onPress={handleChooseCv} />
        {cv && <Text style={styles.cvName}>{cv.name}</Text>}
      </View>
      {errors.cv && <Text style={styles.error}>{errors.cv}</Text>}

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
  cvContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cvName: {
    marginLeft: 10,
  },
});

export default JobApplicationScreen;