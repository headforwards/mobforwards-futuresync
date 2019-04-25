import Firebase from 'firebase';
import config from './config';

class FirebaseService {
    speakers = [];

    constructor(){
       // Firebase.initializeApp(config);
         var ref = Firebase.database().ref("/speakers");
         ref.on("value", data => {
            this.speakers = data.val();
        });
    }

    getSpeakers = () => {  
        return this.speakers;
    }
} 

export default FirebaseService;