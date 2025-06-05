import { useState } from 'react';

export default function FretboardMatrix() {
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  
  // Parse CSV data into 2D array
  const csvData = `0	1	2	3	4	5	6	7	8	9	10	11	12
E	F	G♭	G	A♭	A	B♭	B	C	D♭	D	E♭	E
B	C	D♭	D	E♭	E	F	G♭	G	A♭	A	B♭	B
G	A♭	A	B♭	B	C	D♭	D	E♭	E	F	G♭	G
D	E♭	E	F	G♭	G	A♭	A	B♭	B	C	D♭	D
A	B♭	B	C	D♭	D	E♭	E	F	G♭	G	A♭	A
E	F	G♭	G	A♭	A	B♭	B	C	D♭	D	E♭	E`.split('\n').map(row => row.split('\t'));

  const headers = csvData[0];
  const matrix = csvData.slice(1);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, idx) => (
              <th key={idx} className="border border-gray-300 px-3 py-2 text-sm">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`border border-gray-200 px-3 py-2 text-sm cursor-pointer transition-colors
                    ${selectedNote === cell ? 'bg-yellow-200' : 'hover:bg-blue-50'}`}
                  onClick={() => setSelectedNote(cell)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedNote && (
        <div className="mt-4 text-center text-sm text-gray-600">
          Selected note: <span className="font-medium">{selectedNote}</span>
        </div>
      )}
    </div>
  );
}
