function renderSchedule(direction) {
  console.log(`Rendering schedule for: ${direction}`);

  const container = document.getElementById('scheduleContainer');
  const scheduleData = busSchedule[direction];
  if (!scheduleData) {
    console.error(`No schedule data found for ${direction}`);
    return;
  }

  renderTable(scheduleData.weekday, document.getElementById('weekdaySchedule'));
  renderTable(scheduleData.holiday, document.getElementById('holidaySchedule'));
}
document.addEventListener('DOMContentLoaded', () => {
  const weekdaySchedule = document.getElementById('weekdaySchedule');
  const holidaySchedule = document.getElementById('holidaySchedule');

  if (!weekdaySchedule || !holidaySchedule) {
    console.error('Element not found');
    return;
  }

  const pageType = document.querySelector('title').innerText.includes('학교로')
    ? 'toSchool'
    : 'toStation';
  const scheduleData = busSchedule[pageType];

  if (!scheduleData) {
    console.error('No Schedule Data found for ${pageType}');
    return;
  }

  renderTable(scheduleData.weekday, weekdaySchedule);
  renderTable(scheduleData.holiday, holidaySchedule);

  const tabs = document.querySelectorAll('.tab-button');
  let currentDirection = 'toSchool';
  let currentTab = 'weekday';
  const scheduleSections = document.querySelectorAll('.schedule-section');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.getAttribute('data-tab');
      updateScheduleDisplay(currentDirection, currentTab);

      const target = tab.getAttribute('data-tab');
      scheduleSections.forEach((section) => {
        section.style.display = section.id === target ? 'block' : 'none';
      });
    });

    updateScheduleDisplay(currentDirection, currentTab);
  });

  function renderTable(data, container) {
    if (!data || !container) {
      console.error('Data or container is missing');
      container.innerHTML = '<p>운행하는 버스가 없습니다.</p>';
      return;
    }

    const rows = data
      .map((item) => {
        if (direction === 'toSchool') {
          return `
              <tr>
                <td>${item.route}</td>
                <td>${item.yeongnamru || '-'}</td>
                <td>${item.station || '-'}</td>
                <td>${item.university || '-'}</td>
              </tr>`;
        } else if (direction === 'toStation') {
          return `
              <tr>
                <td>${item.route}</td>
                <td>${item.university || '-'}</td>
                <td>${item.station || '-'}</td>
                <td>${item.yeongnamru || '-'}</td>
              </tr>`;
        }
      })
      .join('');
    container.innerHTML = rows;
  }
});
