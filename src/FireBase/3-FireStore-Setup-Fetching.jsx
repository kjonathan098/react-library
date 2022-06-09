/*

FireStore is a tool from FireBase that helps you setup backend pretty quickly

Giving you a lot of capialities like sign-up, user Auth, and storing data. 

In this tutorial we are going to learn how to fetch data from your FireStore server

BEFORE WE START MAKE SURE YOU WENT THROUGH THE STEPS OF CREATING PROJECT AND INSTALLING FIREBASE INTO YOUR PROJECT 

0.A - Make sure youre app is registered (with nickname)

*/
/* -------------------Creating Data Base and Fetching it  -----------------------------*/
/*

A - Create a file 'FireBaseConfig.js' where all your fireBase will live 

B - Once you created your file go to your project to retrieve its identtifiers and initiliaze firebase (project settings youll find it)

    B.1 Copy  import { initializeApp } from "firebase/app" at the top of file 
    
        (initilize app is the func inside firebase that connects your project to fireBase)

    B.2  Copy "firebaseConfig" from setting into your FB config file 

                        // Your web app's Firebase configuration
                                const firebaseConfig = {
                                apiKey: "AIzaSyB9SiHYDdUaD4vratX5I6B1KIK41XxcKSw",
                                 authDomain: "reactlibrary-d45e1.firebaseapp.com",
                                 projectId: "reactlibrary-d45e1",
                                storageBucket: "reactlibrary-d45e1.appspot.com",
                                 messagingSenderId: "244122617452",
                                appId: "1:244122617452:web:aa93a49d441314c55efa49"
                                };

    B.3 create a variable to connect your firebaseConfig to firebase by 

        const app = initializeApp(firebaseConfig)


C - Create a data Base 

    C.1 Go to fireStore and click on create database 
    
    C.2 Click on start in production mode & choose your closest location or where most of your user are 

    C.3 In our case go to rules and change false to true so anyone can post to the data base 


D - Create a collection in FireStore (Collection is the big picture/ the folder that containes all the individual files)

    D.2 Create a document (one of the files/entries)
         - Select auto ID 
         - enter the fields desired 



Now you have one entry on your Database CONGRATS! 


CONECTING YOUR APP TO THE  DATABASE 

E - Connect Data base to your project 

    E.1 import {getFirestore} from '@firebase/firestore'

    E.2 create a variable with with a value of getFirestore() and pass the App variable

        const db = getFirestore(app)





FETCHING DATA FROM YOUR DATABASE

IMPORTANT WE ARE DOING IT THE BEN WAY. HE CREATES AN OBJECT WITH ALL THE FIRESTORE FUNCTIONALIETIES

    EXPORT/IMPORT THE OBJECT WHERE NEEDED AND CALL THE FUNCTION NEEDED IN EACH SCENARIO.

    THIS HELPS KEEP THE CODE CLEAN 

    IN OUR CASE WE ARE EXPORTING THE OBJ TO 16-FireStore.jsx and using it there

F FETCHING 

    F.1 Create your OBJ 
    
        const APIHandler = { }
    
    F.2 Create your fetch async function and give a return value

         const APIHandler = {
	        fetchUser: async () => {},
        }

    F.3 We need to tell fireStore what collection are you talking about (folder) bc there can be multiple
         
        - create a ref to the collection with a variable and pass the db variable : const userReference = collection(db)
        - as a second parameter write the name of the collection you want to fetch : const userReference = collection(db, "users")
    
    F.4 import {collection, getDocs} from 'firebase/firestore'

             - getDocs is a function that will send back all the documents inside a collection (all the files from the folder)

    F.5 Now do you async await request using getDocs function to fetch and passing userReference as parameter

            const data = await getDocs(userReference)

    F.6 Go to the component where you need the data. Import APIHandler and create your fetch function

        	useEffect(() => {
		        const fetchUser = async () => {
			        const data = await APIHandler.fetchUser()
			        console.log(data)
		            }
		        fetchUser()
	            }, [])

    At this point you can see that our function returns Data whenever its being called. You can see the data being consoled log in 16-Firestore.jsx

G DECONSTRUCTING THE DATA 

    The data recieved is very weird and hidden. 

    We have to variables separate which are useful the data and the ID 
    
    So we want to extract both of them and put them in an array 

        G.1 declare a variable where to store your object users

                let user = []

        G.2  use the function .docs.maps to populate your array with eacht document (file)

               const users =  data.docs.map ((doc) => ({...doc.data(), id : doc.id}))

        G.3 Return your array

FINAL

Set your state with in your component  the new data and map through it to display info!

FUCKING DONE 
                


*/

/* -------------------- Adding Data to Firestore -------------------------------------- */

/* 

Since we already setup most of the things when creating our data base and fetching adding its much easier. 

G -   Adding Data to Firestore

    G.1 Import the function addDoc which adds a new document to the collection (add file to the folder)
                
        import { collection, getDocs, addDoc } from 'firebase/firestore'

    G.1.A create a variable that points to the collection (folder) where your data will live 

        const userProfileReference = collection(db, 'Names') //F.3


    G.2 Create your add new doc function inside youre APIHandler Obj

        addUser: async () => {}

    G.3 Create your async await addDocs function which takes 2 parameters 

        - 1 the reference to the collection we want to add (folder)
        - 2 the obj that we are adding to the collection (make sure it is written how you have your code reading it when fetching. Same variables)
        - 3 Remember to pass the values as an object in your parameters

                addUser: async ({ name, Age, favoriteFood }) => {
                    await addDoc(userReference, {
                        Age,
                        favoriteFood,
                        name, 
                    })
                }

    G.4 Import your APIHANDLER.addUser func wherever you need


*/

/* -------------------- Adding Auth email -------------------------------------- */

/*

Firebase makes it easy to add and login users to your app 

H.1 Go to your console project and setup whatever registering methods youll like (in this case email/password) in authentication tab

H.2 import {getAuth} from 'firebase/auth' this is a function that say that your app will be using authentication

H.3 create a variable in your config page and put your app as parameter 

        const auth = getAuth(app)

H.4 import { createUserWithEmailAndPassword } from 'firebase/auth'

H.5 create your function inside of firebase config object that holds your  createUserWithEmailAndPassword this function needs three parameters

        - the auth variable 
        - the user's email (being passed to it from your external component)
        - the user's password (being passed to it from your external component)

        registerNewUser : async (registerNewEmail,registerNewPassword ) => {
            await createUserWithEmailAndPassword(auth, registerNewEmail, registerNewPassword)
        }

H.6 Go to your component import firebaseConfig //  Call your function and pass the parameters back 

        const createNewUser = async ()=> {
            try{
                 const user = await firebaseConfig.registerNewUser(registerNewEmail, registerNewPassword)
            }
            catch(e){
                console.log(e.message)
            }
        }

    THERE YOU GO 
*/

/* -------------------- Login in with email -------------------------------------- */

/*
 
The login function is very similar to the creatUserwithEmailandPassword 

I.1 import {signInWithEmailAndPassword } from "firebase/auth"

I.2 Create your loggin function insdie your config file 
        - remember to pass your users loginEmail and Password to the function when its being called 

 logginUser : async (loginEmail, loginPassword ) => {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        }


*/

/* -------------------- Creating a User Profile -------------------------------------- */

/*

When you signup thourgh Firebase you only get certain data from the user (email, uid, etc) 

If you wanted to add name you need to store that in the database and not in the auth tab (you cant do it)

To this we follow a few steps 

J.1 Create a new Collection in your projects data base with the fields you want (Step D )

J.2 Now that you have your database Collection repeat steps (G to adding data to collection)

J.3 Lets say you added name into registration form.  youll send the name and UID to new collection so you can connect them both aferwards 

*/

/* -------------------- Updating live  -------------------------------------- */

/*

NEED TO FINISH NOT FINISHED 

Firestore has some real live capabilites to update your DOM when things changes 

K so the first thing we need to do as setup and active listener into our app who is constantly listening into our firebase data base for changes

K.1 To actively listen there is a method called on snapShot (similar to onClick). on snapShot => do something 

        - start by creating your function and write what collection you want to snapShot 

        userReference.onSnapshot()

K.2 Now this snapShot method will send you back a snapShot of the data at this moment. What you need to do is detect from the info back what has changed to do this write a callback function inside the method that detects the changes 

        userReference.onSnapshot(snapShot => { 
            let changes = snapShot.docChanges()
        })

*/

/* --------------------  Making Queries to FireBase -------------------------------------- */

/*

Queries is a useful method imported from firebaseFirestor where you can ask firbase to go ta na specific collection search in the documents for a specifi query and retrieve it to do it follow the simple steps 

L.1 import  

    {query} from firebase/firestore 

L.2 create a variable where you declare exactly where do you want to do the query (collection) and add  2 parameters with the search crietria you want 

        const q = query(usersReference, where('name' '==' 'Mosh'))

L.3 Now do your fetch function with the getDoc method pass your q variable 

        const userNameMosh = await getDoc(q)

L.4 Now you recieved your data you need to decode it like this 

		const users = data.docs.map((doc) => ({ ...doc.data() }))


*/

/* --------------------  Making Infinite Scrolling  -------------------------------------- */

/*

To do infinite Scorlloing we need to implement a few techniques 

M.1 setup all your firestore app, DB, Fetching  (A, B, C, E , F, G )

M.2 In our case were creating a second fetching function just to keep the original as an example and not destroy it 

M.3 Before you implement any parameters make sure you are recieving the data and deconstructing it properely in your DOM 

M.4 Now that we have all our data setup properylu qwe can start adding parameters to setup our infinite scroll 


       -  import a method called limit wich will limit the number of results send back to you from the fetch 
        - also you need to import a method called orderBy and send a parameter of what variable inside your firestore order you want the tweets to come back 
        import {limit, orderBy} 'firebase/firestore'

M.5 In order for limit to work you need to do with a query fetch 


	    const data = await getDocs(query(userReference, limit(1)))

M.6 Now you only get back the number of objects you put in.. YOU ARE SETUP TO START YOUR SCROLL 

M.7 Before your start using scroll method setup to fetch the next batch with a button to make it easier

M.8 Now we can fire the fetch function again but we need to tell firestore what next batch of data to bring (If not is just gonna bring the same 
ones) 

        To this you need to import a method called startAfter()

        import {startAfter} 'firebase/firestore'

M.9 This method will bring the batch of data after the specified variable to you put in. 

        -  To specify the exact point to start after; Go to your component create a useState and set it up to store the index of the last object    recieved (if you recieved 2 object back then store index 1)

            On your component 
            const [startAfter , setStartAfter] useState (null)

M.10 In your fetch function update the state to 
        setStartAfter(object.length - 1)





*/

/* -------------------- Things I skipped and need to add  instructions -------------------------------------- */

/*

- Uploading Pic and retreiving it 
- finding an specific collection/document based on a search 


*/

import { initializeApp } from 'firebase/app' // B.1
import { getFirestore } from '@firebase/firestore' //E.1
import { getAuth } from 'firebase/auth'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth' // H.4
import {
	collection,
	getDocs,
	addDoc,
	query,
	where,
	limit,
	startAfter,
	orderBy,
} from 'firebase/firestore' // F.4 , G.1

// B.2
const firebaseConfig = {
	apiKey: 'AIzaSyB9SiHYDdUaD4vratX5I6B1KIK41XxcKSw',
	authDomain: 'reactlibrary-d45e1.firebaseapp.com',
	projectId: 'reactlibrary-d45e1',
	storageBucket: 'reactlibrary-d45e1.appspot.com',
	messagingSenderId: '244122617452',
	appId: '1:244122617452:web:aa93a49d441314c55efa49',
}

const app = initializeApp(firebaseConfig) // B.3
const db = getFirestore(app) // E.2
export const auth = getAuth(app) // H.3
const userReference = collection(db, 'Users') //F.3
const userProfileReference = collection(db, 'Names') //F.3

//F.1
export const APIHandler = {
	// M.2
	fetchUserInfiniteScroll: async (latestDoc) => {
		console.log('latesDoc Api', latestDoc)
		const data = await getDocs(
			query(
				collection(db, 'Users'),
				orderBy('name'),
				startAfter(latestDoc),
				limit(2)
			)
		)
		let users = []
		users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
		console.log(users, 'user from api')
		return users
	},
	//F.2
	fetchUser: async () => {
		const data = await getDocs(userReference, limit(1))
		let users = []
		users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
		return users
	},

	//G.3
	addUser: async ({ name, Age, favoriteFood }) => {
		await addDoc(userReference, {
			name,
			Age,
			favoriteFood,
		})
	},

	//H.5
	registerNewUser: async (registerNewEmail, registerNewPassword) => {
		const newUser = await createUserWithEmailAndPassword(
			auth,
			registerNewEmail,
			registerNewPassword
		)
		return newUser
	},

	//I.2
	logginUser: async (loginEmail, loginPassword) => {
		await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
	},

	// J.2 Connecting user names with UID

	createUserProfileInfo: async (userProfile) => {
		await addDoc(userProfileReference, {
			userProfile,
            
		})
	},

	// L.2
	doQuery: async (name) => {
		const q = query(userReference, where('name', '==', `${name}`))
		const data = await getDocs(q)
		const users = data.docs.map((doc) => ({ ...doc.data() }))
		return users
	},
}

