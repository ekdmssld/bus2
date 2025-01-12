const busSchedule = {
  headers: ['버스 노선', '영남루', '밀양역', '부산대'],
  toSchool: {
    weekday: [
      {
        route: '용성 1번',
        yeongnamru: '06:14',
        station: '06:45',
        university: '06:57',
      },
      {
        route: '칠성',
        yeongnamru: '',
        station: '07:00',
        university: '07:12',
      },
      {
        route: '용성 2번',
        yeongnamru: '06:19',
        station: '07:20',
        university: '07:32',
      },
      {
        route: '칠성 1번',
        yeongnamru: '08:10',
        station: '08:20',
        university: '08:32',
      },
      {
        route: '부산대 2번',
        yeongnamru: '08:33',
        station: '08:45',
        university: '08:53',
      },
      {
        route: '부산대 1번',
        yeongnamru: '09:25',
        station: '09:35',
        university: '09:43',
      },
      {
        route: '용성 1번',
        yeongnamru: '10:15',
        station: '10:22',
        university: '10:32',
      },
      {
        route: '삼랑진 7번',
        yeongnamru: '',
        station: '11:26',
        university: '11:38',
      },
      {
        route: '삼랑진 7번',
        yeongnamru: '',
        station: '12:36',
        university: '12:48',
      },
      {
        route: '부산대 2번',
        yeongnamru: '13:29',
        station: '13:36',
        university: '13:48',
      },
      {
        route: '삼랑진 7번',
        yeongnamru: '',
        station: '14:26',
        university: '14:38',
      },
      {
        route: '부산대 2번',
        yeongnamru: '15:29',
        station: '15:40',
        university: '15:52',
      },
      {
        route: '칠성 2번',
        yeongnamru: '16:33',
        station: '16:42',
        university: '16:54',
      },
      {
        route: '용성 1번',
        yeongnamru: '17:15',
        station: '17:23',
        university: '17:35',
      },
      {
        route: '삼랑진 7번',
        yeongnamru: '롯데A30',
        station: '17:45',
        university: '17:57',
      },
      {
        route: '부산대 1번',
        yeongnamru: '17:57',
        station: '18:10',
        university: '18:22',
      },
      {
        route: '용성 6번',
        yeongnamru: '18:37',
        station: '18:45',
        university: '18:57',
      },
      {
        route: '칠성 6번',
        yeongnamru: '19:35',
        station: '19:44',
        university: '19:56',
      },
      {
        route: '칠성 1번',
        yeongnamru: '20:13',
        station: '20:22',
        university: '20:34',
      },
    ],
    holiday: [
      {
        route: '1번',
        yeongnamru: '',
        station: '07:00',
        university: '07:12',
      },
      {
        route: '1번',
        yeongnamru: '08:10',
        station: '08:20',
        university: '08:32',
      },
      {
        route: '2번',
        yeongnamru: '08:34',
        station: '08:45',
        university: '08:53',
      },
      {
        route: '1번',
        yeongnamru: '10:15',
        station: '10:22',
        university: '10:32',
      },
      {
        route: '7번',
        yeongnamru: '',
        station: '11:26',
        university: '11:38',
      },
      {
        route: '7번',
        yeongnamru: '',
        station: '12:36',
        university: '12:48',
      },
      {
        route: '2번',
        yeongnamru: '',
        station: '14:36',
        university: '14:48',
      },
      {
        route: '1번',
        yeongnamru: '15:19',
        station: '15:32',
        university: '15:44',
      },
      {
        route: '1번',
        yeongnamru: '16:29',
        station: '16:42',
        university: '16:54',
      },
      {
        route: '4-1번',
        yeongnamru: '17:06',
        station: '17:23',
        university: '17:35',
      },
      {
        route: '7번',
        yeongnamru: '',
        station: '17:45',
        university: '17:57',
      },
      {
        route: '1번',
        yeongnamru: '17:49',
        station: '18:06',
        university: '18:18',
      },
      {
        route: '1번',
        yeongnamru: '18:34',
        station: '18:45',
        university: '18:57',
      },
      {
        route: '6번',
        yeongnamru: '19:35',
        station: '19:44',
        university: '19:56',
      },
      {
        route: '2번',
        yeongnamru: '20:11',
        station: '20:24',
        university: '20:36',
      },
      {
        route: '1번',
        yeongnamru: '20:59',
        station: '21:20',
        university: '21:32',
      },
      {
        route: '2번',
        yeongnamru: '22:04',
        station: '22:18',
        university: '22:30',
      },
    ],
  },
  toStation: {
    headers: ['버스 노선', '부산대', '밀양역', '영남루'],
    weekday: [
      {
        route: '용성 7번',
        university: '07:02',
        station: '07:18',
        yeongnamru: '07:25',
      },
      {
        route: '칠성 2번',
        university: '07:20',
        station: '07:32',
        yeongnamru: '07:39',
      },
      {
        route: '용성 2번',
        university: '07:37',
        station: '07:56',
        yeongnamru: '08:03',
      },
      {
        route: '칠성 2번',
        university: '08:40',
        station: '08:52',
        yeongnamru: '08:59',
      },
      {
        route: '부산대 1번',
        university: '08:57',
        station: '09:12',
        yeongnamru: '09:19',
      },
      {
        route: '부산대 1번',
        university: '09:46',
        station: '10:00',
        yeongnamru: '10:07',
      },
      {
        route: '용성 2번',
        university: '10:38',
        station: '10:52',
        yeongnamru: '10:59',
      },
      {
        route: '삼랑진 1-2번',
        university: '12:18',
        station: '12:32',
        yeongnamru: '12:39',
      },
      {
        route: '삼랑진 1번',
        university: '13:28',
        station: '13:44',
        yeongnamru: '13:51',
      },
      {
        route: '부산대 1번',
        university: '13:50',
        station: '14:00',
        yeongnamru: '14:07',
      },
      {
        route: '삼랑진 1번',
        university: '15:28',
        station: '15:44',
        yeongnamru: '15:51',
      },
      {
        route: '부산대 1번',
        university: '15:52',
        station: '16:00',
        yeongnamru: '16:07',
      },
      {
        route: '칠성 2번',
        university: '17:02',
        station: '17:16',
        yeongnamru: '17:23',
      },
      {
        route: '용성 2번',
        university: '17:42',
        station: '17:56',
        yeongnamru: '18:03',
      },
      {
        route: '삼랑진 2번',
        university: '18:42',
        station: '19:00',
        yeongnamru: '19:07',
      },
      {
        route: '부산대 7-1번',
        university: '18:22',
        station: '18:32',
        yeongnamru: '18:39',
      },
      {
        route: '용성 7-1번',
        university: '19:08',
        station: '19:24',
        yeongnamru: '19:31',
      },
      {
        route: '칠성 2번',
        university: '20:04',
        station: '20:18',
        yeongnamru: '20:25',
      },
      {
        route: '칠성 2번',
        university: '22:44',
        station: '23:00',
        yeongnamru: '23:07',
      },
    ],
    holiday: [
      { route: '2번', school: '7:20', station: '7:35', yeongnamru: '7:42' },
      { route: '1번', school: '8:40', station: '9:05', yeongnamru: '9:12' },
      { route: '1번', school: '8:53', station: '9:10', yeongnamru: '9:17' },
      { route: '2번', school: '10:38', station: '10:55', yeongnamru: '11:02' },
      { route: '1번', school: '12:18', station: '12:40', yeongnamru: '12:47' },
      { route: '2번', school: '13:28', station: '13:45', yeongnamru: '13:52' },
      { route: '2번', school: '15:28', station: '15:45', yeongnamru: '15:52' },
      { route: '1번', school: '15:44', station: '16:00', yeongnamru: '16:07' },
      { route: '2번', school: '17:02', station: '17:15', yeongnamru: '17:22' },
      { route: '2번', school: '17:40', station: '18:00', yeongnamru: '18:07' },
      {
        route: '1-2번',
        school: '18:18',
        station: '18:30',
        yeongnamru: '18:37',
      },
      { route: '2번', school: '18:40', station: '19:00', yeongnamru: '19:07' },
      {
        route: '7-1번',
        school: '19:02',
        station: '19:24',
        yeongnamru: '19:31',
      },
      { route: '1번', school: '20:04', station: '20:18', yeongnamru: '20:25' },
      {
        route: '4-2번',
        school: '20:36',
        station: '20:54',
        yeongnamru: '21:01',
      },
      { route: '1번', school: '21:32', station: '21:44', yeongnamru: '21:51' },
      { route: '1번', school: '22:38', station: '22:50', yeongnamru: '22:57' },
    ],
  },
};

function updateScheduleDisplay(currentDirection, currentTab) {
  const scheduleData = busSchedule[currentDirection];
  if (!scheduleData) {
    console.error(`no schedule data found for direction: ${direction}`);
    return;
  }

  const data = scheduleData[currentTab];
  if (!data) {
    console.error(`no schedule data found for ${currentTab}`);
    return;
  }

  const container = document.getElementById(currentTab);
  if (!container) {
    console.error(`container not found for ${currentTab}`);
    return;
  }

  const schedules = scheduleData[currentTab];
  if (!schedules) {
    console.error(`no schedule data found for ${currentDirection}`);
  }

  const headers =
    currentDirection === 'toSchool'
      ? busSchedule.headers
      : busSchedule.toStation.headers;

  let html = `
      <table class="schedule-table">
          <thead>
              <tr>
                  ${headers.map((header) => `<th>${header}</th>`).join('')}
              </tr>
          </thead>
          <tbody>
              ${data
                .map(
                  (schedule) => `
                  <tr>
                      <td>${schedule.route}</td>
                      ${
                        currentDirection === 'toSchool'
                          ? `
                          <td>${schedule.yeongnamru}</td>
                          <td>${schedule.station}</td>
                          <td>${schedule.university}</td>
                      `
                          : `
                          <td>${schedule.university}</td>
                          <td>${schedule.station}</td>
                          <td>${schedule.yeongnamru}</td>
                      `
                      }
                  </tr>
              `
                )
                .join('')}
          </tbody>
      </table>
  `;
  container.innerHTML = html;
}
