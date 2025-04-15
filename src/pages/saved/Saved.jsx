import { Posts } from "../../components";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Saved = () => {
  const { localData } = useLocalStorage("localData");

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      {localData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {localData.map((post) => (
            <Posts key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 mt-12 px-4">
          <div className="text-6xl mb-4">📭</div>
          <h2 className="text-2xl font-semibold mb-2">No Saved Posts</h2>
          <p className="text-sm text-gray-500">
            Posts you save will appear here. Go explore and start bookmarking!
          </p>
        </div>
      )}
    </div>
  );
};
