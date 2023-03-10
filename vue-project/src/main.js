import { createApp } from 'vue'
import App from './App.vue'
import Modal from './components/Modal.vue'


createApp(App).mount('#app')  // App : component chứa template
createApp(Modal).mount('#modal') 


// BTVN 3: 
// Tạo 1 project vue và thực hiện các yêu cầu sau:
// 1. Fake 1 mảng đối tượng sinh viên gồm các thuộc tính id, fullname, phone, email, gender.
// 2. Render mảng đó thành table.
// 3. Thiết kế 1 nút xóa. Khi ấn nút xóa thì sinh viên đó sẽ bay màu khỏi table.
// 4. Thiết kế 1 dropdown với 2 tùy chọn là "nam", "nữ". Khi chọn "nam" thì table sẽ hiển thị các sinh viên giới tính nam. Và "nữ" cũng tương tự