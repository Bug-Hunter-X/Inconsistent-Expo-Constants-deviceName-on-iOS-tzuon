// bugSolution.js
import * as Constants from 'expo-constants';

export function getDeviceName() {
  const deviceName = Constants.deviceName;
  // Fallback to a default value if deviceName is empty
  return deviceName || 'Unknown Device';
}

// Example usage:
console.log(getDeviceName());