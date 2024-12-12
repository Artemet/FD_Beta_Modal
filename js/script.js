const singModalParent = document.querySelector(".custom_modal_background");
const mentionModalParent = document.querySelector(".sing_modal_mention");

// Открытие модального окна при клике на иконку "сердце"
const setupHeartIcons = () => {
    const heartIcons = document.querySelectorAll(".heart_icon");
    heartIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            if (localStorage.getItem("modalClosed") !== "true") {
                mentionModalParent.style.display = "block";
                setTimeout(() => {
                    mentionModalParent.classList.add("sing_modal_mention_active");
                }, 100);
            }
        });
    });
};

// Закрытие модального окна упоминания
const setupCloseMentionModal = () => {
    const closeButtons = document.querySelectorAll(".sing_modal_mention .close_option");
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            mentionModalParent.classList.remove("sing_modal_mention_active");
            setTimeout(() => {
                mentionModalParent.remove();
                localStorage.setItem("modalClosed", "true");
            }, 500);
        });
    });
};

// Логика кнопок в модальном окне упоминания
const setupMentionModalButtons = () => {
    const modalButtons = document.querySelectorAll(".sing_modal_mention .button_options button");
    modalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonId = parseInt(button.id, 10);
            if (buttonId === 1) {
                mentionModalParent.classList.remove("sing_modal_mention_active");
                setTimeout(() => {
                    mentionModalParent.remove();
                    singModalParent.style.display = "block";
                    setTimeout(() => {
                        singModalParent.classList.add("custom_modal_background_active");
                    }, 100);
                }, 500);
            }
        });
    });
};

// Функция переключения состояния "сердца"
let heartTemporaryState = false;

const toggleHeart = (heart) => {
    const get_child = heart.querySelector("svg");

    if (localStorage.getItem("modalClosed") === "true" || heartTemporaryState) {
        get_child.classList.toggle("active");
    }
};

// Закрытие основного модального окна
const closeModalButton = document.querySelector(".close_modal_button");
closeModalButton.addEventListener("click", () => {
    heartTemporaryState = true;
    singModalParent.remove();
});

// Инициализация всех функций
const initializeModals = () => {
    setupHeartIcons();
    setupCloseMentionModal();
    setupMentionModalButtons();
};

initializeModals();