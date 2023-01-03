import { View, Text, Image } from "react-native";
import { ETHPrice } from "./SubInfo";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
        paddingHorizontal: SIZES.base,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View style={{ paddingLeft: 10 }}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 2,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <View style={{ paddingLeft: 137 }}>
        <ETHPrice price={bid.price} />
      </View>
    </View>
  );
};

export default DetailsBid;
