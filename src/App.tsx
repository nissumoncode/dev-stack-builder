import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";
import type { Technology } from "./types";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Load technologies from JSON
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((previous) => [...previous, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemoveFromStack = (technologyId: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === technologyId,
    );

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== technologyId),
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.warning("All technologies removed from your stack.");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Technologies Section */}
      <main className="bg-[#FAFAFB] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Explore{" "}
              <span className="brand-gradient-text">the Technologies</span>
            </h2>

            <p className="mt-3 text-sm text-[#64748B] sm:text-base">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex min-h-60 items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <span className="loading loading-spinner loading-lg text-[#D834C2]" />

                <p className="text-sm font-medium text-[#64748B]">
                  Loading technologies...
                </p>
              </div>
            </div>
          ) : (
            /* Technologies + Stack Sidebar */
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
              {/* Technology Cards */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {technologies.map((technology) => (
                  <TechCard
                    key={technology.id}
                    technology={technology}
                    onAdd={handleAddToStack}
                    isAdded={selectedTechnologies.some(
                      (item) => item.id === technology.id,
                    )}
                  />
                ))}
              </div>

              {/* Stack Sidebar */}
              <StackSidebar
                selectedTechnologies={selectedTechnologies}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;
