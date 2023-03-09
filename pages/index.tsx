import { Text, View } from "react-native";
import { Link } from "../components/Link";

export default function Index() {
  return (
    <View>
      <Link href="/404">
        <Text>Broken link</Text>
      </Link>
    </View>
  );
}
