import { reactive} from "vue"

const users = reactive([
    {
      id: 1,
      fullname: "Trịnh Thu Hà",
      phone: '0946976126',
      email: 'thuha@gmail.com',
      gender: 'Nữ'
    },
    {
      id: 2,
      fullname: "Nguyễn Việt Hoàng",
      phone: '0968127632',
      email: 'viethoang@gmail.com',
      gender: 'Nam'
    },
    {
      id: 3,
      fullname: "Nguyễn Văn A",
      phone: '0912671234',
      email: 'nguyenva@gmail.com',
      gender: 'Nam'
    },
    {
      id: 4,
      fullname: "Lan Anh Đoàn",
      phone: '0946976126',
      email: 'lucy@gmail.com',
      gender: 'Nữ'
    },
    {
      id: 5,
      fullname: "Trần Phương Thanh",
      phone: '0968685216',
      email: 'phuongthanh@gmail.com',
      gender: 'Nữ'
    },
  ])

  export default users