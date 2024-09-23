function getRandomBackgroundColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const body = document.body;
  const helloText = document.getElementById('helloText');
  
  const originalText = helloText.textContent;
  
  helloText.addEventListener('mouseover', function() {
    body.style.background = getRandomBackgroundColor();
    
    helloText.textContent = 'Cihuyy';
  });
  
  helloText.addEventListener('mouseout', function() {
    body.style.background = 'linear-gradient(135deg, #f09, #3023ae)';
    
    helloText.textContent = originalText;
  });
  