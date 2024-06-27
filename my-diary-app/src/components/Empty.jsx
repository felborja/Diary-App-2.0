// Empty component to display when there are no diary entries
export default function Empty({ openModal }) {
  return (
    <div>
      <p className="w-[600px] mb-16 text-xl">
        Write about your day, your thoughts, or anything that’s on your mind.
        Your diary is a safe space for all your experiences and reflections.
      </p>
      <button onClick={openModal}>Open Modal</button>{" "}
      {/* Button to open the modal */}
    </div>
  );
}
