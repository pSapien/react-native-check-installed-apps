import React from 'react';
import { Text, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';

import { isAppInstalled, createPackage } from '../index';
import { Table, Rows, Header } from './Table';

const apps = [
  'facebook',
  'whatsapp',
  'instagram',
  'facebook_messenger',
  'skype',
  'slack',
  'viber',
]

const customApps = [
  ["com.ubercab", "uber", ""],
  ["com.google.android.gm", "googlegmail", "co?subject=foo&body=bar"],
]

const createInstalledApp = (app, isInstalled) => ([
  app.split('_').join(' '),
  isInstalled ? "✅" : "❌",
])

export default function App() {
  const [installedApps, setInstalledApps] = React.useState([]);

  React.useEffect(() => {
    async function checkInstalledApps() {
      const _installedApps = [];

      for await (const app of apps) {
        const isInstalled = await isAppInstalled(app);
        const installedApp = createInstalledApp(app, isInstalled);

        _installedApps.push(installedApp);
      }

      for await (const customApp of customApps) {
        const customPackage = createPackage(...customApp);
        const isInstalled = await isAppInstalled(customPackage);
        const installedApp = createInstalledApp(customApp[1], isInstalled);

        _installedApps.push(installedApp);
      }

      setInstalledApps(_installedApps);
    }

    checkInstalledApps();
  }, []);

  if (installedApps.length === 0) return <ActivityIndicator />

  return (
    <SafeAreaView>
      <Text style={styles.title}>Installed/Not-Installed Apps</Text>
      <Table>
        <Header headers={['App', 'Installation']} />
        <Rows data={installedApps} />
      </Table>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    height: 75,
    width: '100%',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})
