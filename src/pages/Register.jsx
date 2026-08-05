import AuthLayout from '../components/AuthLayout.jsx';
import Input from '../components/Input.jsx';
import bgLogin from '../assets/bg-login.jpg';
import Buttondaftar from '../components/Buttonlogin.jsx';
import ButtonSSO from '../components/ButtonSSO.jsx';
import { Link } from 'react-router-dom';

function Register(){
    return(
        <>
        <AuthLayout judul="Daftar" subJudul="Selamat datang!" bgImage={bgLogin}>
            <Input type="text" label="Username" placeholder="Masukkan username" />
            <Input type="password" label="Kata Sandi" placeholder="Masukkan kata sandi" />
            <Input type="password" label="Konfirmasi Kata Sandi" placeholder="Masukkan ulang kata sandi" />

            <div className="flex justify-between items-center text-[10px] text-gray-400 mb-5 px-1">
                <Link to="/login">
                <div>Sudah punya akun? <span className="text-white font-bold hover:underline cursor-pointer">Masuk</span></div></Link>
            </div>
            <Buttondaftar teks="Daftar" />
            <div className="text-[10px] text-gray-500 my-1">Atau</div>
            <ButtonSSO teks="Daftar dengan Google" />

        </AuthLayout>
        </>
    )
}
export default Register