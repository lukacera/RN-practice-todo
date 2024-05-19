import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HeaderLogo() {
  // Create animated values
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Scale animation
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();

    // Rotate animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [scaleAnim, rotateAnim]);

  // Interpolate rotation value
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  
  return (
    <View className="flex mt-10 justify-center items-center flex-row gap-3">
      <Text className="font-serif text-[2rem]">
        To-do app
      </Text>
      <View className="relative">
        <Animated.Text style={{ transform: [{ scale: scaleAnim }, { rotate }] }} className="absolute top-0 -right-20">
          <AntDesign name="check" size={35} color="black" />
        </Animated.Text>
        <Animated.Text style={{ transform: [{ scale: scaleAnim }, { rotate }] }} 
        className="text-blue-500 text-2xl font-bold absolute top-0 -right-10 rotate-6">
          <AntDesign name="check" size={40} />
        </Animated.Text>
        <Animated.Text style={{ transform: [{ scale: scaleAnim }, { rotate }] }} className="text-green-500 text-2xl font-bold absolute rotate-45 top-10">
          <AntDesign name="check" size={40} />
        </Animated.Text>
      </View>
    </View>
  );
}
