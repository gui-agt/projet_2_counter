document.addEventListener('DOMContentLoaded', (event) => {
    const startDate = new Date('2024-06-30T16:30:00').getTime();
  
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = now - startDate;
  
      const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('years').innerText = String(years).padStart(2, '0');
      document.getElementById('months').innerText = String(months).padStart(2, '0');
      document.getElementById('days').innerText = String(days).padStart(2, '0');
      document.getElementById('hours').innerText = String(hours).padStart(2, '0');
      document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
      document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    };
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
  