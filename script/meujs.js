document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario-contato');
  const button = document.getElementById('enviarToastBtn');
  const toast = new bootstrap.Toast(document.getElementById('enviarToast'));

  form.addEventListener('input', function () {
    button.disabled = !form.checkValidity();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (form.checkValidity()) {
      toast.show();
      form.reset();
      button.disabled = true;
    } else {
      form.reportValidity();
    }
  });
});