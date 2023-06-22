import { User } from "./user";
import {
  Bell,
  CaretRight,
  DesktopTower,
  Key,
  Person,
  Question,
  Upload,
  UserCircle,
  UserSwitch,
} from "phosphor-react";

export function Profile() {
  return (
    <div className="bg-gray rounded-xl">
      <div className="flex flex-col-2 justify-center items-center">
        <div>
          <img
            className="rounded-xl w-16 border-none m-4 bg-green-500"
            src="https://avatars.githubusercontent.com/u/77706515?v=4"
            alt="imagem"
          />
        </div>
        <div className="flex flex-col mr-12">
          <span>José Alves</span>
          <span className="text-xs opacity-60">netopereira464@gmail.com</span>
        </div>
      </div>
      <div className="flex flex-col ml-4">
        <span className="font-thin opacity-60 uppercase text-xs">Conta</span>
        <span className="flex items-center gap-2 opacity-80 text-xs mt-4">
          <UserCircle size={16} />
          Dados Pessoais{" "}
          <CaretRight size={16} weight="light" className="ml-40 mr-2" />
        </span>
        <span className="flex items-center gap-2 opacity-80 text-xs mt-2">
          <Key size={16} />
          Informações de Login{" "}
          <CaretRight size={16} weight="light" className="ml-32 mr-2" />
        </span>
      </div>
      <div className="flex flex-col ml-4">
        <span className="font-thin opacity-60 mt-4 uppercase text-xs">
          Preferências
        </span>
        <span className="flex items-center gap-1 opacity-80 text-xs mt-4">
          <Bell size={16} />
          Notificações{" "}
          <CaretRight size={16} weight="light" className="ml-48 mr-2" />
        </span>
        <span className="flex items-center gap-1.5 opacity-80 text-xs mt-2">
          <Person size={16} />
          Acessibilidade{" "}
          <CaretRight size={16} weight="light" className="ml-44 mr-2" />
        </span>
      </div>
      <div className="flex flex-col ml-4">
        <span className="font-thin opacity-60 mt-4 uppercase text-xs">
          Privacidade
        </span>
        <span className="flex items-center gap-1 opacity-80 text-xs mt-4">
          <DesktopTower size={16} />
          Aparelhos Conectados{" "}
          <CaretRight size={16} weight="light" className="ml-32 mr-2" />
        </span>
        <span className="flex items-center gap-1 opacity-80 text-xs mt-2">
          <UserSwitch size={16} />
          Contas Vinculadas
          <CaretRight size={16} weight="light" className="ml-[154px] mr-2" />
        </span>
      </div>
      <div className="flex flex-col ml-4">
        <span className="flex items-center gap-2 opacity-80 text-xs mt-8">
          <Question size={16} />
          Central de Ajuda{" "}
        </span>
      </div>
      <div className="flex ml-4 mt-4">
        <span className="flex items-center gap-2 text-red">
          <Upload size={16} weight="light" className="rotate-90" />
          Sair
        </span>
      </div>
    </div>
  );
}
