/*emailjs.init("folNqvrHO0geXZvWd");

document.getElementById("registration_form_container").addEventListener("submit", function (event) {
    event.preventDefault();

    const form_data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        classe: document.getElementById("classe").value,
        curso: document.getElementById("curso").value,
        disciplina: document.getElementById("disciplina").value,
        pacotes: document.getElementById("pacotes").value,
    }

    const templateID = "template_sdtft8k";
    const serviceID = "service_56rjz7a";
    
    emailjs.send(serviceID, templateID, form_data);
});*/

// ✅ Inicializa o EmailJS com sua Public Key
emailjs.init("folNqvrHO0geXZvWd");

document
  .getElementById("registration_form_container")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const submitButton = form.querySelector("button[type='submit']");

    // Bloqueia o botão para evitar envios duplicados
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    // Coleta dos dados do formulário
    const form_data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      telefone: document.getElementById("telefone").value.trim(),
      classe: document.getElementById("classe").value.trim(),
      curso: document.getElementById("curso").value.trim(),
      disciplina: document.getElementById("disciplina").value.trim(),
      pacotes: document.getElementById("pacotes").value.trim(),
    };

    const templateID = "template_sdtft8k";
    const serviceID = "service_56rjz7a";

    try {
      // Envia o e-mail via EmailJS
      await emailjs.send(serviceID, templateID, form_data);

      // Mostra mensagem de sucesso
      alert("✅ Sua solicitação foi enviada com sucesso!\nEntraremos em contato em breve.");

      // Limpa o formulário
      form.reset();
    } catch (error) {
      console.error("❌ Erro ao enviar:", error);
      alert("⚠️ Ocorreu um erro ao enviar sua solicitação.\nPor favor, tente novamente mais tarde.");
    } finally {
      // Restaura o botão
      submitButton.disabled = false;
      submitButton.textContent = "Enviar solicitação";
    }
  });
