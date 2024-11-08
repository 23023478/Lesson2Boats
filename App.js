import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import Boat from './components/Boat';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5', // Light gray background for a clean look
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        marginBottom: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#333333',
        flex: 1, // Take up available space within header
    },
    boatName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A73E8',
        marginVertical: 5,
        textAlign: 'center',
    },
    descriptionContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 20
    },
    description: {
        fontSize: 15,
        color: '#666666',
        lineHeight: 20,
        flexShrink: 1 // Allows description to wrap if it’s too long
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 15,
    },
    imageStyle: {
        width: '100%',
        height: 220,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10
    },
    footerButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        backgroundColor: '#1A73E8',
        marginHorizontal: 5,
        borderRadius: 8
    },
    footerButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

const AllBoats = () => {
  return (
      <ScrollView>
        <StatusBar
            backgroundColor="#cccccc"
            barStyle="dark-content"
        />
        <Text style={styles.title}>GetABoat - For Sale</Text>
        <Text></Text>
        <Boat
            icon_name='sailboat'
            name='Sea Ray 500 Sundancer'
            description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'
            picture={require('./img/sea_ray.jpg')}
            nameStyle={styles.boatName}
            descriptionStyle={styles.description}
        />
        <Text></Text>
        <Boat
            icon_name='sailboat'
            name='Four Winns Horizon 180'
            description='A sporty look and refined details truly set the Horizon 180 above all others.'
            picture={require('./img/four_winns.jpg')}
            nameStyle={styles.boatName}
            descriptionStyle={styles.description}
        />
        <Text></Text>
        <Boat
            icon_name='sailboat'
            name='Flipper 640 ST'
            description='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
            picture={require('./img/flipper.jpg')}
            nameStyle={styles.boatName}
            descriptionStyle={styles.description}
        />
        <Text></Text>
        <Boat
            icon_name='sailboat'
            name='Princess V48'
            description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
            picture={require('./img/princess.jpg')}
            nameStyle={styles.boatName}
            descriptionStyle={styles.description}
        />
        <Text></Text>
        <Boat
            icon_name='sailboat'
            name='Bayliner 175 Bowrider'
            description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
            picture={require('./img/bayliner.jpg')}
            nameStyle={styles.boatName}
            descriptionStyle={styles.description}
        />
        <Text></Text>
        <Boat
            icon_name='sailboat'
            name='Fairline Targa 47'
            description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'
            picture={require('./img/fairline.jpg')}
            nameStyle={styles.boatName}
            descriptionStyle={styles.description}
        />
      </ScrollView>
  );
};

export default AllBoats;

