import { createContext, useState, ReactNode } from "react";
import { User } from "../models/user_model";

type UserContextType = [User[], React.Dispatch<React.SetStateAction<User[]>>];

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [users, setUsers] = useState<User[]>([]);
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {children}
        </UserContext.Provider>
    );
}