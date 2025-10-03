#!/usr/bin/env node

/**
 * Google Analytics Setup Script
 * Автоматически заменяет GA_MEASUREMENT_ID на реальный ID
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Создаем интерфейс для ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Функция для замены ID в файле
function replaceMeasurementId(filePath, oldId, newId) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const oldContent = content;
    
    // Заменяем все вхождения
    content = content.replace(new RegExp(oldId, 'g'), newId);
    
    if (content !== oldContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Обновлен файл: ${filePath}`);
      return true;
    } else {
      console.log(`⚠️  Изменений не найдено в: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Ошибка при обновлении ${filePath}:`, error.message);
    return false;
  }
}

// Функция для валидации Measurement ID
function validateMeasurementId(id) {
  // GA4 Measurement ID должен начинаться с G- и содержать 10 символов после G-
  const pattern = /^G-[A-Z0-9]{10}$/;
  return pattern.test(id);
}

// Основная функция
async function setupGoogleAnalytics() {
  console.log('🎯 Настройка Google Analytics для Penrose Tiles Generator\n');
  
  // Запрашиваем Measurement ID
  const measurementId = await new Promise((resolve) => {
    rl.question('Введите ваш GA4 Measurement ID (формат: G-XXXXXXXXXX): ', (answer) => {
      resolve(answer.trim());
    });
  });
  
  // Валидируем ID
  if (!validateMeasurementId(measurementId)) {
    console.log('❌ Неверный формат Measurement ID!');
    console.log('   Правильный формат: G-XXXXXXXXXX (например: G-ABC123DEF4)');
    rl.close();
    return;
  }
  
  console.log(`\n🔧 Обновление файлов с Measurement ID: ${measurementId}\n`);
  
  // Список файлов для обновления
  const filesToUpdate = [
    'index.html',
    'analytics.js'
  ];
  
  let updatedFiles = 0;
  
  // Обновляем каждый файл
  for (const file of filesToUpdate) {
    const filePath = path.join(__dirname, file);
    
    if (fs.existsSync(filePath)) {
      const success = replaceMeasurementId(filePath, 'GA_MEASUREMENT_ID', measurementId);
      if (success) {
        updatedFiles++;
      }
    } else {
      console.log(`⚠️  Файл не найден: ${filePath}`);
    }
  }
  
  console.log(`\n📊 Результат: обновлено ${updatedFiles} из ${filesToUpdate.length} файлов`);
  
  if (updatedFiles > 0) {
    console.log('\n✅ Google Analytics настроен!');
    console.log('\n📝 Следующие шаги:');
    console.log('1. Проверьте изменения в файлах');
    console.log('2. Запустите локальный сервер для тестирования');
    console.log('3. Проверьте работу в Google Analytics DebugView');
    console.log('4. Закоммитьте изменения в Git');
    
    console.log('\n🧪 Для тестирования:');
    console.log('   python -m http.server 8000');
    console.log('   Откройте http://localhost:8000');
    
    console.log('\n🚀 Для развертывания:');
    console.log('   git add .');
    console.log('   git commit -m "Configure Google Analytics"');
    console.log('   git push origin main');
  } else {
    console.log('\n❌ Не удалось обновить файлы. Проверьте наличие файлов.');
  }
  
  rl.close();
}

// Запускаем скрипт
if (require.main === module) {
  setupGoogleAnalytics().catch(console.error);
}

module.exports = { setupGoogleAnalytics, replaceMeasurementId, validateMeasurementId };
