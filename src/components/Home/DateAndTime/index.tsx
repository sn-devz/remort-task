import React from 'react'
import { Text } from 'react-native'
import { useFetchData } from '@hooks/useFetchData'
import { styles } from '@components/Home/DateAndTime/style'

const DateAndTime = () => {
  const {data:{date = '', time = ''}} = useFetchData()
  return <Text style={styles.textStyle}>{date} . {time}</Text>
}

export default DateAndTime