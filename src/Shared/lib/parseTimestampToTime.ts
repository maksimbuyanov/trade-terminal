export const parseTimestampToTime = (timestamp: number): string => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const Hour = hour < 10 ? `0${hour}` : hour
  const minute = date.getMinutes()
  const min = minute < 10 ? `0${minute}` : minute
  const seconds = date.getSeconds()
  const sec = seconds < 10 ? `0${seconds}` : seconds
  return `${Hour}:${min}:${sec}`
}
