# react-native-check-installed-apps

## Getting started

`$ npm install react-native-check-installed-apps --save`

### Mostly automatic installation

`$ react-native link react-native-check-installed-apps`

## Usage
Check out the example app in the [example](https://github.com/pSapien/react-native-check-installed-apps/tree/master/example) folder.

```javascript
import CheckInstalledApps from 'react-native-check-installed-apps';

CheckInstalledApps
  .isAppInstalled('facebook')
  .then(isInstalled => {
    // if the app is installed then isInstalled is true otherwise not
  })
```


