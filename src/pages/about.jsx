import { useFetch } from "../hooks/fetch";

export default function About() {
  const { data, loading, error } = useFetch(
    "https://umapyoi.net/api/v1/character/info"
  );

  const playVoice = (voiceUrl) => {
    if (!voiceUrl) {
      alert("Suara tidak tersedia untuk karakter ini!");
      return;
    }
    const audio = new Audio(voiceUrl);
    audio.volume = 0.9;
    audio.play().catch(() => console.log("tidak dapat memutar audio"));
  };

  if (loading) return <p className="text-center py-12">Memuat data...</p>;
  if (error) return <p className="text-center text-red-600 py-12">{error.message}</p>;
  if (!data || !Array.isArray(data))
    return <p className="text-center py-12">Data tidak ditemukan</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-center mb-8 text-pink-500">
        ✨ Daftar Karakter Umapyoi ✨
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {data.map((char) => (
          <div
            key={char.id}
            className="bg-white rounded-md shadow-md overflow-hidden w-44 transition transform hover:scale-[1.03] hover:shadow-lg"
          >
        
            <div className="relative bg-pink-400 p-2 pb-0">
        
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>

              <img
                src={char.thumb_img}
                alt={char.name_en}
                className="w-full h-48 object-contain rounded-t-sm"
              />
            </div>

            <div className="h-1 bg-white" />
            <div className="text-center py-3 px-3">
              <p className="font-bold text-gray-800 text-sm truncate">{char.name_en}</p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <button
                  onClick={() => playVoice(char.voice)}
                  className="bg-pink-400 hover:bg-pink-500 text-white text-xs font-medium rounded-full px-3 py-1 transition"
                >
                  🔊 Play
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
