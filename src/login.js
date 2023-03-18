import LoginForm from './components/login/index'


const Login = () => {

  const token = localStorage.getItem('token');
  const isAuthenticated = token != null;

  console.log("isAuthenticated", isAuthenticated)
  if(isAuthenticated){
    window.location.href = '/dashboard';
    return false;
  }
  
  return (
    <div className="loginForm">
        <LoginForm />
    </div>
  );
}

export default Login;
