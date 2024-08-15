import React, { useState } from 'react';
import { Button, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import Toast from 'react-native-toast-message';
import { uploadPdf } from '../utils/uploadPdf';

const PdfUploadScreen = () => {
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [file, setFile] = useState<DocumentPickerResponse | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  const selectPdf = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setFile(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.log('Unknown error: ', err);
        throw err;
      }
    }
  };

  const onUpload = async () => {
    if (!file) return console.error('File not selected');
    try {
      const uploadedUrl = await uploadPdf(file, setUploading, setTransferred);
      if (!uploadedUrl) {
        console.error('Uploaded URL not found');
      } else {
        setUrl(uploadedUrl);
        Toast.show({
          type: 'success',
          text1: 'Upload Berhasil',
          text2: 'File Anda telah berhasil diupload',
        });
      }
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        text1: 'Upload Gagal',
        text2: 'File Anda gagal diupload',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PDF Upload</Text>
      <Button title="Select PDF" onPress={selectPdf} />
      {file && <Text>{file.name}</Text>}
      {file && (
        <Button title="Upload" onPress={onUpload} disabled={uploading} />
      )}
      {uploading && (
        <View style={styles.uploadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.uploadingText}>{`${transferred}% Uploaded`}</Text>
        </View>
      )}
      {url && (
        <Text style={styles.urlText}>Uploaded URL: {url}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  uploadingContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  uploadingText: {
    fontSize: 16,
    marginTop: 10,
  },
  urlText: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PdfUploadScreen;
