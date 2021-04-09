import React from 'react';
import { View, Text } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper'

export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View>
                            <Avatar.Image
                                source={require('../../assets/Img/img4.png')}
                                size={100} style={{ alignSelf: 'center', marginTop: 25 }}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Title style={styles.title}>user name</Title>
                            <Caption style={styles.caption}>xyz</Caption>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home-outline"
                                    color={color}
                                    size={size} />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="account-outline"
                                    color={color}
                                    size={size} />
                            )}
                            label="My Profile"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="file-account-outline"
                                    color={color}
                                    size={size} />
                            )}
                            label="My Listings"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="forum-outline"
                                    color={color}
                                    size={size} />
                            )}
                            label="Forums"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="cog-outline"
                                    color={color}
                                    size={size} />
                            )}
                            label="Setting"
                            onPress={() => { props.navigation.navigate('Setting') }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="help-circle-outline"
                                    color={color}
                                    size={size} />
                            )}
                            label="Help"
                            onPress={() => { }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="exit-to-app"
                                    color={color}
                                    size={size} />
                            )}
                            label="Log-Out"
                            onPress={() => { }} />

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}