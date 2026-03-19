import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Feces() {
  const data = [
    { id: 1, img: require('../../assets/images/feces1.png'), txt: 'ระดับ 1: ยังมีกากอาหาร (ไม่พร้อม)' },
    { id: 2, img: require('../../assets/images/feces2.png'), txt: 'ระดับ 2: สีขุ่น (เริ่มเตรียมตัว)' },
    { id: 3, img: require('../../assets/images/feces3.png'), txt: 'ระดับ 3: เริ่มใส (ใกล้พร้อม)' },
    { id: 4, img: require('../../assets/images/feces4.png'), txt: 'ระดับ 4: ใสสีเหลือง (พร้อมส่องกล้อง)' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>ประเมินความพร้อมของลำไส้</Text>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.image} />
          <Text style={styles.txt}>{item.txt}</Text>
        </View>
      ))}
      <Link href="/checklist" asChild>
        <TouchableOpacity style={styles.backBtn}><Text style={styles.white}>กลับสู่เมนู</Text></TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F0F4F8' },
  header: { fontSize: 22, fontWeight: 'bold', marginTop: 50, marginBottom: 25 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 20, marginBottom: 20, alignItems: 'center' },
  image: { width: 180, height: 180, borderRadius: 15 },
  txt: { marginTop: 15, fontSize: 16, color: '#333', textAlign: 'center' },
  backBtn: { backgroundColor: '#333', padding: 18, borderRadius: 15, alignItems: 'center', marginBottom: 60 },
  white: { color: '#fff', fontWeight: 'bold' }
});
