document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.getElementById('course-list');
    
    const courses = [
        { title: 'HTML Basics', description: 'Learn the basics of HTML.' },
        { title: 'CSS Fundamentals', description: 'Understand the fundamentals of CSS.' },
        { title: 'JavaScript Essentials', description: 'Get started with JavaScript programming.' }
    ];

    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        
        const courseTitle = document.createElement('h3');
        courseTitle.textContent = course.title;
        courseItem.appendChild(courseTitle);
        
        const courseDescription = document.createElement('p');
        courseDescription.textContent = course.description;
        courseItem.appendChild(courseDescription);

        courseList.appendChild(courseItem);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
        contactForm.reset();
    });
});
