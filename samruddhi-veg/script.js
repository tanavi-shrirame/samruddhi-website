function showPage(pageId) {
      const sections = document.querySelectorAll('.section');
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
    }