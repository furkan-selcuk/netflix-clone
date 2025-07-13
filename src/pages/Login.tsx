import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada giriş işlemi yapılacak
    console.log('Form submitted:', { email, password, isSignUp });
    // Başarılı giriş sonrası ana sayfaya yönlendir
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/60 via-black/40 to-black/60 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Netflix Logo */}
      <div className="pt-8 px-4 md:px-16">
        <Link to="/" className="inline-block">
          <h1 className="text-netflix-red text-3xl md:text-4xl font-bold">
            NETFLIX
          </h1>
        </Link>
      </div>

      {/* Login Form */}
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="bg-black/75 rounded-md p-8 md:p-16 w-full max-w-md">
          <h2 className="text-white text-3xl font-bold mb-8">
            {isSignUp ? 'Kayıt Ol' : 'Oturum Aç'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="E-posta veya telefon numarası"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-white focus:outline-none transition-colors"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-white focus:outline-none transition-colors pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-netflix-red text-white py-4 rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              {isSignUp ? 'Kayıt Ol' : 'Oturum Aç'}
            </button>

            <div className="flex items-center justify-between text-gray-400 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Beni hatırla
              </label>
              <a href="#" className="hover:underline">Yardım mı gerekiyor?</a>
            </div>
          </form>

          {/* Sign Up Section */}
          <div className="mt-8 text-gray-400">
            <p className="mb-4">
              Netflix'e yeni misiniz?{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-white hover:underline"
              >
                {isSignUp ? 'Oturum açın' : 'Şimdi kayıt olun'}
              </button>
            </p>
            
            <p className="text-xs">
              Bu sayfa, bot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunmaktadır.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/75 p-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm mb-4">
            Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-400">
            <a href="#" className="hover:underline">SSS</a>
            <a href="#" className="hover:underline">Yardım Merkezi</a>
            <a href="#" className="hover:underline">Kullanım Koşulları</a>
            <a href="#" className="hover:underline">Gizlilik</a>
            <a href="#" className="hover:underline">Çerez Tercihleri</a>
            <a href="#" className="hover:underline">Kurumsal Bilgiler</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 