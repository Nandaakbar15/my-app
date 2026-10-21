import { ScrollView, View } from "react-native";

import PropsComponent from "@/components/PropsComponent";

export default function App() {
  // const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        {/* <FlexBox /> */}
        {/* <PositionComponent /> */}
        <PropsComponent />
      </ScrollView>
    </View>
  );
}
