import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#a6c392',
  },
  activeTask: {
    backgroundColor: '#6da34d', // Açık yeşil (tamamlanmamış görev)
  },
  completedTask: {
    backgroundColor: '#2f3e46', // Koyu gri (tamamlanmış görev)
  },
  todos: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  completedText: {
    textDecorationLine: 'line-through', // Üstü çizili yap
    color: '#a9a9a9', // Gri ton
  },
});
