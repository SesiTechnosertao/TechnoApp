import { View, TouchableOpacity, Image, Text } from 'react-native';
import { style } from './styles'

function QrButton({ navigation, route }) {

    return (
        <View>
            <TouchableOpacity onPressIn={() => navigation.navigate(route)}>
                <View style={style.qrbutton}>
                    <Image
                        style={style.imgStyle}
                        source={require('../../assets/images/qrcode_img.png')}
                    />
                    <Text style={style.textButton}>LER QR CODE</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default QrButton;