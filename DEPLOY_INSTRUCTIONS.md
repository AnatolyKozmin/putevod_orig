# Инструкция по деплою Telegram Mini App на Amvera Cloud

## 🚀 Роадмап деплоя

### 1. Подготовка проекта ✅
- [x] Исправлена конфигурация Vite (убран base path)
- [x] Обновлен TON Connect манифест
- [x] Создана конфигурация для Amvera Cloud
- [x] Проект успешно собран

### 2. Регистрация на Amvera Cloud

1. **Перейдите на сайт Amvera Cloud**: https://amvera.cloud/
2. **Зарегистрируйтесь** или войдите в аккаунт
3. **Создайте новый проект**:
   - Выберите тип "Статический сайт"
   - Название: `putevod-telegram-app`
   - Домен: `putevod-telegram-app.amvera.cloud` (бесплатный)

### 3. Подготовка к деплою

#### Вариант A: Через Git (рекомендуется)
1. **Создайте Git репозиторий**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Загрузите на GitHub/GitLab**:
   ```bash
   git remote add origin https://github.com/yourusername/putevod-telegram-app.git
   git push -u origin main
   ```

3. **В панели Amvera Cloud**:
   - Выберите "Подключить Git репозиторий"
   - Укажите URL вашего репозитория
   - Настройки сборки:
     - Build command: `npm run build`
     - Output directory: `dist`
     - Node.js version: `18.x`

#### Вариант B: Прямая загрузка
1. **Создайте архив** с содержимым папки `dist`
2. **Загрузите архив** через панель Amvera Cloud

### 4. Настройка домена

1. **В панели Amvera Cloud**:
   - Перейдите в настройки проекта
   - Добавьте домен: `putevod-telegram-app.amvera.cloud`
   - Включите HTTPS (автоматически)

2. **Обновите TON Connect манифест**:
   ```json
   {
       "url": "https://putevod-telegram-app.amvera.cloud",
       "name": "Путеводитель",
       "iconUrl": "https://putevod-telegram-app.amvera.cloud/favicon.ico"
   }
   ```

### 5. Настройка Telegram Bot

1. **Создайте бота** через @BotFather:
   ```
   /newbot
   Название: Путеводитель
   Username: your_putevod_bot
   ```

2. **Настройте Mini App**:
   ```
   /newapp
   Выберите бота: @your_putevod_bot
   Название: Путеводитель
   Описание: Мини-приложение с информацией об университете
   URL: https://putevod-telegram-app.amvera.cloud
   ```

3. **Получите токен** и сохраните его

### 6. Тестирование

1. **Откройте бота** в Telegram
2. **Нажмите на кнопку** "Open App" или команду `/start`
3. **Проверьте функциональность**:
   - Загрузка главной страницы
   - Навигация по меню
   - TON Connect (если используется)

### 7. Обновление приложения

При внесении изменений:
1. **Соберите проект**: `npm run build`
2. **Загрузите обновления** в Amvera Cloud
3. **Проверьте работу** в Telegram

## 🔧 Дополнительные настройки

### Настройка HTTPS
Amvera Cloud автоматически предоставляет SSL сертификаты для всех доменов.

### Настройка кеширования
Добавьте в корень проекта файл `.htaccess`:
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### Мониторинг
- Используйте встроенные инструменты Amvera Cloud для мониторинга
- Настройте уведомления о недоступности

## 🚨 Важные моменты

1. **Домен**: После деплоя обновите URL в TON Connect манифесте
2. **HTTPS**: Обязательно используйте HTTPS для Telegram Mini Apps
3. **Тестирование**: Всегда тестируйте в реальном Telegram клиенте
4. **Резервные копии**: Регулярно делайте бэкапы кода

## 📞 Поддержка

- **Amvera Cloud**: https://amvera.cloud/support
- **Telegram Bot API**: https://core.telegram.org/bots/api
- **Telegram Mini Apps**: https://docs.telegram-mini-apps.com/

---

**Готово!** Ваше приложение должно быть доступно по адресу: `https://putevod-telegram-app.amvera.cloud`
