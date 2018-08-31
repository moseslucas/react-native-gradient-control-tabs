import React from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const GradientControlTabs = ({
  activeTabIndex,
  activeTabGradient,
  activeTabFontStyle,
  handleTabChange,
  tabs,
  tabGradient,
  tabFontStyle
}) => {
  const defaultTabGradient = ['#fff', '#e6e7e7', '#fff']
  const defaultActiveTabGradient = ['#d9e8f2', '#b9cde0', '#d9e8f2']
  const tabStateStyle = (i) => {
    if (i === 0) {
      return styles.firstTab
    } else if (i === (tabs.length - 1)) {
      return styles.lastTab
    } else {
      return styles.middleTab
    }
  }

  return (
    <View style={styles.tabContainer}>
      {
        tabs.map((tab, i) => {
          return (
            <TouchableNativeFeedback
              onPress={() => handleTabChange(i)}
              key={i}
            >
              <LinearGradient
                colors={activeTabIndex === i
                  ? (activeTabGradient || defaultActiveTabGradient)
                  : (tabGradient || defaultTabGradient)
                }
                style={[styles.tab, tabStateStyle(i)]}
              >
                <Text style={
                  activeTabIndex === i
                    ? (styles.activeTabFontStyle || styles.activeTabTitle)
                    : (styles.tabFontStyle || styles.tabTitle)
                }>
                  {tab}
                </Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          )
        })
      }
    </View>
  )
}

export default GradientControlTabs
