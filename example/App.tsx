import { useEvent } from "expo";
import Alert2 from "alert2";
import Alert from "react-native";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function App() {
  console.log(Alert2.alert);
  const alertParam = {
    title: "Hello",
    message: "World",
    buttons: [
      { text: "OK", onPress: () => console.log("OK Pressed") },
      {
        text: "cancel",
        onPress: () => console.log("OK Pressed"),
        style: "destructive" as const,
      },
    ],
    options: { cancelable: true },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Pressable
          onPress={async () => {
            Alert2.alert(
              alertParam.title,
              alertParam.message,
              alertParam.buttons,
              // alertParam.options,
            );
          }}
        >
          <Text>Press me</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
};
