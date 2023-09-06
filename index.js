import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

let scheduledTime = [
  '9:18',
  '9:24',
  '9:30',
  '9:36',
  '9:42',
  '9:48',
  '9:54',
  '10:00',
  '10:06',
  '10:30',
  '10:36',
  '10:42',
  '10:48',
  '10:54',
  '10:59',
  '11:06',
  '11:15', '11:24',
  '11:33',
  '11:42',
  '11:51',
  '12:00',
  '12:09',
  '12:18',
  '12:27',
  '12:36',
  '12:45',
  '12:54',
  '13:03',
  '13:12',
  '13:21',
  '13:30',
  '13:39',
  '13:48',
  '13:57',
  '14:06', '14:15', '14:24', '14:33', '14:42', '14:51', '15:00', '15:09', '15:18', '15:27',
  '15:36', '15:45', '15:54', '16:03', '16:12', '16:39', '16:48', '17:06', '17:15', '17:24',
  '17:42', '17:51', '17:58', '18:05', '18:12', '18:19', '18:26', '18:33', '18:40', '18:47',
  '18:54', '19:01', '19:08', '19:15', '19:22', '19:29', '19:36', '19:43', '19:50', '19:57',
  '20:32', '20:39', '20:48', '20:57', '21:06', '21:16', '21:26', '21:37', '21:47', '21:58',
  '22:09', '22:20', '22:31', '22:41', '23:00', '23:14', '23:27', '23:43'
  ]
  
  let timeNowHours = new Date().getHours()
  let timeNowMinutes = new Date().getMinutes()
  let resultNext = []
  let resultPrev = []
  let nextHour = []
  
  scheduledTime.forEach(route => {
      if (timeNowHours == route.split(':')[0]) {
          if (timeNowMinutes - route.split(':')[1] < 0 ) {
              resultNext.push(timeNowMinutes - route.split(':')[1])
          }else {
              resultPrev.push(timeNowMinutes - route.split(':')[1])
          }
      }
  })
  
  resultNext.sort((a, b) => {
      return b - a
  })
  
  console.log(resultNext)
  console.log(resultPrev)
  
  if (resultNext[0] > 0) {
      scheduledTime.forEach(route => {
          if (timeNowHours + 1 == route.split(':')[0]) {
              nextHour.push(60 - (+timeNowMinutes) + (+route.split(':')[1]))
          }
      })
      
  }else {
      console.log('Next train in: ' + resultNext[0] * - 1 + ' mins')
  }