const btn1 = document.getElementById('about_me_btn');
const btn2 = document.getElementById('experiences_btn');
const btn3 = document.getElementById('projects_btn');
const btn4 = document.getElementById('skills_btn');

const abt_me = document.getElementById('about_me');
const experiences = document.getElementById('experiences');
const projects = document.getElementById('projects');
const skills = document.getElementById('skills');

btn1.addEventListener('click', function() {
	abt_me.style.display = 'block';
	experiences.style.display = 'none';
	projects.style.display = 'none';
	skills.style.display = 'none';
});

btn2.addEventListener('click', function() {
	abt_me.style.display = 'none';
	experiences.style.display = 'block';
	projects.style.display = 'none';
	skills.style.display = 'none';
});

btn3.addEventListener('click', function() {
	abt_me.style.display = 'none';
	experiences.style.display = 'none';
	projects.style.display = 'block';
	skills.style.display = 'none';
});

btn4.addEventListener('click', function() {
	abt_me.style.display = 'none';
	experiences.style.display = 'none';
	projects.style.display = 'none';
	skills.style.display = 'block';
});
