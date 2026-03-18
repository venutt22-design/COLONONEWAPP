import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  return (
    <ImageBackground 
      source={require('../assets/images/firstpagewall.png')} 
      style={styles.bg}
    >
      <View style={styles.overlay}>
        <Text style={styles.mainTitle}>คำแนะนำการเตรียมลำไส้ก่อนการส่องกล้อง</Text>
        <Text style={styles.subTitle}>colonoscopy preparation</Text>
        
        <Link href="/checklist" asChild>
          <TouchableOpacity style={styles.glowBtn}>
            <Text style={styles.btnText}>เข้าสู่รายการบทเรียน</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center', padding: 25 },
  mainTitle: { fontSize: 34, fontWeight: 'bold', color: '#fff', textAlign: 'center', lineHeight: 45 },
  subTitle: { fontSize: 18, color: '#eee', marginTop: 15, textTransform: 'uppercase', letterSpacing: 1 },
  glowBtn: {
    marginTop: 50, backgroundColor: '#00d4ff', paddingVertical: 18, paddingHorizontal: 45, borderRadius: 35,
    shadowColor: '#00d4ff', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.9, shadowRadius: 20, elevation: 15,
  },
  btnText: { color: '#fff', fontSize: 20, fontWeight: 'bold' }
});