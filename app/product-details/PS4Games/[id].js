import React, {useEffect, useState} from 'react';
import { SafeAreaView, ScrollView, View, Text} from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { COLORS, icons } from '../../../constants';
import PS4Games from '../../../Category_JSON_data/PS4.json';
import {  ScreenHeaderBtn, Home, ProductFooter } from '../../../components';
export default function ProductDetails() {

    const params = useSearchParams();
    const router = useRouter();

    const [data, setData] = useState({});

    useEffect(() => {

        const info = PS4Games.data.find((item) => item.data_id == params.id);

        if (info) {
            setData(info);
        }
        else {
            console.log("not available");
        }

    }, [params.id])

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


                <Home
                        item={data}
                    />



                </ScrollView>
                <ProductFooter/>
            </>
        </SafeAreaView>

    )
}
