import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';

export default function ArrowBack() {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
}