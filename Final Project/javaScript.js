const carousel = document.getElementById('carousel');
document.getElementById('scroll-left').addEventListener('click', function () {
  carousel.scrollBy({ left: -100, behavior: 'smooth' });
});
document.getElementById('scroll-right').addEventListener('click', function () {
  carousel.scrollBy({ left: 100, behavior: 'smooth' });
});



document.getElementById('reservationForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    message: document.getElementById('message').value,
  };

  console.log('Form Submitted:', formData);
  alert('Reservation submitted successfully!');
  this.reset(); 
});


document.querySelector('.arrow-down').addEventListener('click', function() {
  alert('Arrow clicked!');
});

const arrow = document.createElement('div');
arrow.classList.add('arrow-down');
document.body.appendChild(arrow);




