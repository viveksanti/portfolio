const data = window.PORTFOLIO;

document.querySelector('#hero-intro').textContent = data.intro;
document.querySelector('#about-copy').textContent = data.about;
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#project-list').innerHTML = data.projects.map((project) => `
  <article class="project reveal">
    <div class="project-meta"><span>${project.number}</span><p>${project.type}</p></div>
    <div class="project-copy">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      ${project.link ? `<a class="project-link" href="${project.link.url}" target="_blank" rel="noreferrer">${project.link.label} ↗</a>` : ''}
    </div>
    <div class="project-visual ${project.accent}" aria-hidden="true">
      <div class="visual-bar"><i></i><i></i><i></i></div>
      <div class="visual-grid"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <b>${project.number}</b>
    </div>
  </article>`).join('');

document.querySelector('#experience-list').innerHTML = data.experience.map((item) => `
  <article class="experience reveal">
    <time>${item.period}</time>
    <div><h3>${item.role}</h3><p class="company">${item.company}</p></div>
    <p>${item.summary}</p>
  </article>`).join('');

document.querySelector('#skills-list').innerHTML = Object.entries(data.skills).map(([group, skills]) => `
  <div class="skill-group"><h3>${group}</h3><p>${skills.join(' · ')}</p></div>`).join('');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#back-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
