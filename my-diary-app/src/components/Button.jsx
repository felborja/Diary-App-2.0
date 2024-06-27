// Button component to trigger an action
export default function Button({ onClick }) {
  return (
    <button
      className="bg-indigo-700 px-4 py-2 text-white rounded-lg"
      onClick={onClick}
    >
      Create
    </button>
  );
}
