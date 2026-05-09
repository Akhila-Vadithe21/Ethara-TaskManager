import { useState } from "react";

function Dashboard({ setIsLogin }: any) {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<
    {
      text: string;
      completed: boolean;
    }[]
  >([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleComplete = (index: number) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter(
      (_, taskIndex) => taskIndex !== index
    );

    setTasks(updatedTasks);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ color: "#2563eb" }}>
            Task Dashboard
          </h1>

          <button
            onClick={handleLogout}
            style={{
              background: "black",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "25px",
            gap: "10px",
          }}
        >
          <div
            style={{
              flex: 1,
              background: "#dbeafe",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>Total</h3>
            <p>{tasks.length}</p>
          </div>

          <div
            style={{
              flex: 1,
              background: "#dcfce7",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>Completed</h3>
            <p>
              {
                tasks.filter((task) => task.completed)
                  .length
              }
            </p>
          </div>

          <div
            style={{
              flex: 1,
              background: "#fee2e2",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>Pending</h3>
            <p>
              {
                tasks.filter((task) => !task.completed)
                  .length
              }
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            list="task-options"
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <datalist id="task-options">
            {tasks.map((item, index) => (
              <option
                key={index}
                value={item.text}
              />
            ))}
          </datalist>

          <button
            onClick={addTask}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "10px",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        {tasks.map((item, index) => (
          <div
            key={index}
            style={{
              background: item.completed
                ? "#dcfce7"
                : "#eff6ff",

              padding: "15px",
              borderRadius: "10px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textDecoration: item.completed
                  ? "line-through"
                  : "none",

                fontWeight: "bold",
              }}
            >
              {item.text}
            </span>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                onClick={() => toggleComplete(index)}
                style={{
                  background: "green",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Complete
              </button>

              <button
                onClick={() => deleteTask(index)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;