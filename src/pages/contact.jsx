function Contact(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">
<h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
<p className="text-sm text-gray-500 mb-6">Butuh bantuan atau mau ngobrol sama kami? Hubungi lewat kontak di bawah ini ya</p>


<div className="space-y-4 text-left">
<div className="p-3 rounded-lg border border-gray-200 hover:shadow-md transition">
<h2 className="text-sm font-medium text-gray-700">Instagram</h2>
<a
href="https://www.instagram.com/zakk.torr?igsh=MTFzczBucnpucm85Mg=="
target="_blank"
rel="noopener noreferrer"
className="text-indigo-600 hover:underline"
>
@zakk.torr
</a>
</div>


<div className="p-3 rounded-lg border border-gray-200 hover:shadow-md transition">
<h2 className="text-sm font-medium text-gray-700">📞 Nomor Telepon</h2>
<a href="tel:+6281234567890" className="text-indigo-600 hover:underline">
+62 895-3241-20911
</a>
</div>


<div className="p-3 rounded-lg border border-gray-200 hover:shadow-md transition">
<h2 className="text-sm font-medium text-gray-700">✉️ Email</h2>
<a href="zakitoriq1@gmail.com" className="text-indigo-600 hover:underline">
zakitoriq1@gmail.com
</a>
</div>
</div>


<p className="text-xs text-gray-400 mt-6">Kami akan membalas secepat mungkin, jadi sabar ya</p>
</div>
</div>
    )
}

export default Contact;