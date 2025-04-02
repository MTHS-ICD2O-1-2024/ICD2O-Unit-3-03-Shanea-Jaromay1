// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Show volume
 */
function calculateVolumeOfSphere() {
  // input
  const radiusNumber = parseFloat(document.getElementById("radius-number").value);

  // process
  const volumeOfSphere = (4/3) * Math.PI * (radiusNumber ** 3);

  // output with more controlled precision
  document.getElementById("volume").innerHTML = "The volume is:" + volumeOfSphere.toFixed(2) + "mm³";
}
