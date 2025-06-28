export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6 text-gray-800">    
      <section>
        <h2 className="text-2xl font-bold text-blue-700">
          Tecnologías y Contenidos Aprendidos
        </h2>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            🧱 Fundamentos de Programación Web
          </h3>
          <p className="mt-1">Conceptos básicos de lenguajes de programación</p>
          <p>HTML5 y CSS3</p>
          <p>JavaScript básico</p>
          <p>Git y GitHub para control de versiones</p>
          <p>Uso de Visual Studio Code (IDE)</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            ⚙️ Front-End - JavaScript Avanzado
          </h3>
          <p className="mt-1">Última versión de JavaScript (ES6+)</p>
          <p>Programación Orientada a Objetos (POO)</p>
          <p>Manejo de APIs</p>
          <p>Herramientas de representación de datos</p>
          <p>Arquitectura Serverless</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold"> 🖥️ Back-End</h3>
          <p className="mt-1">Creación de APIs con Express.js</p>
          <p>Bases de datos relacionales (SQL)</p>
          <p>Test unitarios para aplicaciones backend</p>
          <p>Documentación de código</p>
          <p>Web scraping y Web sockets</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold"> ⚛️ Desarrollo con React</h3>
          <p className="mt-1">Desarrollo de aplicaciones con React</p>
          <p>Uso de componentes funcionales y de clase</p>
          <p>Redux para gestión de estados</p>
          <p>Design Systems y TypeScript básico</p>
          <p>Integración de GTM y Google Analytics</p>
          <p>Lanzamiento y hosting de aplicaciones</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            ☁️ DevOps y Despliegue en la Nube
          </h3>
          <p className="mt-1">Docker y Docker Compose</p>
          <p>Kubernetes para contenedores</p>
          <p>Automatización con Jenkins y GitHub Actions</p>
          <p>Despliegue en AWS, Google Cloud y Azure</p>
          <p>Metodologías Agile y Scrum</p>
        </div>
      </section>
    </main>
  );
}
