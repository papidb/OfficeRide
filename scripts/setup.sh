# npm i react-native-image-crop-picker --save
cd ios/ && pod install
cd ..
react-native link react-native-webview
react-native link react-native-gesture-handler
react-native link react-native-vector-icons
react-native link react-native-image-crop-picker
react-native link react-native-image-resizer
react-native link react-native-linear-gradient
cd ios/ && pod install
cd ..