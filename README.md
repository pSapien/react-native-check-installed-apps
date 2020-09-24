# react-native-check-installed-apps

## Getting started

```
npm install react-native-check-installed-apps --save
yarn add react-native-check-installed-apps
```

### Link to React native

`$ react-native link`

## Usage
Check out the example app in the [example](https://github.com/pSapien/react-native-check-installed-apps/tree/master/example) folder.

```javascript
import CheckInstalledApps from 'react-native-check-installed-apps';

CheckInstalledApps
  .isAppInstalled('facebook')
  .then(isInstalled => {
    // if the app is installed then isInstalled is true otherwise not
  });

// To check using URL (iOS only):
CheckInstalledApps
    .isAppInstalledIOS('whatsapp')
    .then((isInstalled) => {
      // if the app is installed then isInstalled is true otherwise not
    })

// To check using package name (Android only):
CheckInstalledApps
    .isAppInstalledAndroid('whatsapp') 
    .then((isInstalled) => {
        // if the app is installed then isInstalled is true otherwise not
    });

/** 
* if your app is not listed, you could manually create the package
* using the helper createPackage from the library
*/

const packageName = "com.ubercab";
const urlScheme ="uber";
const urlParams = "";

const uberPackage = CheckInstalledApps.createPackage(packageName, urlScheme urlParams);

CheckInstalledApps
  .isAppInstalled(uberPackage)
  .then((isInstalled) => {
      // if the app is installed then isInstalled is true otherwise not
  });

CheckInstalledApps
    .isAppInstalledIOS(uberPackage)
    .then((isInstalled) => {
      // if the app is installed then isInstalled is true otherwise not
    })

CheckInstalledApps
    .isAppInstalledAndroid(uberPackage) 
    .then((isInstalled) => {
        // if the app is installed then isInstalled is true otherwise not
    });
```


