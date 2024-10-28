document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
      },
      {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
      },
      {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
      },
      {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
      },
      {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
      },
      {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
      }
    ];
  
    const gradients = [
      'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
      'linear-gradient(135deg, #667eea, #764ba2)',
      'linear-gradient(135deg, #2193b0, #6dd5ed)',
      'linear-gradient(135deg, #ee9ca7, #ffdde1)',
      'linear-gradient(135deg, #654ea3, #eaafc8)',
      'linear-gradient(135deg, #009245, #FCEE21)',
      'linear-gradient(135deg, #662D8C, #ED1E79)',
      'linear-gradient(135deg, #D4145A, #FBB03B)'
    ];
  
    // Add event listener for close button
    document.getElementById('closeButton').addEventListener('click', () => {
      window.close();
    });
  
    function setRandomGradient() {
      const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
      document.body.style.backgroundImage = randomGradient;
    }
  
    function setRandomBackground() {
      setRandomGradient();
  
      const width = Math.floor(window.innerWidth * window.devicePixelRatio);
      const height = Math.floor(window.innerHeight * window.devicePixelRatio);
      
      const img = new Image();
      
      img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`;
      };
      
      img.onerror = () => {
        console.log('Failed to load image, using gradient fallback');
      };
  
      const timestamp = new Date().getTime();
      img.src = `https://source.unsplash.com/random/${width}x${height}?nature,inspiration&${timestamp}`;
    }
  
    function setRandomQuote() {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('quote').textContent = `"${quote.text}"`;
      document.getElementById('author').textContent = `— ${quote.author}`;
    }
  
    // Initialize
    setRandomBackground();
    setRandomQuote();
  });