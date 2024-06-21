//! Active Navbar Item

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});

//! Chart JS

const chartData = {
  labels: ["Happy", "Sad", "Angry", "Bored", "Tired"],
  data: [28, 13, 2, 19, 3],
};

const chart = document.getElementById("doughnut");
const eventList = document.querySelector(".chart ul");

new Chart(chart, {
  type: "doughnut",
  data: {
    labels: ["Happy", "Sad", "Angry", "Bored", "Tired"],
    datasets: [
      {
        label: "# of Events",
        data: [28, 13, 2, 19, 3],
        backgroundColor: ["#FFA500", "#008080", "#FF4500", "#1E90FF", "#800020"],
        offset: 10,
        hoverOffset: 8,
        hoverBorderColor: "#9a999b",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#8b8a96",
          font: {
            size: 12,
            weight: 600,
          },
        },
      },
    },
    layout: {
      padding: {
        bottom: 10,
      },
    },
  },
});

// goal
document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.goal-checkbox');
  const progressPercentage = document.getElementById('progress-percentage');

  function updateProgress() {
    const totalCheckboxes = checkboxes.length;
    const checkedCheckboxes = document.querySelectorAll('.goal-checkbox:checked').length;
    const percentage = Math.round((checkedCheckboxes / totalCheckboxes) * 100);
    progressPercentage.textContent = percentage + '%';
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
  });

  updateProgress();
});