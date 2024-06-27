import DiaryCard from "./DiaryCard"; // Import the DiaryCard component

// DiaryList component to display a list of DiaryCards
export default function DiaryList({ diaryEntries }) {
  return (
    <div>
      {diaryEntries.map((entry, index) => (
        <DiaryCard key={index} entry={entry} /> // Render a DiaryCard for each diary entry
      ))}
    </div>
  );
}
