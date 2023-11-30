export default function SectionHeaders({ mainHeader, subHeader }) {
  return (
    <>
      <div className="text-gray-500 font-semibold uppercase text-lg">
        {subHeader}
      </div>
      <div className="text-emerald-600 italic text-4xl font-extrabold">
        {mainHeader}
      </div>
    </>
  );
}
