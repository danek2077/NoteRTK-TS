interface InterTagProp {
  deleteTag: (text:string) => void;
  inner: string;
}
const TagJsx = ({ deleteTag, inner }: InterTagProp) => {
  return (
    <div className="flex mt-5">
      <strong className="text-3xl">{inner}</strong>
      <button
        onClick={() => deleteTag(inner)}
        className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded ml-5"
      >
        delete
      </button>
    </div>
  );
};

export default TagJsx;
