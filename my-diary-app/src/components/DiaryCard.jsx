export default function DiaryCard({
  entry,
  index,
  deleteDiaryEntry,
  openModalForEdit,
}) {
  return (
    <div className="flex flex-col border p-6 w-[300px] gap-7 bg-slate-400 rounded-lg">
      {entry.img && <img src={entry.img} />}
      <span className="text-[32px]">{entry.title}</span>
      <span className="text-sm">{entry.date}</span>
      <p className="italic">{entry.description}</p>
      <button
        className="px-6 py-2 min-w-0 text-sm bg-red-300 rounded-lg"
        type="button"
        onClick={() => deleteDiaryEntry(index)}
      >
        Delete
      </button>
      <button
        className="px-6 py-2 min-w-0 text-sm bg-teal-300 rounded-lg"
        type="button"
        onClick={() => openModalForEdit(index)}
      >
        Edit
      </button>
    </div>
  );
}
