import React, { useState, useEffect } from "react";

const ImageUpload = ({ setImage, image }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      localStorage.setItem("uploadedImage", reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, [setImage]);

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" />}
    </div>
  );
};

export default function Modal({
  closeModal,
  saveDiaryEntry,
  formData,
  setFormData,
  isEditing,
}) {
  const { img, title, date, description } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    saveDiaryEntry(formData);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-slate-100 p-4 w-[500px]">
      <div className="flex justify-end">
        <button className="text-3xl" onClick={closeModal}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <ImageUpload
        setImage={(img) => setFormData({ ...formData, img })}
        image={img}
      />
      <form className="flex mt-4 flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="e.g. Trip to the lake"
            required
            value={title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            required
            value={date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Write your entry here..."
            required
            value={description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 min-w-0 text-sm bg-sky-500 rounded-lg"
          >
            {isEditing ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
