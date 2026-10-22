import { ScrollView, View } from "react-native";
import PostData from "./pages/PostData/PostData";

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
        {/* <SampleComponent /> */}
        {/* <StylingReactNativeComponent /> */}
        {/* <FlexBox /> */}
        {/* <PositionComponent /> */}
        {/* <PropsComponent /> */}

        {/* <BasicJavascript /> */}
        {/* <ReactNativeSVG /> */}

        <PostData />
      </ScrollView>
    </View>
  );
}
