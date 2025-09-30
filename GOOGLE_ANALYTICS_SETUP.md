# Google Analytics Setup для Penrose Tiles Generator

## 📊 Обзор

Google Analytics успешно интегрирован в проект Penrose Tiles Generator. Система отслеживает пользовательские взаимодействия, генерацию паттернов и использование функций.

## 🔧 Настройка

### 1. Получение Measurement ID

1. **Перейти в Google Analytics:**
   - https://analytics.google.com/
   - Войти в аккаунт Google

2. **Создать свойство:**
   - Нажать "Создать свойство"
   - Ввести название: "Penrose Tiles Generator"
   - Выбрать страну и валюту

3. **Настроить поток данных:**
   - Выбрать "Веб"
   - Ввести URL сайта: `https://rybushkin.github.io/penrose-tiles-generator/`
   - Получить Measurement ID (формат: G-XXXXXXXXXX)

### 2. Замена Measurement ID

**В файле `index.html`:**
```html
<!-- Заменить GA_MEASUREMENT_ID на ваш реальный ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  gtag('config', 'GA_MEASUREMENT_ID', {
    // конфигурация
  });
</script>
```

**В файле `analytics.js`:**
```javascript
const GA_CONFIG = {
  measurementId: 'GA_MEASUREMENT_ID', // Заменить на ваш ID
  debugMode: false, // true для разработки
  trackEvents: true,
  trackUserInteractions: true
};
```

## 📈 Отслеживаемые события

### 1. Основные события
- **page_view** - просмотр страницы
- **pattern_generated** - генерация паттерна
- **parameter_changed** - изменение параметров
- **mode_switched** - переключение режимов
- **file_downloaded** - загрузка файлов
- **url_shared** - шаринг ссылки
- **random_seed_generated** - генерация случайного seed
- **pattern_reset** - сброс паттерна

### 2. Параметры событий
- **symmetry** - значение симметрии
- **pattern** - значение паттерна
- **color_hue** - цветовой оттенок
- **mode** - режим отображения (Tiling/Grid)
- **file_type** - тип файла (tiling/grid)

### 3. Категории событий
- **pattern_generation** - генерация паттернов
- **parameter_adjustment** - настройка параметров
- **interface_interaction** - взаимодействие с интерфейсом
- **file_operations** - операции с файлами
- **social_interaction** - социальные взаимодействия
- **canvas_operations** - операции с canvas

## 🎯 Пользовательские параметры

### 1. Настроенные параметры
- **custom_parameter_1**: "penrose_generator"
- **page_title**: "Penrose Tiles Generator"
- **page_location**: текущий URL

### 2. Дополнительные метрики
- **symmetry**: значение симметрии (3-19)
- **pattern_value**: значение паттерна (0-1)
- **color_hue**: цветовой оттенок (0-360)
- **parameter_name**: название параметра
- **parameter_value**: значение параметра

## 🔍 Отладка

### 1. Включение debug режима
```javascript
const GA_CONFIG = {
  measurementId: 'G-XXXXXXXXXX',
  debugMode: true, // Включить для отладки
  trackEvents: true,
  trackUserInteractions: true
};
```

### 2. Проверка в консоли
- Открыть Developer Tools (F12)
- Перейти в Console
- Искать сообщения: "Analytics event: ..."

### 3. Google Analytics DebugView
- В GA4 перейти в DebugView
- Настроить debug режим
- Просматривать события в реальном времени

## 📊 Аналитика

### 1. Основные отчеты
- **Аудитория** - демография пользователей
- **Приобретение** - источники трафика
- **Поведение** - взаимодействие с сайтом
- **Конверсии** - целевые действия

### 2. Пользовательские отчеты
- **Генерация паттернов** - частота использования
- **Параметры** - популярные настройки
- **Загрузки** - количество сохранений
- **Шаринг** - социальная активность

### 3. События в реальном времени
- **Активные пользователи** - онлайн сейчас
- **События** - последние действия
- **Конверсии** - целевые действия

## 🚀 Развертывание

### 1. Локальная разработка
```bash
# Запуск локального сервера
python -m http.server 8000
# или
npx serve .
```

### 2. GitHub Pages
```bash
# Коммит и пуш изменений
git add .
git commit -m "Add Google Analytics integration"
git push origin main
```

### 3. Проверка работы
- Открыть сайт в браузере
- Проверить Network tab в DevTools
- Убедиться, что запросы к Google Analytics отправляются

## 📝 Файлы проекта

### Измененные файлы:
- `index.html` - добавлен GA код
- `analytics.js` - создан файл конфигурации
- `vue-definitions.js` - добавлено отслеживание событий

### Новые файлы:
- `analytics.js` - конфигурация и функции отслеживания
- `GOOGLE_ANALYTICS_SETUP.md` - данная документация

## 🔒 Конфиденциальность

### 1. GDPR соответствие
- Уведомление о cookies
- Возможность отключения отслеживания
- Анонимизация IP адресов

### 2. Настройки конфиденциальности
```javascript
gtag('config', 'GA_MEASUREMENT_ID', {
  anonymize_ip: true,
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});
```

## 📞 Поддержка

### Полезные ссылки:
- [Google Analytics Help](https://support.google.com/analytics/)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Google Tag Manager](https://tagmanager.google.com/)

### Контакты:
- GitHub: https://github.com/rybushkin/penrose-tiles-generator
- Issues: https://github.com/rybushkin/penrose-tiles-generator/issues

---
*Google Analytics успешно интегрирован и готов к использованию!*
