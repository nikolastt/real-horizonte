"use client";

import { User } from "@prisma/client";
import axios from "axios";
import React, { useState } from "react";

import { ClipLoader } from "react-spinners";
import UserCardRow from "../../UserCardRow";

type Props = {
  setUser: (user: User) => void;
};

function Admins({ setUser }: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const usersDb: User[] = (await axios.get("/api/admins")).data;

      setUsers(usersDb);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  if (users.length <= 0) {
    return (
      <>
        <div className="flex justify-center mt-6">
          {loading ? (
            <ClipLoader color="#f8a961" />
          ) : (
            <button className="button-secondary" onClick={getUsers}>
              Buscar Usuários
            </button>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-3 mt-3">
      <h2 className="text-lg">Selecione um usuário</h2>
      {users.map((user) => (
        <>
          <UserCardRow
            key={user.id}
            name={user.name!}
            image={user.image!}
            onClick={() => setUser(user)}
          />
        </>
      ))}
    </div>
  );
}

export default Admins;
