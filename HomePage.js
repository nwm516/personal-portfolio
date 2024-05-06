import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('./backstage.jpg')}
                style={styles.profileImage}
            />
            <Text style={styles.text}>NW Miller's Portfolio</Text>
            <Link href="/ProjectsPage" style={styles.link}>Projects</Link>
            <Link href="/SkillsPage" style={styles.link}>Skills</Link>
            <Pressable onPress={() => router.push("/ContactPage")}>
                <Text style={styles.link}>Contact Me</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#223',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 60,
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        color: "white",
    },
    link: {
        color: '#ea9',
        fontSize: 18,
        marginBottom: 10,
    },
});

export default HomePage;
