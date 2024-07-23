const activities = [
    { id: 1, activity: "Create project file which contains tables between 12 to 19", subject: "Math" },
    { id: 2, activity: "create an advertising campaign to sell a product.The product can be real or imaginary.", subject: "English" },
    { id: 3, activity: "Build a Circuit to Automatically Water Your Plants", subject: "Science" },
];

function displayActivities(){
    const container = document.getElementById('activity');
    container.innerHTML = '<h2>Activities for this Month</h2>';
    activities.forEach(activity => {
        const div = document.createElement('div');
        div.innerHTML = `<p><strong>Activity:</strong> ${activity.activity}</p><p><strong>Subject:</strong> ${activity.subject}</p>`;
        container.appendChild(div);
    });
}

if (document.getElementById('activity')) {
    displayActivities();
}