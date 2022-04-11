import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    color:'red'
  },
  wrapper:{
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:80,
  },
  items: {
    marginTop: 30,
  },
  item:{
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft:{
    flexDirection: 'row',
  },
  icon:{
    paddingHorizontal:15
  },
  checkbox:{
   marginTop:-30
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#111',
    borderWidth: 1,
    width: 250
  },
  writeWrapper: {
    position: 'absolute',
    top: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#111',
    borderWidth: 1,
  }
});

export default styles 