const mockAccountRepository = {
    signInUser: (username, password) => {
        if(username === "LeeBoonKong"){
            if(password === "password"){
                return true;
            }
            return false;
        }
        return false;
    }
}