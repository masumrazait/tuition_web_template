// Course data structure
const coursesData = [
    {
        id: 1,
        title: "Class 11-12 Science (PCMB)",
        description: "Comprehensive coverage of Physics, Chemistry, Mathematics, and Biology with practical applications.",
        category: "science",
        duration: "1 Year Program",
        grade: "Grade 11-12",
        fee: "₹25,000/year",
        isPopular: true
    },
    {
        id: 2,
        title: "Class 11-12 Commerce",
        description: "In-depth study of Accountancy, Business Studies, Economics, and Mathematics with practical case studies.",
        category: "commerce",
        duration: "1 Year Program",
        grade: "Grade 11-12",
        fee: "₹20,000/year"
    },
    {
        id: 3,
        title: "Class 11-12 Arts (Humanities)",
        description: "Comprehensive program covering History, Political Science, Geography, Psychology, and Sociology.",
        category: "arts",
        duration: "1 Year Program",
        grade: "Grade 11-12",
        fee: "₹18,000/year"
    },
    {
        id: 4,
        title: "JEE/NEET Foundation (Class 9-10)",
        description: "Early preparation for engineering and medical entrance exams with concept building.",
        category: "competitive",
        duration: "2 Year Program",
        grade: "Grade 9-10",
        fee: "₹18,000/year",
        isPopular: true
    },
    {
        id: 5,
        title: "CA Foundation Course",
        description: "Preparation for Chartered Accountancy Foundation exams with expert guidance and mock tests.",
        category: "commerce",
        duration: "6 Month Program",
        grade: "After Class 12",
        fee: "₹15,000"
    },
    {
        id: 6,
        title: "Class 9-10 Science",
        description: "Strong foundation in Science and Mathematics with practical experiments and projects.",
        category: "science",
        duration: "2 Year Program",
        grade: "Grade 9-10",
        fee: "₹16,000/year"
    },
    {
        id: 7,
        title: "UPSC Prelims Foundation",
        description: "Comprehensive preparation for UPSC Civil Services Preliminary examination.",
        category: "competitive",
        duration: "1 Year Program",
        grade: "Graduates",
        fee: "₹30,000"
    },
    {
        id: 8,
        title: "Class 11-12 Fine Arts",
        description: "Specialized program in Painting, Sculpture, and Art History with portfolio development.",
        category: "arts",
        duration: "1 Year Program",
        grade: "Grade 11-12",
        fee: "₹22,000/year"
    }
];

// Initialize the page with all courses
document.addEventListener('DOMContentLoaded', function() {
    // Load all courses initially
    renderCourses(coursesData);
    
    // Set up filter button event listeners
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active state
            document.querySelectorAll('.filter-button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filter courses
            filterCourses(filter);
        });
    });
});

// Function to render courses
function renderCourses(courses) {
    const courseGrid = document.querySelector('.course-grid');
    courseGrid.innerHTML = '';
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card animate';
        
        let badge = '';
        if (course.isPopular) {
            badge = '<div class="course-badge">Popular</div>';
        }
        
        courseCard.innerHTML = `
            ${badge}
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="course-details">
                <span>⏱️ ${course.duration}</span>
                <span>🎓 ${course.grade}</span>
                <span>💵 ${course.fee}</span>
            </div>
            <button class="enquire-button">Enquire Now</button>
        `;
        
        courseGrid.appendChild(courseCard);
    });
}

// Function to filter courses
function filterCourses(filter) {
    const courseCards = document.querySelectorAll('.course-card');
    
    // First fade out all cards
    courseCards.forEach(card => {
        card.classList.add('hidden');
    });
    
    // After a short delay, filter and show appropriate cards
    setTimeout(() => {
        let filteredCourses;
        if (filter === 'all') {
            filteredCourses = coursesData;
        } else {
            filteredCourses = coursesData.filter(course => course.category === filter);
        }
        
        renderCourses(filteredCourses);
    }, 300);
}

document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("navLinks").classList.toggle("active");
  });