import Button from "@/components/buttonLink";

export default function Login() {
    return (
        <main className="h-screen flex justify-center items-center">
            <div className="h-3/5 w-2/4 flex flex-col justify-between items-center 
            bg-gray-50 rounded-sm shadow-lg p-20">
                <div>
                    <h1>Login</h1>
                </div>

                <div>
                    <Button label="Entrar" href="./"/>
                </div>
            </div>
        </main>
    )
}