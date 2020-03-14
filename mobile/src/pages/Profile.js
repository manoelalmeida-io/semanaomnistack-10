import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
    const githubUsername = navigation.getParam('github_username'); 

    if (Platform.OS == 'android' && Platform.Version <= 22) {
        
        return null;
    }

    return (
        <WebView style={{ flex:1 }} source={{ uri: `https://github.com/${githubUsername}` }}/>
    );
}

export default Profile;