import React from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InteractiveCard from "../components/InteractiveCard";
import CustomInput from "../components/CustomInput";

function MenuScreen({route, navigation}) {

    return (
        <ScrollView style={styles.container}>
            <View style={{marginBottom: 8}}>
                <CustomInput placeholder="Recherche"/>
            </View>
            <View style={styles.grid}>
                <InteractiveCard onPress={() => navigation.navigate("EventList")}>
                    <MaterialCommunityIcons name="calendar" size={65}/>
                    <Text>Évenements</Text>
                </InteractiveCard>
                <InteractiveCard>
                    <MaterialCommunityIcons name="timeline" size={65}/>
                    <Text>Parcours</Text>
                </InteractiveCard>
            </View>
            <View style={styles.grid}>
                <InteractiveCard>
                    <MaterialCommunityIcons name="map" size={65}/>
                    <Text>Carte</Text>
                </InteractiveCard>
                <InteractiveCard>
                    <MaterialCommunityIcons name="calendar-plus" size={65}/>
                    <Text>Mes événements</Text>
                </InteractiveCard>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    grid:{
        flexDirection:"row",
    },
})

export default MenuScreen;