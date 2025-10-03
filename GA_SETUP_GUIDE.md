# Пошаговая настройка Google Analytics для Penrose Tiles Generator

## 🎯 Шаг 1: Создание аккаунта Google Analytics

### 1.1 Переход в Google Analytics
1. Откройте https://analytics.google.com/
2. Войдите в аккаунт Google
3. Если у вас нет аккаунта, создайте его

### 1.2 Создание свойства
1. Нажмите **"Администратор"** (шестеренка внизу слева)
2. В колонке "Свойство" нажмите **"Создать свойство"**
3. Заполните форму:
   - **Название свойства:** "Penrose Tiles Generator"
   - **Отчетный часовой пояс:** выберите ваш часовой пояс
   - **Валюта:** выберите вашу валюту
4. Нажмите **"Далее"**

### 1.3 Настройка бизнес-информации
1. Выберите **"Информационные технологии"** или **"Другое"**
2. Выберите размер компании
3. Выберите цели использования Google Analytics
4. Нажмите **"Создать"**

## 🔧 Шаг 2: Настройка потока данных

### 2.1 Создание веб-потока
1. В разделе "Потоки данных" нажмите **"Добавить поток"**
2. Выберите **"Веб"**
3. Заполните информацию:
   - **URL веб-сайта:** `https://rybushkin.github.io/penrose-tiles-generator/`
   - **Название потока:** "Penrose Tiles Generator Web"
4. Нажмите **"Создать поток"**

### 2.2 Получение Measurement ID
1. После создания потока вы увидите **Measurement ID**
2. Скопируйте ID (формат: `G-XXXXXXXXXX`)
3. **Сохраните этот ID** - он понадобится для настройки

## 📝 Шаг 3: Обновление кода проекта

### 3.1 Обновление index.html
Замените `GA_MEASUREMENT_ID` на ваш реальный ID в двух местах:

```html
<!-- Строка 30 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Строка 35 -->
gtag('config', 'G-XXXXXXXXXX', {
```

### 3.2 Обновление analytics.js
Замените `GA_MEASUREMENT_ID` на ваш реальный ID:

```javascript
// Строка 7
const GA_CONFIG = {
  measurementId: 'G-XXXXXXXXXX', // Замените на ваш ID
  debugMode: false,
  trackEvents: true,
  trackUserInteractions: true
};
```

## 🧪 Шаг 4: Тестирование

### 4.1 Локальное тестирование
1. Откройте проект в браузере
2. Откройте Developer Tools (F12)
3. Перейдите в **Network** tab
4. Обновите страницу
5. Ищите запросы к `google-analytics.com`

### 4.2 Проверка в Google Analytics
1. В Google Analytics перейдите в **"Отчеты"**
2. Выберите **"В реальном времени"**
3. Откройте ваш сайт в новой вкладке
4. Вы должны увидеть активного пользователя

### 4.3 Debug режим
Для отладки включите debug режим:

```javascript
// В analytics.js
const GA_CONFIG = {
  measurementId: 'G-XXXXXXXXXX',
  debugMode: true, // Включить для отладки
  trackEvents: true,
  trackUserInteractions: true
};
```

## 🚀 Шаг 5: Развертывание

### 5.1 Коммит изменений
```bash
cd experiments/penrose
git add .
git commit -m "Configure Google Analytics with Measurement ID"
git push origin main
```

### 5.2 Проверка на GitHub Pages
1. Подождите 5-10 минут
2. Откройте https://rybushkin.github.io/penrose-tiles-generator/
3. Проверьте работу аналитики

## 📊 Шаг 6: Настройка отчетов

### 6.1 Основные отчеты
- **Аудитория** - демография пользователей
- **Приобретение** - источники трафика
- **Поведение** - взаимодействие с сайтом
- **Конверсии** - целевые действия

### 6.2 Пользовательские события
- **pattern_generated** - генерация паттернов
- **parameter_changed** - изменение параметров
- **file_downloaded** - загрузки файлов
- **url_shared** - шаринг ссылок

## 🔍 Шаг 7: Мониторинг

### 7.1 Ежедневные проверки
- Количество пользователей
- Популярные события
- Источники трафика

### 7.2 Еженедельный анализ
- Тренды использования
- Эффективность функций
- Проблемные места

## 🆘 Решение проблем

### Проблема: События не отслеживаются
**Решение:**
1. Проверьте правильность Measurement ID
2. Убедитесь, что сайт загружен
3. Проверьте консоль браузера на ошибки

### Проблема: Нет данных в реальном времени
**Решение:**
1. Подождите 5-10 минут
2. Проверьте фильтры в GA
3. Убедитесь, что пользователь активен

### Проблема: Ошибки в консоли
**Решение:**
1. Проверьте синтаксис JavaScript
2. Убедитесь, что все файлы загружены
3. Проверьте CORS настройки

## 📞 Поддержка

### Полезные ссылки:
- [Google Analytics Help](https://support.google.com/analytics/)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [GitHub Repository](https://github.com/rybushkin/penrose-tiles-generator)

### Контакты:
- GitHub Issues: https://github.com/rybushkin/penrose-tiles-generator/issues
- Email: asktenggis@gmail.com

---
*Следуйте этим шагам для полной настройки Google Analytics!*
