// Import dependencies
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample notification data
const notifications = [
    { 
      id: 1, 
      title: 'Permintaan Berhasil', 
      description: 'Permintaan Anda telah berhasil diproses oleh server tanpa adanya kesalahan. Anda dapat melanjutkan ke langkah berikutnya dengan aman.', 
      status: 200, 
      date: '2024-12-01' 
    },
    { 
      id: 2, 
      title: 'Permintaan Tidak Valid', 
      description: 'Data yang Anda masukkan tidak memenuhi format yang diharapkan. Silakan periksa kembali input Anda dan coba kirim ulang permintaan.', 
      status: 400, 
      date: '2024-12-02' 
    },
    { 
      id: 3, 
      title: 'Sumber Daya Tidak Ditemukan', 
      description: 'Sumber daya yang Anda coba akses tidak ditemukan di server. Pastikan URL atau referensi yang Anda gunakan sudah benar.', 
      status: 404, 
      date: '2024-12-03' 
    },
    { 
      id: 4, 
      title: 'Kesalahan Server Internal', 
      description: 'Terjadi kesalahan yang tidak terduga di sisi server saat memproses permintaan Anda. Silakan coba lagi nanti atau hubungi tim dukungan.', 
      status: 500, 
      date: '2024-12-04' 
    },
    { 
      id: 5, 
      title: 'Autentikasi Diperlukan', 
      description: 'Anda harus masuk ke akun Anda untuk mengakses fitur ini. Silakan login dengan kredensial yang valid untuk melanjutkan.', 
      status: 401, 
      date: '2024-12-05' 
    },
  ];
  

// API to get all notifications
app.get('/api/notifications', (req, res) => {
  res.status(200).json(notifications);
});

// API to get a single notification by ID
app.get('/api/notifications/:id', (req, res) => {
  const { id } = req.params;
  const notification = notifications.find(n => n.id === parseInt(id));
  if (notification) {
    res.status(200).json(notification);
  } else {
    res.status(404).json({ message: 'Notification not found', status: 404 });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
