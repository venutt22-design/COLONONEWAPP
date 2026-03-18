import { Video } from 'expo-av';
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AtHome() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>การปฏิบัติตัวที่บ้าน</Text>
      <Text style={styles.subHeader}>คำแนะนำการรับประทานอาหาร:</Text>
      <Text style={styles.body}>• รับประทานอาหารอ่อน ย่อยง่าย 2 วันก่อนตรวจ</Text>
      
      <Video 
        source={require('../assets/videos/myluckyboy.mp4')} 
        style={styles.video} useNativeControls resizeMode="contain" 
      />

      <Text style={styles.subHeader}>คำแนะนำเพิ่มเติม:</Text>
      <Text style={styles.body}>• งดอาหารที่มีกากใยสูง เช่น ผัก ผลไม้...</Text>

      <View style={styles.footer}>
        <Link href="/hospital" asChild>
          <TouchableOpacity style={styles.nextBtn}><Text style={styles.white}>เรียนต่อไป: รพ.</Text></TouchableOpacity>
        </Link>
        <Link href="/" asChild>
          <TouchableOpacity><Text>กลับหน้าหลัก</Text></TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 50, marginBottom: 20 },
  subHeader: { fontSize: 18, fontWeight: 'bold', color: '#007AFF', marginBottom: 10 },
  body: { fontSize: 16, lineHeight: 24, marginBottom: 20, color: '#555' },
  video: { width: '100%', height: 210, borderRadius: 12, backgroundColor: '#000', marginBottom: 20 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginBottom: 60 },
  nextBtn: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 12 },
  white: { color: '#fff', fontWeight: 'bold' }
});