"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Task = {
  id: number;
  title: string;
  description: string;
  is_completed: boolean;
  category: "Todo" | "In Progress" | "Completed" | "Overdue";
  created_at: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const placeholderData: Task[] = [
      {
        id: 1,
        title: "Create a Visual Style Guide",
        description: "Design consistent UI styles and typography",
        is_completed: false,
        category: "Todo",
        created_at: "2025-11-01",
      },
      {
        id: 2,
        title: "Testing and User Feedback",
        description: "Gather feedback from beta users",
        is_completed: false,
        category: "In Progress",
        created_at: "2025-11-02",
      },
      {
        id: 3,
        title: "Develop Back-End Systems",
        description: "Build secure and scalable APIs",
        is_completed: true,
        category: "Completed",
        created_at: "2025-11-03",
      },
      {
        id: 4,
        title: "Optimize Web Performance",
        description: "Improve loading speed and responsiveness",
        is_completed: false,
        category: "Overdue",
        created_at: "2025-10-25",
      },
    ];
    setTasks(placeholderData);
  }, []);

  const handleLogout = () => {
    console.log("User logged out");
    router.push("/");
  };

  const groupedTasks = {
    Todo: tasks.filter((t) => t.category === "Todo"),
    "In Progress": tasks.filter((t) => t.category === "In Progress"),
    Completed: tasks.filter((t) => t.category === "Completed"),
    Overdue: tasks.filter((t) => t.category === "Overdue"),
  };

  const categoryColors: Record<string, string> = {
    Todo: "bg-amber-100 border-amber-300",
    "In Progress": "bg-blue-100 border-blue-300",
    Completed: "bg-green-100 border-green-300",
    Overdue: "bg-red-100 border-red-300",
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Header with Background Image */}
      <div className="relative h-48 md:h-56 rounded-b-3xl overflow-hidden shadow-md">
        <Image
          src="/todo list.png" // ✅ Your background image
          alt="Todo list background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-between px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            My Project
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-white/80 text-sky-700 font-semibold rounded-lg hover:bg-white transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content Section */}
      <main className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Object.entries(groupedTasks).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-gray-700">{category}</h2>
                <span className="text-sm text-gray-500">{items.length}</span>
              </div>

              <div className="space-y-3">
                {items.length > 0 ? (
                  items.map((task) => (
                    <div
                      key={task.id}
                      className={`p-4 border rounded-lg ${categoryColors[category]} hover:shadow transition`}
                    >
                      <h3 className="font-semibold text-gray-800">{task.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        Created: {new Date(task.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm italic">No tasks yet</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
