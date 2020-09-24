import React from 'react';
import { Text, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';

import { isAppInstalled } from '../index';
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

export default function App() {
  const [installedApps, setInstalledApps] = React.useState([]);

  React.useEffect(() => {
    async function checkInstalledApps() {
      let _installedApps = [];

      for await (let app of apps) {
        const _installedApp = [];
        _installedApp[0] = app.split('_').join(' ');
        _installedApp[1] = (await isAppInstalled(app)()) ? "✅" : "❌";

        _installedApps.push(_installedApp);
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
