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

const isAppInstalledAndroid = packageName =>
  new Promise((res, rej) =>
    NativeModules.CheckInstalledApps
      .isAppInstalled(packageName, (isInstalled) => res(isInstalled))
  )

const isAppInstalledIOS = (key) =>
  new Promise((res, rej) =>
    Linking
      .canOpenURL(key.urlScheme + '://' + (key.urlParams || ''))
      .then(isInstalled => res(isInstalled))
      .catch(err => rej(err))
  )

function isAppInstalled(keyOrPackage) {
  const pkg = APP_LIST[keyOrPackage] || keyOrPackage;

  return Platform.select({
    ios: () => isAppInstalledIOS(pkg),
    android: () => isAppInstalledAndroid(pkg.pkgName),
  })();
}

export {
  isAppInstalled,
  isAppInstalledIOS,
  isAppInstalledAndroid,
}
