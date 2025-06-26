type statusTask = "pendente" | "concluída";
type priorityTask = "baixa" | "média" | "alta";

interface Task {
  id?: string;
  name: string;
  status: statusTask;
  description?: string;
  createdIn: string;
  updateIn?: string;
  nivel?: string;
  category: string;
  priority?: priorityTask;
}

export const tasks: Task[] = [
  {
    id: "1",
    name: "Estudar TypeScript",
    category: "estudo",
    status: "pendente",
    createdIn: new Date("2025-06-25T14:00:00Z").toISOString(),
    priority: "alta",
  },
  {
    id: "2",
    name: "Comprar café",
    category: "compras",
    status: "pendente",
    createdIn: new Date("2025-06-24T10:30:00Z").toISOString(),
    updateIn: new Date("2025-06-25T08:00:00Z").toISOString(),
    priority: "baixa",
  },
  {
    id: "3",
    name: "Enviar projeto do curso",
    category: "estudo",
    status: "pendente",
    createdIn: new Date("2025-06-26T09:00:00Z").toISOString(),
  },
];
