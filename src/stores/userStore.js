import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUserStore = create(
    persist(
        (set, get) => ({
            sessionToken: "",
            username: "",
            login: (username, password) => {
                //Fake login
                if (username === "LeeBoonKong") {
                    if (password === "password") {
                        set({
                            sessionToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                            username : "LeeBoonKong"
                        })
                        return true;
                    }
                    return false;
                }
                return false;
            },
            logout: () => set({
                sessionToken : "",
                username: ""
            })
        }),
        {
            name: 'user-store', // name of the item in the storage (must be unique)
        }
    )
);

export default useUserStore;