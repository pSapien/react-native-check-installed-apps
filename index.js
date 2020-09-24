import { NativeModules, Linking, Platform } from 'react-native';

const createPackage = (pkgName, urlScheme, urlParams) => ({
  pkgName,
  urlScheme,
  urlParams
});

const APP_LIST = {
  "facebook": createPackage("com.facebook.katana", "fb", "requests"),
  "whatsapp": createPackage("com.whatsapp", "whatsapp", "app"),
  "instagram": createPackage("com.instagram.android", "instagram", "app"),
  "viber": createPackage("com.viber.voip", "viber"),
  "facebook_messenger": createPackage("com.facebook.orca", "fb-messenger", "user-thread/{user-id}"),
  "gmail": createPackage("com.google.android.gm", "googlegmail", "co?subject=foo&body=bar"),
  "snapchat": createPackage("com.snapchat.android", "snapchat", "?u=foo"),
  "skype": createPackage("com.skype.raider", "skype", "echo123?call"),
  "slack": createPackage("com.Slack", "slack", "open"),
}

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
