import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import DiaryCard from "./components/DiaryCard";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    img: "",
    title: "",
    date: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [diaryEntries, setDiaryEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    setDiaryEntries(savedEntries);
  }, []);

  const openModalForNew = () => {
    setFormData({
      img: "",
      title: "",
      date: "",
      description: "",
    });
    setIsEditing(false);
    setCurrentIndex(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (index) => {
    const entry = diaryEntries[index];
    setFormData(entry);
    setIsEditing(true);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveDiaryEntry = (entry) => {
    const updatedEntries = isEditing
      ? diaryEntries.map((e, i) => (i === currentIndex ? entry : e))
      : [entry, ...diaryEntries];
    setDiaryEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
    closeModal();
  };

  const deleteDiaryEntry = (index) => {
    const updatedEntries = diaryEntries.filter((_, i) => i !== index);
    setDiaryEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="flex flex-col p-6">
      <Navbar openModal={openModalForNew} />
      <div className="flex gap-4 m-8">
        {isModalOpen && (
          <Modal
            closeModal={closeModal}
            saveDiaryEntry={saveDiaryEntry}
            formData={formData}
            setFormData={setFormData}
            isEditing={isEditing}
          />
        )}

        {diaryEntries.map((entry, index) => (
          <DiaryCard
            key={index}
            entry={entry}
            index={index}
            deleteDiaryEntry={deleteDiaryEntry}
            openModalForEdit={openModalForEdit}
          />
        ))}
      </div>
    </div>
  );
}
