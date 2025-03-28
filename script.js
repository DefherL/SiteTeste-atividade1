// Função do botão do header
function mostrarMensagem() {
  alert("Em breve um de nossos consultores entrará em contato!");
}

// Validação do formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if(name && email && message) {
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    this.reset();
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});

// Smooth scroll para links da navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});