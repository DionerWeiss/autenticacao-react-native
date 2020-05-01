import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Dashboard: React.FC = () => {
    const { singOut, user } = useAuth();

    function handleSignOut() {
        singOut()
    }

    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title="Sing Out" onPress={handleSignOut} />
        </View>
    )
}

export default Dashboard;