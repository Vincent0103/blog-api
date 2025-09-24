import type { TagType } from "../types/tag";

const Tag = ({ id, name, isFilter }: TagType) =>
  isFilter ? (
    <span
      key={id}
      className="border-1 cursor-pointer rounded border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
    >
      {name}
    </span>
  ) : (
    <span
      key={id}
      className="rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700"
    >
      {name}
    </span>
  );

export default Tag;
