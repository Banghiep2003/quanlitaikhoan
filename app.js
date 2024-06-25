const scriptURL = 'https://script.google.com/macros/s/AKfycbwD1E6vMkODnqinJGQ1JQPZGiF4_daJr-NOyts4Vt6j4SUEiLH_uMi0sJk28QsFmZ-AHQ/exec';

const form = document.forms['contact-form'];

function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    return `${day}-${month}-${year}`;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);

    const currentDate = getFormattedDate();

    formData.append('Ngày Điền', currentDate);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response;
        })
        .then(() => {
            alert("Nhập Thành Công!");
            window.location.reload();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Có lỗi xảy ra, vui lòng thử lại.");
        });
});

// Lấy tham chiếu đến nút "Link Google Sheet"
const checkoutButton = document.getElementById('checkout');

// Bắt sự kiện click vào nút
checkoutButton.addEventListener('click', () => {
    // Yêu cầu người dùng nhập mật khẩu
    const password = prompt("Nhập mật khẩu để tiếp tục:");

    // Kiểm tra mật khẩu
    if (password === "0327336619") {
        // Nếu mật khẩu đúng, chuyển hướng đến đường dẫn mong muốn
        window.location.href = 'https://docs.google.com/spreadsheets/d/1QT321gDWsNTmlfmmDkr8lrYKeWKi16OGsrG3rM8kKGE';
    } else {
        // Nếu mật khẩu không đúng, hiển thị thông báo
        alert("Mật khẩu không chính xác. Vui lòng thử lại.");
    }
});


