function hideIntro() {
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');
    if (intro) {
      intro.style.display = 'none';
      mainContent.style.display = 'block';
    }
  }
  
  // 5秒後に自動で表示切り替え
  setTimeout(hideIntro, 5000);
  
  // スクロールが発生したら即座に切り替え
  window.addEventListener('scroll', hideIntro, { once: true });
  