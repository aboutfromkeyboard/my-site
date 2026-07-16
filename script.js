document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    // ===== НАСТРОЙКА =====
    // Сюда вставь свои данные
    const token = 'ТОКЕН_ТВОЕГО_БОТА';
    const chat_id = 'ТВОЙ_TELEGRAM_ID';
    // =====================

    const message = `🟢 НОВЫЙ ЛИД\n\n👤 Имя: ${name}\n📧 Email: ${email}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message,
            parse_mode: 'HTML'
        })
    })
    .then(response => {
        if (response.ok) {
            alert(`✅ Спасибо, ${name}! Чек-лист отправлен на ${email}`);
            document.getElementById('contactForm').reset();
        } else {
            alert('❌ Ошибка отправки. Попробуй ещё раз или напиши в Telegram.');
        }
    })
    .catch(() => {
        alert('❌ Ошибка сети. Проверь подключение.');
    });
});