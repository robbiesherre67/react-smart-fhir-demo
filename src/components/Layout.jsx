export default function Layout({ children }) {
    return (
      <div className="app-root">
        <header className="header">
          <div>
            <h1 className="title">Pediatric SMART on FHIR Dashboard</h1>
            <p className="subtitle">
              AI-powered clinical insights • React • FHIR • GenAI
            </p>
          </div>
        </header>
  
        <main className="main-content">{children}</main>
      </div>
    );
  }
  