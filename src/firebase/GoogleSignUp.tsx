import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase"; 

type changeTheme = {
  isDark: boolean;
}

const GoogleSignUp = ({isDark} : changeTheme) => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken; 
      const user = result.user;
      console.log("User Info:", user);
      console.log("Access Token:", token);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div>
      <span className={`${isDark? "text-[var(--text-color)] bg-[var(--bg-color)]" : "text-[var(--bg-color)] bg-[var(--text-color)]"}
        p-[calc(0.4vw+0.2rem)] cursor-pointer text-[calc(0.6vw+0.3rem)] hover:text-[var(--placeholder-color)]
        transition duration-300 ease-in-out`}  
        onClick={handleGoogleSignIn}>Sign Up with Google</span>
    </div>
  );
};

export default GoogleSignUp;
