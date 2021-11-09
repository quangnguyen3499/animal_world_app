import storage from '@react-native-firebase/storage';

class FireBaseService {
  static async getFolderStorage(url: string) {
    const folderRef = await storage().ref(url).listAll();
    return await Promise.all(folderRef.items.map((ref) => ref.getDownloadURL()));
  }
  static async getFileStorage(url: string) {
    return await storage().ref(url).getDownloadURL();
  }
}

export {FireBaseService};