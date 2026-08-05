import AuthLayout from '../components/AuthLayout.jsx';
import Input from '../components/Input.jsx';
import bgLogin from '../assets/bg-login.jpg';
import Button from '../components/Buttonlogin.jsx';
import ButtonSSO from '../components/ButtonSSO.jsx';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <>
        <AuthLayout judul="Masuk" subJudul="Selamat datang kembali!" bgImage={bgLogin}>
            <Input type="text" label="Username" placeholder="Masukkan username" />
            <Input type="password" label="Password" placeholder="Masukkan kata sandi" />

            <div className="flex justify-between items-center text-[10px] text-gray-400 mb-5 px-1">
                <Link to="/register">
                    <div>Belum punya akun? <span className="text-white font-bold hover:underline cursor-pointer">Daftar</span></div>
                </Link>
                <div className="hover:underline cursor-pointer">Lupa kata sandi?</div>
            </div>
            <Link to="/home">
                <Button teks="Masuk" />
            </Link>
            <div className="text-[10px] text-gray-500 my-1">Atau</div>
            <ButtonSSO teks="Masuk dengan Google" />

        </AuthLayout>
        </>
    )
}
export default Login