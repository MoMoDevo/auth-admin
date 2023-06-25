
 import prisma from "../../../lib/prismaDb"

 

const Register = () => {


async function registerUIser(data:FormData) {
  "use server"
   

  const user = await prisma.user.create({
    data: {
      name: data.get('name') as string,
      email: data.get('email') as string,
      hashedPassword:data.get("hashedPassword")as string
  
    },
  })
  if (!user) {
    return { error: 'Something went wrong' }
  }

 
 


 

 
}


return (
 
  <form action={registerUIser} className="flex w-4/6 shadow-lg m-auto pt-10 bg-slate-100 flex-col gap-4 ">
      <input type="text" name="name" placeholder="name" />
      <input type="email" name="email" placeholder="email" />
      <input type="hashedPassword" name="hashedPassword" placeholder="hashedPassword" />
      
      
      <button type="submit">register</button>



  </form>



)
}

export default Register