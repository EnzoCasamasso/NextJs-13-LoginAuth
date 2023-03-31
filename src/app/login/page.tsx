import Button from "@/components/buttonLink";

export default function Login() {
    return (
        <main className="h-screen flex justify-center items-center">
            <div className="h-3/5 w-96 flex flex-col justify-between items-center 
            bg-slate-800 rounded-lg shadow-xl p-20">
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