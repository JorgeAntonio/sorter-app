export default function PrizesList() {
  return (
    <main className="w-full">
        <h2 className="text-2xl font-bold">Lista de premios</h2>
        <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
            <span className="font-bold">1.</span>
            <span>Primer premio</span>
            <span className="text-gray-500">- 1</span>
            </div>
            <div className="flex items-center space-x-4">
            <span className="font-bold">2.</span>
            <span>Segundo premio</span>
            <span className="text-gray-500">- 2</span>
            </div>
            <div className="flex items-center space-x-4">
            <span className="font-bold">3.</span>
            <span>Tercer premio</span>
            <span className="text-gray-500">- 3</span>
            </div>
        </div>
    </main>
  )
}
