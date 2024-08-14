import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/firebase";
import Toast from "react-native-toast-message";

type UploadImage = (
  image: string,
  setUploading?: React.Dispatch<React.SetStateAction<boolean>>,
  setTransferred?: React.Dispatch<React.SetStateAction<number>>,
  setUrl?: React.Dispatch<React.SetStateAction<string>>,
) => Promise<string | void>

export const uploadImage :UploadImage = async (
  image,  
  setUploading, 
  setTransferred,
) => {
  if(!image) return console.error('Image not found')
    console.log("IMAGE", image)
  // Mengambil nama file dari path gambar
  // substring: mengambil substring dari string
  // lastIndexOf: mencari posisi terakhir dari karakter '/'
  let filename = image.substring(image.lastIndexOf('/') + 1);
  console.log("FILENAME", filename)

  // Mengambil ekstensi file
  // split: memecah string menjadi array berdasarkan separator '.'
  // pop: mengambil elemen terakhir dari array
  const extension = filename.split('.').pop();
  console.log("EXTENSION", extension)

  // Mengambil nama file tanpa ekstensi
  // split: memecah string menjadi array berdasarkan separator '.'
  // slice: mengambil semua elemen array kecuali elemen terakhir
  // join: menggabungkan elemen array menjadi string dengan separator '.'
  const fileNameWithoutExtension = filename.split('.').slice(0,-1).join('.')
  console.log("FILENAME WITHOUT EXTENSION", fileNameWithoutExtension)

  // Membuat nama file baru dengan menambahkan timestamp
  filename = fileNameWithoutExtension + Date.now() + '.' + extension;
  console.log("FILENAME + TIMESTAMP", filename)

  // Mengatur state uploading menjadi true
  // setUploading!(true);

  // Mengatur progress transfer awal menjadi 0
  // setTransferred!(0);

  // Membuat referensi ke lokasi penyimpanan di Firebase Storage
  const storageRef = ref(storage, `profile/${filename}`);

  // Mengambil data file dari URI menggunakan fetch
  const res = await fetch(image);

  // Mengkonversi response menjadi blob
  const blob = await res.blob();

  // Memulai proses upload blob ke Firebase Storage
  const uploadTask = uploadBytesResumable(storageRef, blob);

  // Menambahkan listener untuk memantau progress upload
  uploadTask.on('state_changed', (snapshot) => {
    // Menampilkan jumlah byte yang telah diupload dan total byte
    console.log(
      `${snapshot.bytesTransferred} transferred out of ${snapshot.totalBytes}`,
    );

    // Menghitung dan mengatur persentase progress upload
    // setTransferred!(
    //   Math.round(snapshot.bytesTransferred / snapshot.totalBytes) *
    //   100,
    // );
  })


  try {
    // Menunggu hingga proses upload selesai
    await uploadTask;

    // Mengambil URL download dari file yang telah diupload
    const url = await getDownloadURL(storageRef);
    // setUploading!(false);
    Toast.show({
      type: 'success',
      text1: 'Upload Berhasil',
      text2: 'Foto Anda telah diupload'
    })
    return url
  } catch (err) {
    console.log(err)
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Upload Gagal'
    })
  }
}