import storage from '@react-native-firebase/storage';

class FireBaseService {
  static async getStorage(url: string) {
    const fileRefs = await storage().ref(url).listAll();
    return await Promise.all(fileRefs.items.map((ref) => ref.getDownloadURL()));
  }
}

export {FireBaseService};