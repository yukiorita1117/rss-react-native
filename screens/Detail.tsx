import React from "react";
import WebView from "react-native-webview";

export const DetailsScreen = ({ route, navigation }: any) => {
  const { item } = route.params;
  console.log(route);

  return (
    <>
      <WebView source={{ uri: item.link[0] }} stye={{ marginTop: 0 }} />
    </>
  );
};
