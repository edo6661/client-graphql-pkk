import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { storage } from '../config/firebase';

export const uploadPdf = async (file: DocumentPickerResponse, setUploading: (uploading: boolean) => void, setTransferred: (transferred: number) => void) => {
  return new Promise<string | null>(async (resolve, reject) => {
    try {
      const { uri, name, type } = file;

      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = async () => {
        const blob = xhr.response;

        const storageRef = ref(storage, `pdfs/${name}`);
        const uploadTask = uploadBytesResumable(storageRef, blob, { contentType: type! });

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setTransferred(Math.round(progress));
            setUploading(true);
          },
          (error) => {
            console.error('Upload error: ', error);
            setUploading(false);
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUploading(false);
              resolve(downloadURL);
            }).catch((error) => {
              console.error('Get download URL error: ', error);
              reject(error);
            });
          }
        );
      };

      xhr.onerror = () => {
        console.error('Network request failed');
        setUploading(false);
        reject(new Error('Network request failed'));
      };

      xhr.open('GET', uri);
      xhr.send();
    } catch (err) {
      console.error('Upload PDF error: ', err);
      setUploading(false);
      reject(err);
    }
  });
};
