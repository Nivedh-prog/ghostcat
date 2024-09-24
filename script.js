const msgerForm = get(".chat-input-area");
const msgerInput = get(".chat-input");
const msgerChat = get(".chat-window");

const BOT_MSGS = [
  "Hello! How can I assist you today?",
  "Please enable location services to connect with people nearby.",
  "I'm powered by ChatGPT 4, ready to help!",
  "Just here to assist you anytime you need!"
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "Admin";
const PERSON_NAME = "User";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;
  
  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";
  botResponse();
});

function appendMessage(name, img, side, text) {
  const msgHTML = `
    <div class="message ${side}-message">
      <div class="message-avatar" style="background-image: url(${img})"></div>
      <div class="message-bubble">
        <div class="message-info">
          <div class="message-info-name">${name}</div>
          <div class="message-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="message-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
