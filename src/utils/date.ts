import dayjs from "dayjs"

export const parseDate = (tanggal: number) => {
  return dayjs(tanggal).format('DD-MM-YYYY').toString() === '01-01-1970' ?
  'N/A' : dayjs(tanggal).format('DD-MM-YYYY')
}