const { DateTime } = require('luxon')

export function formatISODate(isoDate) {
  return DateTime.fromISO(isoDate, { locale: 'ru' }).toFormat('LLLL yyyy')
}
