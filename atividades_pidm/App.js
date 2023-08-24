import { StyleSheet, Text, View } from 'react-native';

import Questao01 from './components/atividade01/Questao01';
// import Questao03 from './components/atividade01/Questao03';

export default function App() {
  return (
    <View style={estilos.container}>
      <Questao01/>
    </View>
  );
}

// export default function App() {
//   return (
//     <View style={estilos.container}>
//       <Questao03 cor= 'blue'/>
//     </View>
//   );
// }

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});