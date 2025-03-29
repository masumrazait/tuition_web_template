// Topper data structure
const toppersData = {
    "2023": [
        {
            photo: "images/toppers/2023/topper1.jpg",
            rollNo: "EC2023125",
            name: "Aarav Sharma",
            score: "99.5%",
            rank: 1,
            story: "Aarav joined ExcelEd in Class 11 and showed consistent improvement. His dedication to solving problems and attending doubt sessions helped him secure the top position in CBSE with 99.5% marks. He credits the faculty's personalized approach for his success."
        },
        {
            photo: "images/toppers/2023/topper2.jpg",
            rollNo: "EC2023126",
            name: "Priya Patel",
            score: "99.2%",
            rank: 2,
            story: "Priya was strong in Science but struggled with time management. Through ExcelEd's test series and time management workshops, she improved significantly and secured 99.2% in her boards along with a perfect score in Mathematics."
        },
        {
            photo: "images/toppers/2023/topper3.jpg",
            rollNo: "EC2023127",
            name: "Rohan Verma",
            score: "98.8%",
            rank: 3,
            story: "Rohan's journey from scoring 75% in Class 10 to 98.8% in Class 12 is inspirational. He utilized ExcelEd's comprehensive study material and regular assessments to identify and work on his weak areas systematically."
        }
    ],
    "2022": [
        {
            photo: "images/toppers/2022/topper1.jpg",
            rollNo: "EC2022123",
            name: "Neha Gupta",
            score: "99.3%",
            rank: 1,
            story: "Neha was our all-rounder topper who excelled in both academics and extracurriculars. She attributes her success to ExcelEd's flexible scheduling that allowed her to balance her studies with her passion for debate competitions."
        },
        {
            photo: "images/toppers/2022/topper2.jpg",
            rollNo: "EC2022124",
            name: "Karan Singh",
            score: "98.9%",
            rank: 2,
            story: "Karan joined ExcelEd specifically to improve his Physics scores. With the help of our specialized Physics faculty and customized study plan, he not only improved in Physics but became one of our top performers across all subjects."
        }
    ],
    "2021": [
        {
            photo: "images/toppers/2021/topper1.jpg",
            rollNo: "EC2021121",
            name: "Ananya Joshi",
            score: "98.6%",
            rank: 1,
            story: "Ananya was our first student to score full marks in Chemistry. She says ExcelEd's practical approach to teaching complex chemical concepts made all the difference in her understanding and retention."
        },
        {
            photo: "images/toppers/2021/topper2.jpg",
            rollNo: "EC2021122",
            name: "Vikram Mehta",
            score: "98.2%",
            rank: 2,
            story: "Vikram struggled with exam anxiety. Through ExcelEd's mock exam series and stress management sessions, he overcame his fears and performed exceptionally well in his final exams."
        }
    ],
    "2020": [
        {
            photo: "images/toppers/2020/topper1.jpg",
            rollNo: "EC2020120",
            name: "Ishaan Reddy",
            score: "97.8%",
            rank: 1,
            story: "Ishaan was part of ExcelEd's first batch. His success in the challenging pandemic year demonstrated the effectiveness of our online learning platform and adaptive teaching methodology."
        }
    ]
};

// Initialize the page with default year (most recent)
document.addEventListener('DOMContentLoaded', function() {
    const years = Object.keys(toppersData).sort((a, b) => b - a);
    const defaultYear = years[0];
    
    // Generate year buttons
    const yearSelector = document.querySelector('.year-selector');
    years.forEach(year => {
        const button = document.createElement('button');
        button.className = 'year-button';
        if (year === defaultYear) button.classList.add('active');
        button.textContent = year;
        button.dataset.year = year;
        yearSelector.appendChild(button);
    });
    
    // Load initial data
    loadTopperData(defaultYear);
    
    // Set up year button event listeners
    document.querySelectorAll('.year-button').forEach(button => {
        button.addEventListener('click', function() {
            const selectedYear = this.dataset.year;
            
            // Update active state
            document.querySelectorAll('.year-button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Load new data
            loadTopperData(selectedYear);
        });
    });
    
    // Modal functionality
    const modal = document.getElementById('storyModal');
    const closeButton = document.querySelector('.close-button');
    
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Function to load topper data for a specific year
function loadTopperData(year) {
    const toppers = toppersData[year];
    const tbody = document.getElementById('topper-data');
    
    // Clear existing rows
    tbody.innerHTML = '';
    
    // Add new rows
    toppers.forEach(topper => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><img src="${topper.photo}" alt="${topper.name}" class="topper-photo"></td>
            <td>${topper.rollNo}</td>
            <td>${topper.name}</td>
            <td>${topper.score}</td>
            <td>${topper.rank}</td>
            <td><button class="story-button" data-name="${topper.name}" data-story="${topper.story}">Read Story</button></td>
        `;
        
        tbody.appendChild(row);
    });
    
    // Set up story button event listeners
    document.querySelectorAll('.story-button').forEach(button => {
        button.addEventListener('click', function() {
            const modal = document.getElementById('storyModal');
            const modalTitle = document.getElementById('modal-title');
            const modalStory = document.getElementById('modal-story');
            
            modalTitle.textContent = `${this.dataset.name}'s Success Story`;
            modalStory.textContent = this.dataset.story;
            modal.style.display = 'block';
        });
    });
    
}