document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-item');
    const skillDisp = document.getElementById('skill-disp');
  
    const skillDescriptions = {
      'skill-item1': 'Problem Solving involves the process of finding solutions to difficult or complex issues.',
      'skill-item2': 'Trouble Shooting is the process of analyzing and solving problems in a system.',
      'skill-item3': 'Networking is the practice of connecting computers and other devices together to share resources.',
      'skill-item4': 'Core JAVA is a programming language used for building portable, high-performance applications.',
      'skill-item5': 'C++ is a general-purpose programming language created as an extension of the C programming language.',
      'skill-item6': 'Python is a high-level programming language for general-purpose programming.',
      'skill-item7': 'HTML is the standard markup language for creating web pages.',
      'skill-item8': 'CSS is a language used to describe the style of document presentations in web development.',
      'skill-item9': 'JS, or JavaScript, is a programming language used to create dynamic website content.',
      'skill-item10': 'React JS is a JavaScript library for building user interfaces.',
      'skill-item11': 'Github is a web-based platform used for version control and collaborative software development.',
      'skill-item12': 'Linux is an open-source operating system modelled on UNIX.',
      'skill-item13': 'Fast Learner indicates the ability to quickly understand and assimilate new information.'
    };
  
    skills.forEach(skill => {
      skill.addEventListener('mouseenter', () => {
        const skillId = skill.getAttribute('id');
        const description = skillDescriptions[skillId] || 'No description available.';
        skillDisp.innerHTML = `<p>${description}</p>`;
      });
  
      skill.addEventListener('mouseleave', () => {
        skillDisp.innerHTML = 'Select the Skills to know more';
      });
    });
  });
  