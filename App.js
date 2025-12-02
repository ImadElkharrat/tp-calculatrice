import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';

export default function App() {
  const [nb1, setNb1] = useState('');
  const [nb2, setNb2] = useState('');
  const [operateur, setOperateur] = useState(null);
  const [resultat, setResultat] = useState('');

  const handleCalculer = () => {
    if (!nb1 || !nb2 || !operateur) {
      Alert.alert("Erreur", "Veuillez remplir les deux champs et choisir une opération.");
      return;
    }

    const n1 = parseFloat(nb1);
    const n2 = parseFloat(nb2);
    let res = 0;

    switch (operateur) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      default:
        return;
    }

    setResultat("Résultat : " + res);
    Keyboard.dismiss();
  };

  const handleClear = () => {
    setNb1('');
    setNb2('');
    setOperateur(null);
    setResultat('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TP Calculatrice</Text>

      <TextInput
        style={styles.input}
        placeholder="Entrez le nombre 1"
        keyboardType="numeric"
        value={nb1}
        onChangeText={setNb1}
      />
      <TextInput
        style={styles.input}
        placeholder="Entrez le nombre 2"
        keyboardType="numeric"
        value={nb2}
        onChangeText={setNb2}
      />

      <View style={styles.row}>
        {['+', '-', '*'].map((op) => (
          <TouchableOpacity
            key={op}
            style={[
              styles.btnOperateur, 
              operateur === op && styles.btnOperateurSelected
            ]}
            onPress={() => setOperateur(op)}
          >
            <Text style={[
              styles.btnText, 
              operateur === op && styles.btnTextSelected
            ]}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.btnCalculer} onPress={handleCalculer}>
        <Text style={styles.btnTextWhite}>Calculer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnClear} onPress={handleClear}>
        <Text style={styles.btnTextWhite}>Clear</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{resultat}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  btnOperateur: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnOperateurSelected: {
    backgroundColor: '#6200ee',
  },
  btnCalculer: {
    width: '100%',
    backgroundColor: '#03dac6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  btnClear: {
    width: '100%',
    backgroundColor: '#b00020',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  btnTextSelected: {
    color: '#fff',
  },
  btnTextWhite: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  resultContainer: {
    marginTop: 10,
    padding: 10,
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});