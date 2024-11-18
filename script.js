// Fonction pour envoyer le message dans la conversation du chatbot
function sendMessage() {
    let userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        let chatbox = document.getElementById('chatbox');
        let newMessage = document.createElement('div');
        newMessage.textContent = "Vous: " + userInput;
        chatbox.appendChild(newMessage);

        // Ajouter la réponse de l'IA (simulée ici)
        let aiResponse = document.createElement('div');
        aiResponse.textContent = "Chatbot: C'est une excellente question ! Apprenez l'anglais chaque jour pour améliorer votre fluidité.";
        aiResponse.style.fontStyle = "italic";
        chatbox.appendChild(aiResponse);

        // Effacer l'input de l'utilisateur
        document.getElementById('userInput').value = "";

        // Scroll au bas du chat
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

// Fonction pour traduire un texte (en l'état, il affiche simplement un exemple)
function translateText() {
    let inputText = document.getElementById('inputText').value;
    if (inputText.trim() !== "") {
        let translatedText = "Traduction : " + inputText + " (en anglais)"; // Ici, vous ajouterez une API de traduction
        document.getElementById('translatedText').textContent = translatedText;
    }
}
