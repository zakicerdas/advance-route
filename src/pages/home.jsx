function Home(){

     const ppUrl = 'https://upload-os-bbs.hoyolab.com/upload/2024/10/13/114217185/81d2c50b010a5d5c441edf47603d11cb_9162587751550001599.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70'; 
  const quote = "I will sacrifice myself to save the world. — Kiana Kaslana";

  return (
    <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center gap-6">
        <h1 className='text-center mt-5 text-2xl font-semibold'>contoh router apikasi</h1>
      <img
        src={ppUrl}
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover border-4 border-indigo-100 shadow-sm"
      />

      <div className="text-center">
          <h2 className="text-2xl font-semibold">Profile</h2>
        <p className="mt-3 text-slate-600 max-w-lg">{quote}</p>
      </div>
    </div>
  );

}

export default Home;