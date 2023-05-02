import React from "react";
import { View, Text, Linking } from "react-native";
import styles from "./footer.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { openURL } from "expo-linking";

url = [
  {
    About: "https://sharepal.in/about-us",
  },
  {
    Why_SharePal: "https://sharepal.in/why-sharepal",
  },
  {
    Careers: "https://sharepal.in/careers",
  },
  {
    Blogs: "https://sharepal.in/bangalore",
  },
  {
    SiteMaps: "https://sharepal.in/bangalore",
  },
  {
    How_it_works: "https://sharepal.in/how-sharepal-works",
  },
  {
    FAQs: "https://sharepal.in/faq",
  },
  {
    Verification: "https://sharepal.in/complete-verification",
  },
  {
    Refund_Process: "https://sharepal.in/refund-process",
  },
  {
    Cancellation_Policy: "https://sharepal.in/cancellation_policy",
  },
  {
    Rental_Terms: "https://sharepal.in/terms-and-conditions",
  },
  {
    Shipping_Policy: "https://sharepal.in/shippping-policy",
  },
  {
    Damage_Policy: "https://sharepal.in/damage-policy",
  },
  {
    Terms_of_use: "https://sharepal.in/terms-of-use",
  },
  {
    Privacy_Policy: "https://sharepal.in/privacy-policy",
  },
  {
    Contact_number: "https://sharepal.in/bangalore",
  },
  {
    Email: "https://sharepal.in/bangalore",
  },
  {
    Facebook: "https://www.facebook.com/Sharepal.in",
  },
  {
    Instagram: "https://www.instagram.com/sharepal.in/",
  },
  {
    Linkedin: "https://www.linkedin.com/company/sharepal/",
  },
];

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.heading}>SharePal</Text>

        <View style={[styles.line, { width: 100 }]} />

        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[0].About)}
        >
          About Us
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[1].Why_SharePal)}
        >
          Why SharePal?
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[2].Careers)}
        >
          Careers
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[3].Blogs)}
        >
          Blogs
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[4].SiteMaps)}
        >
          Sitemaps
        </Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.heading}>Information</Text>

        <View style={[styles.line, { width: 130 }]} />

        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[5].How_it_works)}
        >
          How it works?
        </Text>
        <Text style={styles.title} onPress={() => Linking.openURL(url[6].FAQs)}>
          FAQs
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[7].Verification)}
        >
          Verification
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[8].Refund_Process)}
        >
          Refund Process{" "}
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[9].Cancellation_Policy)}
        >
          Cancellation Policy
        </Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.heading}>Policies</Text>

        <View style={[styles.line, { width: 87 }]} />

        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[10].Rental_Terms)}
        >
          Rental Terms & Condition
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[11].Shipping_Policy)}
        >
          Shipping Policy
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[12].Damage_Policy)}
        >
          Damage Policy
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[13].Terms_of_use)}
        >
          Terms of Use
        </Text>
        <Text
          style={styles.title}
          onPress={() => Linking.openURL(url[14].Privacy_Policy)}
        >
          Privacy Policy
        </Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.heading}>Need Help</Text>

        <View style={[styles.line, { width: 120 }]} />

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Ionicons
            name="call-outline"
            size={20}
            color="white"
            style={{ paddingRight: 10, paddingTop: 15 }}
          />
          <Text
            style={styles.title}
            onPress={() => Linking.openURL(url[15].Contact_number)}
          >
            +91 76192 20543
          </Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Ionicons
            name="mail-open-outline"
            size={20}
            color="white"
            style={{ paddingRight: 10, paddingTop: 15 }}
          />
          <Text
            style={styles.title}
            onPress={() => Linking.openURL(url[16].Email)}
          >
            care@sharepal.in
          </Text>
        </View>
      </View>

      <View style={styles.icons}>
        <Ionicons
          name="logo-facebook"
          size={40}
          color="white"
          style={{ paddingRight: 20, paddingTop: 15 }}
          onPress={() => Linking.openURL(url[17].Facebook)}
        />
        <Ionicons
          name="logo-instagram"
          size={40}
          color="white"
          style={{ paddingRight: 20, paddingTop: 15 }}
          onPress={() => Linking.openURL(url[18].Instagram)}
        />
        <Ionicons
          name="logo-linkedin"
          size={40}
          color="white"
          style={{ paddingRight: 20, paddingTop: 15 }}
          onPress={() => Linking.openURL(url[19].Linkedin)}
        />
      </View>
    </View>
  );
};

export default Footer;
