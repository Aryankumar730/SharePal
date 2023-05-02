import React from 'react';
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES } from '../constants';
import { WhySharePal, Productdata, ScreenHeaderBtn, Review, TopCategory, Banner, Footer} from '../components';
import Ridingdata from '../Category_JSON_data/Riding.json';
import PSdata from '../Category_JSON_data/PS4.json';
import GameingConsole from '../Category_JSON_data/GamingConsole.json';
import WinterWear from "../Category_JSON_data/Winterwear.json";
import Cameras from '../Category_JSON_data/Camera.json';
import Trekking from '../Category_JSON_data/Trekking.json';
import ActionCamera from '../Category_JSON_data/ActionCamera.json';
import { BannerData } from "../components/home/banner/Bannerdata";


export default function Home() {


    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>



            <Stack.Screen
        options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
                < ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
                < ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: ""
        }}
    />

            <ScrollView showsHorizontalScrollIndicator={false} >

                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}
                >
                    <Banner data={BannerData} />

                    <TopCategory />

                    <Productdata
                        name = "Trekking Gear"
                        header="TrekkingGear"
                        data={Trekking.data}
                    />

                    <Productdata
                        name = "Riding Gear"
                        header="RidingGear"
                        data={Ridingdata.data}
                    />

                    <Productdata
                        name = "Action Camera"
                        header="ActionCamera"
                        data={ActionCamera.data}
                    />

                    <Productdata
                        name = "Cameras"
                        header="Cameras"
                        data={Cameras.data}
                    />

                    <Productdata
                        name = "Gaming Console"
                        header="GamingConsole"
                        data={GameingConsole.data}
                    />

                    <Productdata
                        name = "PS4 Games"
                        header="PS4Games"
                        data={PSdata.data}
                    />

                    <Productdata
                        name = "Winter Wear"
                        header="WinterWear"
                        data={WinterWear.data}
                    />

                    <WhySharePal />

                    <Review />

                    <Footer />

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}