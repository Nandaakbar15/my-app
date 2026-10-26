import { ScrollView, View } from "react-native";
import AddPostsData from "./pages/PostData/AddPostData";

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

        {/* <PostData /> */}
        <AddPostsData />
      </ScrollView>
    </View>
  );
}
