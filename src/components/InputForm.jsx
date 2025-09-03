export function TextInput({ q, answers, handleChange }) {
  return (
    <input
      type="text"
      value={answers[q.id] || ""}
      onChange={e => handleChange(q, e.target.value)}
      className="w-full border p-2 rounded"
    />
  );
}

export function RadioInput({ q, answers, handleChange }) {
  return (
    <>
      {q.options.map(opt => (
        <label key={opt} className="block">
          <input
            type="radio"
            name={q.id}
            value={opt}
            checked={answers[q.id] === opt}
            onChange={e => handleChange(q, e.target.value)}
            className="mr-2"
          />
          {opt}
        </label>
      ))}
    </>
  );
}

export function CheckboxInput({ q, answers, handleChange }) {
  return (
    <>
      {q.options.map(opt => (
        <label key={opt} className="block">
          <input
            type="checkbox"
            value={opt}
            checked={answers[q.id]?.includes(opt) || false}
            onChange={e => {
              const prev = answers[q.id] || [];
              if (e.target.checked) {
                handleChange(q, [...prev, opt]);
              } else {
                handleChange(q, prev.filter(o => o !== opt));
              }
            }}
            className="mr-2"
          />
          {opt}
        </label>
      ))}
    </>
  );
}
