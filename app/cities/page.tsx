export default function Cities() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">

      <h1 className="text-5xl font-bold text-center text-teal-600">
        Cities We Serve
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mt-12">

        <div className="shadow p-6 rounded-xl">Jaipur</div>
        <div className="shadow p-6 rounded-xl">Delhi</div>
        <div className="shadow p-6 rounded-xl">Gurgaon</div>
        <div className="shadow p-6 rounded-xl">Noida</div>
        <div className="shadow p-6 rounded-xl">Agra</div>

      </div>

    </div>
  );
}