# Inconsistent Expo Constants.deviceName on iOS

This repository demonstrates a bug where `Constants.deviceName` in Expo inconsistently returns an empty string on iOS devices. This behavior is not consistent across devices or even across multiple runs on the same device. This makes it unreliable for implementing device-specific logic in your app.

## Bug Reproduction

1. Clone this repository.
2. Run the app on an iOS device (or simulator). 
3. Observe the output of `Constants.deviceName`. It may return an empty string or the actual device name, inconsistently. 

## Proposed Solution

The proposed solution involves using a fallback mechanism and potentially checking the device name through other methods (if possible).  This provides a more robust way to handle the inconsistencies observed with `Constants.deviceName`.