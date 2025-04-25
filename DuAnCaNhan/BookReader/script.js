const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// API để lấy nội dung từ book.txt
app.get('/api/book', (req, res) => {
    const filePath = path.join(__dirname, 'books', 'book.txt');

    fs.access(filePath, fs.constants.F_OK, (accessErr) => {
        if (accessErr) {
            return res.status(404).json({ error: 'Không tìm thấy file book.txt' });
        }

        fs.readFile(filePath, 'utf8', (readErr, data) => {
            if (readErr) {
                return res.status(500).json({ error: 'Lỗi khi đọc file book.txt' });
            }
            res.json({ content: data });
        });
    });
});

// Phục vụ file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});