#!/bin/bash

# Quick Google Analytics Setup Script
# Быстрая настройка Google Analytics для Penrose Tiles Generator

echo "🎯 Быстрая настройка Google Analytics"
echo "======================================"
echo ""

# Проверяем наличие файлов
if [ ! -f "index.html" ]; then
    echo "❌ Файл index.html не найден!"
    exit 1
fi

if [ ! -f "analytics.js" ]; then
    echo "❌ Файл analytics.js не найден!"
    exit 1
fi

echo "📝 Введите ваш GA4 Measurement ID (формат: G-XXXXXXXXXX)"
echo "   Пример: G-ABC123DEF4"
echo ""
read -p "Measurement ID: " MEASUREMENT_ID

# Валидация формата
if [[ ! $MEASUREMENT_ID =~ ^G-[A-Z0-9]{10}$ ]]; then
    echo "❌ Неверный формат Measurement ID!"
    echo "   Правильный формат: G-XXXXXXXXXX"
    exit 1
fi

echo ""
echo "🔧 Обновление файлов..."

# Обновляем index.html
if sed -i.bak "s/GA_MEASUREMENT_ID/$MEASUREMENT_ID/g" index.html; then
    echo "✅ Обновлен index.html"
    rm index.html.bak
else
    echo "❌ Ошибка при обновлении index.html"
    exit 1
fi

# Обновляем analytics.js
if sed -i.bak "s/GA_MEASUREMENT_ID/$MEASUREMENT_ID/g" analytics.js; then
    echo "✅ Обновлен analytics.js"
    rm analytics.js.bak
else
    echo "❌ Ошибка при обновлении analytics.js"
    exit 1
fi

echo ""
echo "🎉 Google Analytics настроен!"
echo ""
echo "📊 Measurement ID: $MEASUREMENT_ID"
echo ""
echo "🧪 Для тестирования:"
echo "   python -m http.server 8000"
echo "   Откройте http://localhost:8000"
echo ""
echo "🚀 Для развертывания:"
echo "   git add ."
echo "   git commit -m \"Configure Google Analytics with $MEASUREMENT_ID\""
echo "   git push origin main"
echo ""
echo "📈 Проверьте работу в Google Analytics DebugView:"
echo "   https://analytics.google.com/analytics/web/#/debugview"
echo ""
