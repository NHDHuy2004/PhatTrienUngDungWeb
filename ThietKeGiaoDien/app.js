const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Cấu hình EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Trang chủ - Đọc sách online' });
});

app.get('/books', (req, res) => {
    // Danh sách sách mẫu
    const books = [
        {
            id: 1,
            title: 'Đắc Nhân Tâm',
            author: 'Dale Carnegie',
            description: 'Cuốn sách nổi tiếng về nghệ thuật đối nhân xử thế'
        },
        {
            id: 2,
            title: 'Nhà Giả Kim',
            author: 'Paulo Coelho',
            description: 'Câu chuyện về hành trình tìm kiếm kho báu của cậu bé chăn cừu'
        }
    ];
    res.render('books', { title: 'Danh sách sách', books });
});

app.get('/books/:id', (req, res) => {
    const bookId = req.params.id;
    // Trong thực tế, bạn sẽ lấy thông tin sách từ database
    const book = {
        id: bookId,
        title: 'Đắc Nhân Tâm',
        author: 'Dale Carnegie',
        content: 'Nội dung sách sẽ được hiển thị ở đây...'
    };
    res.render('read', { title: book.title, book });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 