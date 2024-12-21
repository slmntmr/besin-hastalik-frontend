export default function HomePage() {
  return (
    <div className="main-container">
      <h1>Besin Hastalık Uygulaması</h1>
      <p>Hastalıkların ve besinlerin etkilerini keşfetmek için sayfalara göz atın.</p>
      <div className="card-container">
        <div className="card">
          <h3>Hastalıklar</h3>
          <p>Hastalıkların iyi gelen besinlerini keşfedin.</p>
        </div>
        <div className="card">
          <h3>Besinler</h3>
          <p>Besinlerin faydalarını öğrenin.</p>
        </div>
      </div>
    </div>
  );
}
