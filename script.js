// document.addEventListener('DOMContentLoaded', (event) => {
//     const startDate = new Date('2024-06-30T16:30:00').getTime();
  
//     const updateCountdown = () => {
//       const now = new Date().getTime();
//       const distance = now - startDate;
  
//       const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
//       const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
//       const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//       document.getElementById('years').innerText = String(years).padStart(2, '0');
//       document.getElementById('months').innerText = String(months).padStart(2, '0');
//       document.getElementById('days').innerText = String(days).padStart(2, '0');
//       document.getElementById('hours').innerText = String(hours).padStart(2, '0');
//       document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
//       document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
//     };
  
//     updateCountdown();
//     setInterval(updateCountdown, 1000);
//   });

document.addEventListener('DOMContentLoaded', (event) => {
  const startDate = new Date('2024-06-30T16:30:00').getTime();

  const updateCountdown = () => {
      const now = new Date().getTime();
      let distance = now - startDate;

      const msInSecond = 1000;
      const msInMinute = msInSecond * 60;
      const msInHour = msInMinute * 60;
      const msInDay = msInHour * 24;

      // Fonction pour vérifier si une année est bissextile
      const leapYear = (year) => {
          return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
      };

      // Fonction pour obtenir le nombre de jours dans un mois donné d'une année
      const daysInMonth = (year, month) => {
          return new Date(year, month + 1, 0).getDate();
      };

      let startDateObj = new Date(startDate);
      let years = 0, months = 0, days = 0;

      // Boucle pour ajuster les années et les mois en fonction des jours restants
      while (true) {
          let year = startDateObj.getFullYear();
          let month = startDateObj.getMonth();
          let daysInCurrentMonth = daysInMonth(year, month);

          if (distance >= daysInCurrentMonth * msInDay) {
              distance -= daysInCurrentMonth * msInDay;
              startDateObj.setMonth(startDateObj.getMonth() + 1);
              months++;
              if (months === 12) {
                  years++;
                  months = 0;
              }
          } else {
              break;
          }
      }

      // Calcul des jours restants
      while (distance >= msInDay) {
          days++;
          distance -= msInDay;
      }

      // Calcul des heures, minutes et secondes restants
      const hours = Math.floor(distance / msInHour);
      distance %= msInHour;
      const minutes = Math.floor(distance / msInMinute);
      distance %= msInMinute;
      const seconds = Math.floor(distance / msInSecond);

      // Mise à jour des éléments DOM avec les valeurs calculées
      document.getElementById('years').innerText = String(years).padStart(2, '0');
      document.getElementById('months').innerText = String(months).padStart(2, '0');
      document.getElementById('days').innerText = String(days).padStart(2, '0');
      document.getElementById('hours').innerText = String(hours).padStart(2, '0');
      document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
      document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
  };

  // Initialisation et mise à jour du compte à rebours toutes les secondes
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
