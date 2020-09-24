import { NativeModules, Linking, Platform } from 'react-native';
import { createPackage, APP_LIST } from './app-list';

const resolvePackage = (keyOrPackage) => APP_LIST[keyOrPackage] || keyOrPackage;

function isAppInstalledAndroid(keyOrPackage) {
  const { pkgName } = resolvePackage(keyOrPackage);

  return new Promise(res => {
    return NativeModules.CheckInstalledApps.isAppInstalled(pkgName, (isInstalled) => res(isInstalled)) 
  });
}

function isAppInstalledIOS(keyOrPackage) {
  const { urlScheme, urlParams = '' } = resolvePackage(keyOrPackage);

  return new Promise((res, rej) =>
    Linking
      .canOpenURL(urlScheme + '://' + (urlParams))
      .then(isInstalled => res(isInstalled))
      .catch(err => rej(err))
  )
}

function isAppInstalled(keyOrPackage) {
  return Platform.select({
    ios: () => isAppInstalledIOS(keyOrPackage),
    android: () => isAppInstalledAndroid(keyOrPackage),
  })();
}

export {
  isAppInstalled,
  isAppInstalledIOS,
  isAppInstalledAndroid,
  createPackage,
}
