import { useContext, useState } from 'react'
import { AlertTitle, TextField } from '@mui/material'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


interface Props{
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
} 
interface User  {
    name:string,
    phoneNum:number,
    email:string
}


const Login: React.FC<Props> = ({setIsAuth} ) => {
    const [user, setUser] = useState<User>({
        name:'',
        phoneNum:0,
        email:"",
    })
    const navigate = useNavigate()
    
    const [showerror, setShowError] = useState(false)

    const handleSubmit = () =>{
        
        if(user.name!="" && user.phoneNum!=0 && user.email!=""){
            localStorage.setItem("user", JSON.stringify(user))
            setIsAuth(true)
            navigate("/home")
            console.log(localStorage.getItem("user"));
            
        }else{
            setShowError(true)
        }
    }
    
    
    
  return (
    <>
    <div className='w- full h-[100px] flex flex-col items-center text-3xl p-4'>
        <header className={`"p-4 min-w-[600px]" ${showerror? `flex`:`hidden`}`} ><Alert severity='error'> <AlertTitle>Error</AlertTitle>Please enter details first</Alert></header>
        <h1 className='text-[#ac3b61] p-4'>Please fill this form to proceed</h1>
    </div>
    <div className='flex justify-center align-center w-full h-full'>
        <form action="" className='min-w-[600px] flex flex-col justify-between items-center my-4 p-4'> 
        <div className='m-4 p-4 w-full flex flex-col'>
        <h1 className='p-2 text-xl text-[#ac3b61]'>Name</h1>
            <TextField required label='Type your name here...' onChange={(event) =>{
                setUser({...user, name:event.target.value})
            }} InputProps={{sx:{backgroundColor:"#bab2b5", borderRadius:4, width:"full"}}} />
        </div>
        <div className='m-4 p-4 w-full flex flex-col'>
        <h1 className='p-2 text-xl text-[#ac3b61]'>Phone Number</h1>
            <TextField required label='Type your phone number here...' onChange={(event) =>{
                setUser({...user, phoneNum:parseInt(event.target.value)})
            }} InputProps={{sx:{backgroundColor:"#bab2b5", borderRadius:4, width:"full"}}} />
        </div>
        <div className='m-4 p-4 w-full flex flex-col'>
        <h1 className='p-2 text-xl text-[#ac3b61]'>Email</h1>
            <TextField required label='Type your mail here...' onChange={(event) =>{
                setUser({...user, email:event.target.value})
            }} InputProps={{sx:{backgroundColor:"#bab2b5", borderRadius:4,}}} />
        </div>
        <div className='m-4 p-4'>
        <Button sx={{backgroundColor:"#edc7b7", color:"#ac3b61", ":hover":{backgroundColor:"#edc7b7", scale:"1.2", transition:"300ms"}}} variant='contained' onClick={() =>handleSubmit()}>Proceed</Button>
        </div>
    
        </form>
    </div>
    </>
  )
}
// #edc7b7 #ac3b61
export default Login