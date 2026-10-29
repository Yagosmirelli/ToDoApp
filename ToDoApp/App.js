import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';

export default function App() {
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefaAtual.trim() !== '') {
      setListaTarefas([...listaTarefas, tarefaAtual]);
      setTarefaAtual('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      {/* Cabeçalho com Contador Corrigido */}
      <View style={styles.header}>
        <Text style={styles.title}>Anotações</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{listaTarefas.length} criadas</Text>
        </View>
      </View>

      {/* Cards de Cores / Categorias */}
      <View style={styles.colorPalette}>
        <View style={[styles.colorCard, styles.redCard]} />
        <View style={[styles.colorCard, styles.greenCard]} />
        <View style={[styles.colorCard, styles.blueCard]} />
      </View>

      {/* Input + Botão */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite a anotação..."
          placeholderTextColor="#94A3B8"
          style={styles.input}
          value={tarefaAtual}
          onChangeText={setTarefaAtual}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.addButton}
          onPress={adicionarTarefa}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Tarefas Renderizada Fora do inputContainer */}
      <ScrollView style={styles.listaContainer} showsVerticalScrollIndicator={false}>
        {listaTarefas.map((tarefa, index) => (
          <View key={index} style={styles.tarefaCard}>
            <Text style={styles.tarefaText}>{tarefa}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 8,
  },
  badge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: '#4F46E5',
    fontWeight: '700',
    fontSize: 13,
  },
  colorPalette: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  colorCard: {
    flex: 1,
    height: 70,
    borderRadius: 16,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  redCard: {
    backgroundColor: '#FF6B6B',
  },
  greenCard: {
    backgroundColor: '#10B981',
  },
  blueCard: {
    backgroundColor: '#3B82F6',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 18,
    fontSize: 15,
    color: '#1E293B',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  addButton: {
    width: 56,
    height: 56,
    backgroundColor: '#4F46E5',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '500',
  },
  listaContainer: {
    flex: 1,
    width: '100%',
  },
  tarefaCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tarefaText: {
    fontSize: 15,
    color: '#1E293B',
  },
});