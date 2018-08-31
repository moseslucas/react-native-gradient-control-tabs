import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'center'
  },
  tab: {
    borderColor: '#cccccc',
    borderWidth: 1,
    alignItems: 'center'
  },
  tabTitle: {
    fontSize: 15,
    padding: 15
  },
  activeTabTitle: {
    fontSize: 15,
    padding: 15,
    color: '#393838',
    fontFamily: 'GothamRoundedMedium'
  },
  firstTab: {
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    borderRightWidth: 0
  },
  middleTab: {
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  lastTab: {
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderLeftWidth: 0
  }
})

export default styles
