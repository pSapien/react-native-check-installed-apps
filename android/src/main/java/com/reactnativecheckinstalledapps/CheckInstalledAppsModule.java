package com.reactnativecheckinstalledapps;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.content.pm.PackageManager;
import android.content.Context;

public class CheckInstalledAppsModule extends ReactContextBaseJavaModule {

    Context ctx;
    private static ReactApplicationContext reactContext;

    public CheckInstalledAppsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.ctx = reactContext.getApplicationContext();
    }

    @Override
    public String getName() {
        return "CheckInstalledApps";
    }

    @ReactMethod
    public void isAppInstalled(String packageName, Callback callback) {
        PackageManager packageManger = this.ctx.getPackageManager();
        try {
            packageManger.getPackageInfo(packageName, PackageManager.GET_ACTIVITIES);
            callback.invoke(true);
        } catch (Exception e) {
            callback.invoke(false);
        }
    }
}
