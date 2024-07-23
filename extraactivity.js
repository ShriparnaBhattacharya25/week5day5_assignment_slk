document.addEventListener("DOMContentLoaded", function() {
    const studentName = sessionStorage.getItem('studentName');
    if (studentName) {
        document.getElementById('studentName').innerText = `Hello, ${studentName}`;
    }
});

function submit() {
    const date = document.getElementById('activityDate').value;
    const activity = document.getElementById('activity').value;
    const subject = document.getElementById('subject').value;

    if (date && activity && subject) {
        let activities = JSON.parse(localStorage.getItem('extraActivities')) || [];
        
        activities.push({
            id: activities.length + 1,
            date: date,
            activity: activity,
            subject: subject
        });

        localStorage.setItem('extraActivities', JSON.stringify(activities));

        alert("Activity submitted successfully!");

        window.location.href = "welcome.html";
    } 
    else {
        alert("Please fill in all fields.");
    }
}