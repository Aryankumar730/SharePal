import React from 'react';
import { SafeAreaView, ScrollView} from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { COLORS, icons} from '../../constants';
import Footer from "../../components/home/footer/Footer";
import { CategoryHeader, ScreenHeaderBtn, Unit, ImageDisplay } from '../../components';

export default function CategoryDetails() {

  const params = useSearchParams();
  const router = useRouter();

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
            />
          ),
          headerTitle: ''
        }}
      />
      <>
        <ScrollView showsVerticalScrollIndicator={false} >

          <CategoryHeader />
          <Unit
            ID={params.id}
          />
          <ImageDisplay />
          <Footer />

        </ScrollView>
      </>
    </SafeAreaView>

  )
}
