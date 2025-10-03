# Демонстрация настройки Google Analytics

## 🎯 Варианты настройки

### Вариант 1: Автоматическая настройка (Рекомендуется)

```bash
# Перейти в папку проекта
cd experiments/penrose

# Запустить скрипт быстрой настройки
./quick-setup-ga.sh
```

Скрипт попросит ввести ваш Measurement ID и автоматически обновит все файлы.

### Вариант 2: Ручная настройка

#### Шаг 1: Получить Measurement ID
1. Перейти в https://analytics.google.com/
2. Создать свойство "Penrose Tiles Generator"
3. Создать веб-поток для https://rybushkin.github.io/penrose-tiles-generator/
4. Скопировать Measurement ID (формат: G-XXXXXXXXXX)

#### Шаг 2: Обновить файлы
Заменить `GA_MEASUREMENT_ID` на ваш реальный ID в:

**index.html (2 места):**
```html
<!-- Строка 30 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Строка 35 -->
gtag('config', 'G-XXXXXXXXXX', {
```

**analytics.js (1 место):**
```javascript
// Строка 7
const GA_CONFIG = {
  measurementId: 'G-XXXXXXXXXX', // Замените на ваш ID
  debugMode: false,
  trackEvents: true,
  trackUserInteractions: true
};
```

### Вариант 3: Демонстрация с тестовым ID

Для демонстрации можно использовать тестовый ID:

```bash
# Запустить с тестовым ID
./quick-setup-ga.sh
# Ввести: G-DEMO123456
```

## 🧪 Тестирование

### Локальное тестирование:
```bash
# Запустить локальный сервер
python -m http.server 8000

# Открыть в браузере
open http://localhost:8000
```

### Проверка в Google Analytics:
1. Перейти в DebugView: https://analytics.google.com/analytics/web/#/debugview
2. Открыть сайт в новой вкладке
3. Проверить поступление событий

## 🚀 Развертывание

```bash
# Добавить изменения в Git
git add .

# Сделать коммит
git commit -m "Configure Google Analytics with G-XXXXXXXXXX"

# Отправить в GitHub
git push origin main
```

## 📊 Проверка работы

### В браузере:
1. Открыть Developer Tools (F12)
2. Перейти в Network tab
3. Обновить страницу
4. Искать запросы к `google-analytics.com`

### В Google Analytics:
1. Отчеты → В реальном времени
2. Должен появиться активный пользователь
3. События должны отображаться в DebugView

## 🔧 Отладка

### Включить debug режим:
```javascript
// В analytics.js
const GA_CONFIG = {
  measurementId: 'G-XXXXXXXXXX',
  debugMode: true, // Включить для отладки
  trackEvents: true,
  trackUserInteractions: true
};
```

### Проверить консоль:
- Открыть Developer Tools (F12)
- Перейти в Console
- Искать сообщения: "Analytics event: ..."

## 📝 Примеры событий

После настройки будут отслеживаться:

- **pattern_generated** - при генерации паттерна
- **parameter_changed** - при изменении параметров
- **mode_switched** - при переключении Tiling/Grid
- **file_downloaded** - при сохранении PNG
- **url_shared** - при копировании ссылки
- **random_seed_generated** - при генерации случайного seed

## 🆘 Решение проблем

### Проблема: События не отслеживаются
**Решение:**
1. Проверить правильность Measurement ID
2. Убедиться, что сайт загружен
3. Проверить консоль на ошибки

### Проблема: Нет данных в GA
**Решение:**
1. Подождать 5-10 минут
2. Проверить фильтры в GA
3. Убедиться, что пользователь активен

---
*Выберите подходящий вариант настройки и следуйте инструкциям!*
