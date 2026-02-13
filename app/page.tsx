export default function FUARoboticsWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="px-8 py-24 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          FUA Robotics
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Field Urban Automation
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
          Building autonomous systems for agriculture, cities, and public
          infrastructure. Scalable robotics platforms engineered for
          real-world, human-shared environments.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-2xl shadow-md hover:scale-105 transition">
            View Technology
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-2xl hover:bg-gray-100 transition">
            Investor Deck
          </button>
        </div>
      </section>

      {/* Divisions */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Our Divisions</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="p-8 border rounded-2xl">
            <h3 className="text-2xl font-semibold">Field Division</h3>
            <p className="mt-4 text-gray-600">
              Autonomous agricultural machinery for planting, spraying,
              monitoring, and precision farming. Built for rugged terrain,
              long endurance, and sustainable operation.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• GNSS + RTK navigation</li>
              <li>• Multi-sensor crop monitoring</li>
              <li>• Autonomous task scheduling</li>
              <li>• Fleet-level analytics</li>
            </ul>
          </div>

          <div className="p-8 border rounded-2xl">
            <h3 className="text-2xl font-semibold">Urban Division</h3>
            <p className="mt-4 text-gray-600">
              Autonomous vehicles and municipal robots for smart cities,
              park maintenance, logistics, and public infrastructure.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Human-aware navigation</li>
              <li>• Obstacle detection & avoidance</li>
              <li>• Geofencing & compliance systems</li>
              <li>• Centralized monitoring dashboard</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="px-8 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Core Technology</h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Modular ROS2 architecture, embedded safety layers, AI-driven
            perception, and scalable fleet management designed for
            cross-sector deployment.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">Autonomy Stack</h3>
              <p className="mt-2 text-gray-600">
                Sensor fusion, SLAM, path planning, and behavioral AI.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">Safety Architecture</h3>
              <p className="mt-2 text-gray-600">
                Redundant braking, proximity sensors, emergency overrides.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">Fleet Platform</h3>
              <p className="mt-2 text-gray-600">
                Cloud-based monitoring, analytics, OTA updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="px-8 py-24 text-center">
        <h2 className="text-3xl font-semibold">Market Opportunity</h2>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          The global precision agriculture and smart city automation markets
          represent multi-billion dollar opportunities driven by labor
          shortages, sustainability demands, and digital transformation.
          FUA Robotics bridges field and urban automation with a unified
          autonomy platform.
        </p>
      </section>

      {/* Investors */}
      <section className="px-8 py-24 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold">Investor Overview</h2>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          FUA Robotics targets scalable deployment across agriculture and
          municipal sectors with recurring SaaS-based autonomy licensing,
          hardware integration partnerships, and fleet analytics services.
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-black text-white rounded-2xl shadow-md hover:scale-105 transition">
            Download Pitch Deck
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 bg-black text-white text-center">
        <p className="text-lg font-semibold">FUA Robotics</p>
        <p className="text-sm text-gray-400 mt-2">
          © {new Date().getFullYear()} Field Urban Automation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

