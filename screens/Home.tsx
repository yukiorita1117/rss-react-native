import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { ListItem } from "react-native-elements";
import xml2js from "react-native-xml2js";

export const HomeScreen = ({ navigation }: any) => {
  const [rssList, setRssList] = useState();

  const fetchRss = async () => {
    await fetch("https://blog.ojisan.io/rss.xml")
      .then((res) => res.text())
      .then((xml) => {
        const parser = xml2js.Parser();
        parser.parseString(xml, (err: any, result: any) => {
          setRssList(result.rss.channel[0].item);
        });
      });
  };

  useEffect(() => {
    fetchRss();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={rssList}
        renderItem={({ item }) => (
          <ListItem>
            {/* 押下すると半透明になるbuttonコンポーネント */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details", { item: item });
              }}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title[0]}</Text>
                <Text style={styles.link}>
                  {new Date(Date.parse(item.pubDate[0])).toLocaleDateString(
                    "ja"
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          </ListItem>
        )}
        keyExtractor={(item) => item.link[0]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    padding: 0,
  },
  body: {
    backgroundColor: "#fff",
  },
  header: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  row: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    color: "#000",
    fontSize: 16,
  },
  link: {
    color: "#db7093",
    fontSize: 12,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
});
