// Created by: Lucas Tyman
// Created on: Apr 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-01-Extra/sw.js", {
    scope: "/ICS2O-Unit6-01-Extra/",
  })
}

/**
 * This function calculates 
 */
function calculate() { 
  // input
  const radius = parseFloat(document.getElementById('radius-of-sphere').value)

  // process
  const volume = 4/3 * Math.PI * Math.pow(radius, 3)
  
  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}
