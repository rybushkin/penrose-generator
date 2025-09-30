/**
 * Google Analytics Configuration for Penrose Tiles Generator
 * 
 * This file contains analytics tracking functions for the Penrose Tiles Generator.
 * Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics Measurement ID.
 */

// Google Analytics Configuration
const GA_CONFIG = {
  measurementId: 'GA_MEASUREMENT_ID', // Replace with your actual GA4 Measurement ID
  debugMode: false, // Set to true for development
  trackEvents: true,
  trackUserInteractions: true
};

/**
 * Initialize Google Analytics
 */
function initAnalytics() {
  if (typeof gtag === 'undefined') {
    console.warn('Google Analytics not loaded');
    return;
  }

  // Configure analytics
  gtag('config', GA_CONFIG.measurementId, {
    page_title: 'Penrose Tiles Generator',
    page_location: window.location.href,
    custom_map: {
      'custom_parameter_1': 'penrose_generator'
    }
  });

  if (GA_CONFIG.debugMode) {
    console.log('Google Analytics initialized');
  }
}

/**
 * Track user interactions with the generator
 */
function trackGeneratorEvent(eventName, parameters = {}) {
  if (!GA_CONFIG.trackEvents || typeof gtag === 'undefined') return;

  gtag('event', eventName, {
    event_category: 'penrose_generator',
    event_label: parameters.label || '',
    value: parameters.value || 0,
    custom_parameter_1: 'penrose_generator',
    ...parameters
  });

  if (GA_CONFIG.debugMode) {
    console.log('Analytics event:', eventName, parameters);
  }
}

/**
 * Track pattern generation
 */
function trackPatternGeneration(symmetry, pattern, colorHue) {
  trackGeneratorEvent('pattern_generated', {
    event_category: 'pattern_generation',
    symmetry: symmetry,
    pattern_value: pattern,
    color_hue: colorHue,
    label: `symmetry_${symmetry}_pattern_${Math.round(pattern * 100)}`
  });
}

/**
 * Track parameter changes
 */
function trackParameterChange(parameter, value) {
  trackGeneratorEvent('parameter_changed', {
    event_category: 'parameter_adjustment',
    parameter_name: parameter,
    parameter_value: value,
    label: `${parameter}_${value}`
  });
}

/**
 * Track mode switches
 */
function trackModeSwitch(mode) {
  trackGeneratorEvent('mode_switched', {
    event_category: 'interface_interaction',
    mode: mode,
    label: `mode_${mode.toLowerCase()}`
  });
}

/**
 * Track downloads
 */
function trackDownload(type) {
  trackGeneratorEvent('file_downloaded', {
    event_category: 'file_operations',
    file_type: type,
    label: `download_${type}`
  });
}

/**
 * Track sharing
 */
function trackSharing() {
  trackGeneratorEvent('url_shared', {
    event_category: 'social_interaction',
    label: 'url_shared'
  });
}

/**
 * Track random seed generation
 */
function trackRandomSeed() {
  trackGeneratorEvent('random_seed_generated', {
    event_category: 'pattern_generation',
    label: 'random_seed'
  });
}

/**
 * Track fullscreen toggle
 */
function trackFullscreenToggle(isFullscreen) {
  trackGeneratorEvent('fullscreen_toggled', {
    event_category: 'interface_interaction',
    fullscreen: isFullscreen,
    label: `fullscreen_${isFullscreen ? 'on' : 'off'}`
  });
}

/**
 * Track canvas interactions
 */
function trackCanvasInteraction(type, details = {}) {
  trackGeneratorEvent('canvas_interaction', {
    event_category: 'canvas_operations',
    interaction_type: type,
    ...details,
    label: `canvas_${type}`
  });
}

// Export functions for use in Vue components
window.PenroseAnalytics = {
  init: initAnalytics,
  trackPatternGeneration,
  trackParameterChange,
  trackModeSwitch,
  trackDownload,
  trackSharing,
  trackRandomSeed,
  trackFullscreenToggle,
  trackCanvasInteraction,
  config: GA_CONFIG
};

// Initialize analytics when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnalytics);
} else {
  initAnalytics();
}
