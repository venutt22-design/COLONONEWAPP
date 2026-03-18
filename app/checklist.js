import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Checklist() {
  const menu = [
    { id: '/athome', t: '2.1 การปฏิบัติตัวที่บ้าน' },
    { id: '/hospital', t: '2.2 การปฏิบัติตัวเมื่ออยู่โรงพยาบาล' },
    { id: '/scope', t: '2.3 ขั้นตอนการส่องกล้องเบื้องต้น' },
    { id: '/feces', t: '2.4 ประเมินลักษณะอุจจาระ' },
    { id: '/contact', t: '2.5 ติดต่อเจ้าหน้าที่' },
    { id: '/download', t: '2.6 ดาวน์โหลดแผ่นพับ' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Checklist การเตรียมตัว</Text>
      {menu.map((item) => (
        <Link key={item.id} href={item.id} asChild>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{item.t}</Text>
          </TouchableOpacity>
        </Link>
      ))}
      <Link href="/" asChild>
        <TouchableOpacity style={styles.backBtn}><Text>กลับหน้าแรก</Text></TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F9FC', padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', marginTop: 60, marginBottom: 30, color: '#1A1C1E' },
  card: { backgroundColor: '#fff', padding: 22, borderRadius: 16, marginBottom: 15, borderWidth: 1, borderColor: '#E1E3E8', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 },
  cardText: { fontSize: 17, color: '#444', fontWeight: '500' },
  backBtn: { alignSelf: 'center', marginTop: 30, marginBottom: 60 }
});