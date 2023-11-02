import { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { colors, icons, images, sizes } from '../constants';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components';

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: sizes.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
