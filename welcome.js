let navbar = document.querySelector('.nav-bar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}



document.addEventListener("DOMContentLoaded", function() {
  const studentName = sessionStorage.getItem('studentName');
  if (studentName) {
      document.getElementById('studentName').innerText = `Hello, ${studentName}`;
  }

  const activities = JSON.parse(localStorage.getItem('extraActivities')) || [];
  const activityList = document.getElementById('activityList');
  activities.forEach(activity => {
      const li = document.createElement('li');
      li.innerText = `${activity.date} - ${activity.activity} (${activity.subject})`;
      activityList.appendChild(li);
  });

  if (activities.length > 0) {
      document.getElementById('extraActivities').style.display = 'block';
  }
});


  