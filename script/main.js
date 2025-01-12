document.addEventListener('DOMContentLoaded', () => {
  const toSchoolBtn = document.getElementById('toSchoolBtn');
  const toStationBtn = document.getElementById('toStationBtn');
  const scheduleContainer = document.getElementById('scheduleContainer');
  const tabs = document.querySelectorAll('.tab-button');
  const scheduleSections = document.querySelectorAll('.schedule-section');
  const weekdaySchedule = document.getElementById('weekdaySchedule');
  const holidaySchedule = document.getElementById('holidaySchedule');

  let currentData;

  // 버튼 클릭 이벤트
  toSchoolBtn.addEventListener('click', () => {
    currentData = busSchedule.toSchool;
    loadSchedule();
  });

  toStationBtn.addEventListener('click', () => {
    currentData = busSchedule.toStation;
    loadSchedule();
  });

  // 평일/주말 탭 클릭 이벤트
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-tab');
      scheduleSections.forEach((section) => {
        section.style.display = section.id === target ? 'block' : 'none';
      });
    });
  });

  function loadSchedule() {
    if (!currentData) return;

    // 탭과 시간표 표시
    document.querySelector('.tabs').style.display = 'flex';
    scheduleContainer.style.display = 'block';

    // 시간표 렌더링
    renderTable(currentData.weekday, weekdaySchedule);
    renderTable(currentData.holiday, holidaySchedule);

    // 기본 탭 설정
    scheduleSections.forEach((section) => {
      section.style.display = section.id === 'weekday' ? 'block' : 'none';
    });
  }

  function renderTable(data, container) {
    const rows = data
      .map(
        (item) => `
          <tr>
            <td>${item.route}</td>
            <td>${item.yeongnamru || '-'}</td>
            <td>${item.station || '-'}</td>
            <td>${item.university || '-'}</td>
          </tr>`
      )
      .join('');
    container.innerHTML = rows;
  }
});
