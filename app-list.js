const createPackage = (pkgName, urlScheme, urlParams) => ({
  pkgName,
  urlScheme,
  urlParams
});

/**
 * @url https://github.com/redpandatronicsuk/react-native-check-app-install/blob/master/app-list.js
 */

const APP_LIST = {
  "whatsapp": createPackage("com.whatsapp", "whatsapp", "app"),
  "facebook": createPackage("com.facebook.katana", "fb", "requests"),
  "facebook messenger": createPackage("com.facebook.orca", "fb-messenger", "user-thread/{user-id}"),
  "skype": createPackage("com.skype.raider", "skype", "echo123?call"),
  "wechat": createPackage("com.tencent.mm", "weixin", "dl/chat"),
  "snapchat": createPackage("com.snapchat.android", "snapchat", "?u=foo"),
  "twitter": createPackage("com.twitter.android", "twitter", "messages"),
  "youtube": createPackage("com.google.android.youtube", "youtube", "watch?v=dQw4w9WgXcQ"),
  "netflix": createPackage("com.netflix.mediaclient", "nflx", ""),
  "instagram": createPackage("com.instagram.android", "instagram", "app"),
  "spotify": createPackage("com.spotify.mobile.android.ui", "spotify", "http://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"),
  "slack": createPackage("com.Slack", "slack", "open"),
  "pinterest": createPackage("com.pinterest", "pinterest", "pin/285063851385287883/"),
  "uber": createPackage("com.ubercab", "uber", ""),
  "amazon": createPackage("com.amazon.mShop.android.shopping", "amazon", "content/item?id=B007Q4OVHQ"),
  "soundcloud": createPackage("com.soundcloud.android", "soundcloud", "tracks/63085864"),
  "google maps": createPackage("com.google.android.apps.maps", "comgooglemaps", "?center=40.765819,-73.975866&zoom=14&views=traffic"),
  "chrome": createPackage("com.android.chrome", "googlechrome", "github.com"),
  "gmail": createPackage("com.google.android.gm", "googlegmail", "co?subject=foo&body=bar"),
  "google drive": createPackage("com.google.android.apps.docs", "googledrive", ""),
  "dropbox": createPackage("com.dropbox.android", "xxx", ""),
  "google hangouts": createPackage("com.google.android.talk", "com.google.hangouts", ""),
  "evernote": createPackage("com.evernote", "evernote", "root"),
  "vlc": createPackage("org.videolan.vlc", "vlc", ""),
  "tumblr": createPackage("com.tumblr", "tumblr", "x-callback-url/dashboard"),
  "flickr": createPackage("com.yahoo.mobile.client.android.flickr", "flickr", ""),
  "linkedin": createPackage("com.linkedin.android", "linkedin", ""),
  "google": createPackage("com.google.android.googlequicksearchbox", "google", ""),
};

export {
  createPackage,
  APP_LIST,
}