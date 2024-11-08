import { View, Text, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#F9F9F9', // Light background color for better contrast
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0', // Subtle border for separation
    },
    icon: {
        marginRight: 12,
        color: '#1A73E8', // A blue shade for accent color
        fontSize: 24, // Increase icon size for better visibility
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    image: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
        borderRadius: 12
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333', // Darker color for readability
    },
    descriptionText: {
        fontSize: 14,
        color: '#666666', // Subtle gray for a modern look
        lineHeight: 22, // Better readability with increased line height
        marginTop: 8,
    },
});

const Boat = ({ icon_name, name, description, picture, nameStyle, descriptionStyle, imageStyle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon
                    name={icon_name}
                    size={24}
                    color="#909090"
                    style={styles.icon}
                />
                <Text style={nameStyle}>{name}</Text>
            </View>
            <Text style={descriptionStyle}>{description}</Text>
            <Image
                source={picture}
                style={[styles.image, imageStyle]}
            />
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         paddingHorizontal: 20,
//         paddingVertical: 10
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     icon: {
//         marginRight: 10
//     },
//     image: {
//         width: '100%',
//         height: 200,
//         resizeMode: 'cover',
//         marginVertical: 10,
//         borderRadius: 8,
//     }
// });

export default Boat;


