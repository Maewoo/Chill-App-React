import { useNavigate } from 'react-router-dom';
import { logoutAdmin, isAdminLoggedIn } from '../../utils/adminAuth.js';

function DashboardAdmin() {
  const navigate = useNavigate();

  if (!isAdminLoggedIn()) {
    navigate('/admin/login');
    return null;
  }

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-bg-home text-white font-sans">
      <nav className="bg-paper border-b border-gray-700 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition duration-200"
        >
          Logout
        </button>
      </nav>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Manage Content</h2>

          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={() => navigate('/admin/movies')}
              className="p-6 bg-paper rounded-lg hover:bg-paper/80 transition duration-200 text-left border border-gray-700"
            >
              <h3 className="text-lg font-semibold mb-2">Movies Management</h3>
              <p className="text-gray-400">Add, edit, or delete movies</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
