# react-native-check-installed-apps

## Getting started

```
npm install react-native-check-installed-apps --save
yarn add react-native-check-installed-apps
```

### Link to React native

`$ react-native link`

## Usage
Check out the example app in the [example](https://github.com/pSapien/react-native-check-installed-apps/tree/master/example/App.js) folder.

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

## LIST OF APPS 

For list of apps you could refer [app-list](https://github.com/pSapien/react-native-check-installed-apps/blob/master/app-list.js)

- whatsapp 
- facebook 
- facebook messenger 
- skype 
- wechat 
- snapchat 
- twitter 
- youtube 
- netflix 
- instagram 
- spotify 
- slack 
- pinterest 
- uber 
- amazon 
- soundcloud 
- google maps 
- chrome 
- gmail 
- google drive 
- dropbox 
- google hangouts 
- evernote 
- vlc 
- tumblr 
- flickr 
- linkedin 
- google 

---
**NOTE**

If your app is not in the list of apps in the library, you could always use `createPackage` helper
to create the package.

---

## ISSUES

If you have problem using some of the App like `Viber`.
Make sure you have listed the app in `Info.plist`

```
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>viber</string>
</array>
```