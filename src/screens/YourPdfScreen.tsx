import React, { useState } from 'react';
import { View, Text, Button, Alert, Platform, TouchableOpacity } from 'react-native';
import { useAuthContext } from '../contexts/AuthContext';
import { useQuery } from '@apollo/client';
import { getProyek } from '../api/query/proyek.query';
import { Proyek } from '../__generated__/graphql';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import { baseStyles } from '../styles';

const LaporanAsPdf = () => {
  const { user } = useAuthContext();
  const proyekId = user?.mahasiswa?.proyekId || user?.mahasiswa?.kelompok?.proyekId || user?.dosen?.proyekId;
  const { data } = useQuery<{
    getProyek: Proyek
  }>(getProyek, {
    variables: { id: proyekId },
  });

  const proyek = data?.getProyek;
  const [pdfFilePath, setPdfFilePath] = useState<string | null>(null);

  console.log(JSON.stringify(proyek, null, 2));

  const createAndSavePDF = async () => {
    if (!proyek) return;
    let htmlContent = '';
    if (proyek.kelompok?.length === 0) {
      htmlContent = `
        <h1>${proyek.name}</h1>
        <p>Deskripsi: ${proyek.description}</p>
        <p>Lokasi: ${proyek.lokasi}</p>
        <p>Jenis Proyek: ${proyek.type}</p>
        <p>Mulai: ${new Date(parseInt(proyek.tanggalMulai!)).toLocaleDateString()}</p>
        <p>Selesai: ${new Date(parseInt(proyek.tanggalSelesai!)).toLocaleDateString()}</p>
        <p>Dosen Pembimbing:</p>
        <ul>
          ${proyek.pembimbing!.map(dosen => `<li>${dosen!.fullname} (NIDN: ${dosen!.nidn})</li>`).join('')}
        </ul>
        <ul>
          ${proyek.mahasiswa!.map(mahasiswa => `<li>${mahasiswa!.fullname} (NIM: ${mahasiswa!.nim}, Nilai: ${mahasiswa?.nilai})</li>`).join('')}
        </ul>
      `
    } else {
      htmlContent = `
      <h1>${proyek.name}</h1>
      <p>Deskripsi: ${proyek.description}</p>
      <p>Lokasi: ${proyek.lokasi}</p>
      <p>Jenis Proyek: ${proyek.type}</p>
      <p>Mulai: ${new Date(parseInt(proyek.tanggalMulai!)).toLocaleDateString()}</p>
      <p>Selesai: ${new Date(parseInt(proyek.tanggalSelesai!)).toLocaleDateString()}</p>
      <p>Dosen Pembimbing:</p>
      <ul>
        ${proyek.pembimbing!.map(dosen => `<li>${dosen!.fullname} (NIDN: ${dosen!.nidn})</li>`).join('')}
      </ul>
      <p>Kelompok:</p>
      <ul>
        ${proyek.kelompok!.map(kelompok => `
          <li>${kelompok!.name} (Nilai: ${kelompok!.nilai})</li>
          <ul>
            ${kelompok!.mahasiswa!.map(mahasiswa => `<li>${mahasiswa!.fullname} (NIM: ${mahasiswa!.nim}, Role: ${mahasiswa!.role})</li>`).join('')}
          </ul>
        `).join('')}
      </ul>
    `;
    }



    try {
      const options = {
        html: htmlContent,
        fileName: proyek.name!,
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);
      console.log("FILE: ", file);
      setPdfFilePath(file.filePath!);

      if (file.filePath) {
        const downloadPath = Platform.OS === 'ios'
          ? `${RNFS.DocumentDirectoryPath}/${proyek.name}.pdf`
          : `${RNFS.DownloadDirectoryPath}/${proyek.name}.pdf`;

        await RNFS.copyFile(file.filePath, downloadPath);
        Alert.alert('Berhasil', `File PDF disimpan di: ${downloadPath}`);
      } else {
        throw new Error('File path tidak ditemukan');
      }
    } catch (error) {
      console.error('Error saat membuat atau menyimpan PDF:', error);
      Alert.alert('Gagal menyimpan PDF', 'Terjadi kesalahan saat membuat atau menyimpan PDF.');
    }
  };

  return (
    <TouchableOpacity
      style={[
        baseStyles.primaryButton, {
          marginVertical: 10
        }
      ]}
      onPress={createAndSavePDF}
    >
      <Text style={
        baseStyles.textButton
      }>
        PDF
      </Text>
    </TouchableOpacity>
  );
};

export default LaporanAsPdf;
