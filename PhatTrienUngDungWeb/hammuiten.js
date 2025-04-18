//VD1: Hàm không có tham số
 const thongBao = () => {console.log("Chưa có thông báo, khi nào có thông báo sẽ thông báo!")};
//=========================
//VD2: Hàm có một tham số
 const thongBaoMotThamSo = (a) => {console.log(`Dang doi ${a}`)};
 console.log(thongBaoMotThamSo('d'))
//========================
//VD3: Hàm có 2 tham số
 const cong = (x,y) => x + y;
 console.log(cong(2,4)); //6
//===========================