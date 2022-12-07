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
export const parseTimestampToFullDate = (timestamp: number): string => {
  const str = new Date(timestamp)
  const year = str.getFullYear().toString().slice(-2)
  const monthPrev = str.getMonth() + 1
  const month = monthPrev < 10 ? `0${monthPrev}` : monthPrev
  const day = str.getDate()
  const hour = str.getHours()
  const Hour = hour < 10 ? `0${hour}` : hour
  const minute = str.getMinutes()
  const min = minute < 10 ? `0${minute}` : minute
  const seconds = str.getSeconds()
  const sec = seconds < 10 ? `0${seconds}` : seconds
  return `${day}.${month}.${year} ${Hour}:${min}:${sec}`
}
