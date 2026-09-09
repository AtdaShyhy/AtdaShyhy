import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function App() {
  const [currentLevel, setCurrentLevel] = useState('main');
  const [history, setHistory] = useState([]);
  const [currentAyah, setCurrentAyah] = useState(null);
  const [popup, setPopup] = useState(null);

  const navigateTo = (level) => {
    setHistory([...history, currentLevel]);
    setCurrentLevel(level);
  };

  const goBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousLevel = newHistory.pop();
      setHistory(newHistory);
      setCurrentLevel(previousLevel);
    }
  };

  const MainLevel = () => (
    <div className="level-container">
      <div className="ayah-card main-menu-card" onClick={() => navigateTo('ilkinji-bilmeli-menu')} style={{ cursor: 'pointer', background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)', borderColor: 'rgba(212, 175, 122, 0.4)', justifyContent: 'center', minHeight: 'unset' }}>
        <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '0.45rem 1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontWeight: '400', fontFamily: 'Amiri, serif', lineHeight: '1.4', direction: 'rtl', marginBottom: '0.2rem' }}>أَوَّلُ مَا يَنْبَغِي لِلْمُسْلِمِ أَنْ يَعْلَمَ</p>
          <p style={{ color: '#f4e4c1', fontSize: '1.35rem', fontWeight: '700', lineHeight: '1.35' }}>Musulmanyň ilkinji bilmeli zady</p>
        </div>
      </div>

      <div className="ayah-card main-menu-card" onClick={() => navigateTo('zikirler')} style={{ cursor: 'pointer', background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)', borderColor: 'rgba(212, 175, 122, 0.4)', justifyContent: 'center', minHeight: 'unset' }}>
        <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '0.45rem 1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontWeight: '400', fontFamily: 'Amiri, serif', lineHeight: '1.4', direction: 'rtl', marginBottom: '0.2rem' }}>الأَذْكَارُ الصَّبَاحِيَّةُ وَالمَسَائِيَّةُ</p>
          <p style={{ color: '#f4e4c1', fontSize: '1.35rem', fontWeight: '700', lineHeight: '1.35' }}>Irdenki we Agşamky<br />zikirler we dogalar</p>
        </div>
      </div>

      <div className="ayah-card main-menu-card" onClick={() => navigateTo('quran')} style={{ cursor: 'pointer', background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)', borderColor: 'rgba(212, 175, 122, 0.4)', justifyContent: 'center', minHeight: 'unset' }}>
        <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '0.45rem 1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontWeight: '400', fontFamily: 'Amiri, serif', lineHeight: '1.4', direction: 'rtl', marginBottom: '0.2rem' }}>الْقُرْآنُ الْكَرِيمُ</p>
          <p style={{ color: '#f4e4c1', fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.3' }}>Mukaddes Kuran</p>
        </div>
      </div>

      <div className="ayah-card main-menu-card" onClick={() => navigateTo('hadis')} style={{ cursor: 'pointer', background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)', borderColor: 'rgba(212, 175, 122, 0.4)', justifyContent: 'center', minHeight: 'unset' }}>
        <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '0.45rem 1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontWeight: '400', fontFamily: 'Amiri, serif', lineHeight: '1.4', direction: 'rtl', marginBottom: '0.2rem' }}>الأَحَادِيثُ النَّبَوِيَّةُ</p>
          <p style={{ color: '#f4e4c1', fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.3' }}>Hadisler</p>
        </div>
      </div>

      <div className="ayah-card main-menu-card" onClick={() => navigateTo('namaz-sozleri')} style={{ cursor: 'pointer', background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)', borderColor: 'rgba(212, 175, 122, 0.4)', justifyContent: 'center', minHeight: 'unset' }}>
        <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '0.45rem 1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontWeight: '400', fontFamily: 'Amiri, serif', lineHeight: '1.4', direction: 'rtl', marginBottom: '0.2rem' }}>كَلِمَاتٌ مُتَعَلِّقَةٌ بِالصَّلَاةِ</p>
          <p style={{ color: '#f4e4c1', fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.3' }}>Namaz bilen bagly sözler</p>
        </div>
      </div>

      <div className="ayah-card main-menu-card" onClick={() => navigateTo('kitablar')} style={{ cursor: 'pointer', background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%)', borderColor: 'rgba(212, 175, 122, 0.4)', justifyContent: 'center', minHeight: 'unset' }}>
        <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '0.45rem 1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontWeight: '400', fontFamily: 'Amiri, serif', lineHeight: '1.4', direction: 'rtl', marginBottom: '0.2rem' }}>الْكُتُبُ الإِسْلَامِيَّةُ</p>
          <p style={{ color: '#f4e4c1', fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.3' }}>Kitablar</p>
        </div>
      </div>
    </div>
  );

  const dogaMysallar2 = [
    'Çaga bermegini soramak — çagany berýän diňe Allahdyr. Şonuň üçin muny Allahdan başgadan soramak uly şirkdir.',
    'Rysk bermegini soramak — rysky berýän diňe Allahdyr. Şonuň üçin muny Allahdan başgadan soramak uly şirkdir.',
    'Jenneti soramak — Jennete girizýän diňe Allahdyr. Şonuň üçin Jenneti Allahdan başgadan soramak uly şirkdir.',
  ];

  const dogaMysallar3 = [
    'Suw getirmegini soramak — sebäbi bu adamyň elinden gelýän işdir.',
    'Ýük götermäge kömek etmegini soramak — sebäbi bu adamyň elinden gelýändir.',
    'Ylym öwretmegini soramak — sebäbi adam öz bilýän zadyny öwredip bilýändir.',
    'Ýol görkezmegini soramak — sebäbi adamyň ýol görkezmäge güýji we bilimi ýetýändir.',
  ];

  const gorkyMysallar1 = [
    'Allahyň azabyndan gorkmak.',
    'Allahyň gazabyndan gorkmak.',
    'Günä sebäpli Allahyň jezalandyrmagyndan gorkmak.',
  ];

  const gorkyMysallar2 = [
    'Ölen adamyň saňa kesel ibermeginden gorkmak.',
    'Gabyrdaky adamyň saňa zyýan ýetirmeginden gorkmak.',
    'Butuň saňa bela ibermeginden gorkmak.',
    'Jynyň özbaşyna saňa zyýan bermeginden gorkmak.',
  ];

  const gorkyMysallar3 = [
    'Ýyrtyjy haýwandan gorkmak.',
    'Otdan gorkmak.',
    'Suwda gark bolmakdan gorkmak.',
    'Ýylan ýa-da içýandan gorkmak.',
  ];

  const gorkyMysallar4 = [
    'Adamlardan gorkup, hak sözi aýtmazlyk.',
    'Adamlardan gorkup, haram işi etmek.',
  ];

  const umytMysallar1 = [
    'Allahyň rehmetini umyt etmek.',
    'Allahyň bagyşlamagyny umyt etmek.',
    'Jenneti umyt etmek.',
  ];

  const umytMysallar2 = [
    'Allahdan başganyň günäleri bagyşlamagyny umyt etmek.',
    'Allahdan başganyň Jennete girizmegini umyt etmek.',
    'Allahdan başganyň Dowzahdan halas etmegini umyt etmek.',
    'Allahdan başganyň rysk bermegini umyt etmek.',
  ];

  const umytMysallar3 = [
    'Mugallymyň saňa ylym öwretmegine umyt etmek.',
    'Dostuň saňa karz bermegine umyt etmek.',
  ];

  const dayanmakMysallar1 = [
    'Rysk gazanmakda Allaha daýanmak.',
    'Keselden saplanmak üçin Allaha daýanmak.',
    'Karar kabul edende Allaha daýanmak.',
  ];

  const dayanmakMysallar2 = [
    'Gabyrdaky adama daýanmak.',
    'Buta daýanmak.',
    'Jyna daýanmak.',
  ];

  const dayanmakMysallar3 = [
    'Käbir işleri öz ynanýan adamyna tabşyrmak.',
    'Mugallyma çagaňy okatmagy tabşyrmak.',
  ];

  const DogaDetayLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Doga etmek</h2>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '600', margin: '0 0 0.2rem' }}>Doga diýmek — çagyrmak diýmekdir.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', margin: 0 }}>Doga etmegiň, ýagny çagyrmagyň görnüşleri:</p>
      </div>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>دُعَاءُ الْعِبَادَةِ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diňe Allaha doga etmek.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — wajyp bolan ybadatdyr we ybadatyň iň beýik görnüşlerinden biridir.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Deliller:</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem', marginBottom: '0.5rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.35rem' }}>﴿وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ﴾</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.25rem' }}>«Rebbiňiz aýtdy: "Maňa doga ediň, Men size jogap bereýin".»</p>
          <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Ğafir, 60)</p>
        </div>
        <p style={{ color: '#c9b991', fontSize: '0.88rem', margin: '0 0 0.4rem' }}>Pygamberimiz ﷺ şeýle diýdi:</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem', marginBottom: '0.6rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.35rem' }}>«الدُّعَاءُ هُوَ الْعِبَادَةُ»</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', margin: '0 0 0.25rem' }}>«Doga — ybadatyň hut özüdir.»</p>
          <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Ahmad, Abu Dawud, at-Tirmizi)</p>
        </div>
      </div>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>دُعَاءُ الشِّرْكِ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diňe Allahyň başaryp biljek zadyny Ondan başga birinden soramak.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — uly şirkdir. Şeýle eden adam Yslamdan çykýar we kapyr bolýar.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.6rem' }}>
          {dogaMysallar2.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Deliller:</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem', marginBottom: '0.5rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.35rem' }}>﴿وَلَا تَدْعُ مِنْ دُونِ اللَّهِ مَا لَا يَنْفَعُكَ وَلَا يَضُرُّكَ ۖ فَإِنْ فَعَلْتَ فَإِنَّكَ إِذًا مِنَ الظَّالِمِينَ﴾</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.25rem' }}>«Allahdan başga saňa peýda we zyýan berip bilmeýän zatlara doga etme. Eger şeýle etseň, onda sen zalymlardan (şirk getirenlerden) bolarsyň.»</p>
          <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Ýunus, 106)</p>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.35rem' }}>﴿إِنَّهُ مَنْ يُشْرِكْ بِاللَّهِ فَقَدْ حَرَّمَ اللَّهُ عَلَيْهِ الْجَنَّةَ وَمَأْوَاهُ النَّارُ ۖ وَمَا لِلظَّالِمِينَ مِنْ أَنْصَارٍ﴾</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.25rem' }}>«Kim Allaha şirk goşsa, Allah oňa Jenneti haram edändir we onuň barjak ýeri bolsa Dowzahdyr. Zalymlar üçin hiç bir kömekçi ýokdur.»</p>
          <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Al-Mäidä, 72)</p>
        </div>
      </div>

      <div className="definition-box" style={{ padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>الدُّعَاءُ الْمُبَاحُ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diri adamyň elinden gelýän zady ondan soramak.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — rugsat berilendir.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {dogaMysallar3.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const GorkyLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Gorky</h2>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '600', margin: '0 0 0.2rem' }}>Gorky diýmek — howp abanýan zatdan çekinmekdir.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', margin: 0 }}>Gorkynyň görnüşleri:</p>
      </div>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>خَوْفُ الْعِبَادَةِ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Allahdan gorkmak.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — wajyp bolan ybadatdyr.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Delil:</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem', marginBottom: '0.6rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.35rem' }}>﴿فَلَا تَخَافُوهُمْ وَخَافُونِ إِنْ كُنْتُمْ مُؤْمِنِينَ﴾</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.25rem' }}>«Şonuň üçin olardan gorkmaň-da, Menden gorkuň, eger çyn mömin bolsaňyz.»</p>
          <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Äli Ymran, 175)</p>
        </div>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {gorkyMysallar1.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>خَوْفُ الشِّرْكِ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diňe Allahyň güýji ýetýän zatlarda Allahdan däl-de, başgadan gorkmak.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — uly şirkdir. Şeýle eden adam Yslamdan çykýar we kapyr bolýar.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Delil:</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem', marginBottom: '0.6rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.35rem' }}>﴿إِنَّمَا ذَلِكُمُ الشَّيْطَانُ يُخَوِّفُ أَوْلِيَاءَهُ فَلَا تَخَافُوهُمْ وَخَافُونِ إِنْ كُنْتُمْ مُؤْمِنِينَ﴾</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.25rem' }}>«Aslynda, sizi öz kömekçileri bilen gorkuzýan diňe şeýtandyr. Şonuň üçin olardan gorkmaň-da, Menden gorkuň, eger-de siz çyn mömin bolsaňyz.»</p>
          <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Äli Ymran, 175)</p>
        </div>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {gorkyMysallar2.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>الْخَوْفُ الْمُحَرَّمُ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Gadagan edilen gorky.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Kimdir birinden gorkup, Allahyň buýran zadyny taşlamak ýa-da Onuň haram eden işlerini etmekdir. Bu uly günädir.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Delil:</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem', marginBottom: '0.6rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.35rem' }}>﴿فَلَا تَخْشَوُا النَّاسَ وَاخْشَوْنِ﴾</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>«Adamlardan gorkmaň, Menden gorkuň.»</p>
        </div>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {gorkyMysallar4.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="definition-box" style={{ padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>4-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>الْخَوْفُ الطَّبِيعِيُّ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Tebigy gorky.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — rugsat berilendir.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {gorkyMysallar3.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const UmytLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Umyt etmek</h2>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '600', margin: '0 0 0.2rem' }}>Umyt etmek diýmek — sebäp tutup, bir gowy zada garaşmakdyr.</p>
      </div>

      <div className="definition-box" style={{ padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>الرَّجَاءُ الْوَاجِبُ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diňe Allahdan umyt etmek.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — wajyp bolan ybadatdyr.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Delil:</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem', marginBottom: '0.6rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.35rem' }}>﴿فَمَنْ كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا﴾</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.25rem' }}>«Kim Rebbi bilen duşuşmagy umyt edýän bolsa, goý, ol ýagşy amal etsin we Rebbine edýän ybadatynda hiç kimi şärik goşmasyn.»</p>
          <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Al-Kahf, 110)</p>
        </div>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {umytMysallar1.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>رَجَاءُ الشِّرْكِ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Allahdan başga birinden diňe Allahyň edip biljek zadyny umyt etmek.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — uly şirkdir. Şeýle eden adam Yslamdan çykýar we kapyr bolýar.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Delil:</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem', marginBottom: '0.6rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.35rem' }}>﴿فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا﴾</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.25rem' }}>«Şonuň üçin Allah bilen bilelikde hiç kime doga etmäň.»</p>
          <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Jyn, 18)</p>
        </div>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {umytMysallar2.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="definition-box" style={{ padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>الرَّجَاءُ الْمُبَاحُ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diri adamyň elinden gelýän zady ondan umyt etmek.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — rugsat berilendir.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {umytMysallar3.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DayanmakLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Daýanmak</h2>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '600', margin: 0 }}>Daýanmak diýmek — sebäp tutup, netijäni Allaha tabşyrmakdyr.</p>
      </div>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>تَوَكُّلُ الْعِبَادَةِ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diňe Allaha daýanmak.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — wajyp bolan ybadatdyr.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Delil:</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem', marginBottom: '0.6rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.35rem' }}>﴿وَعَلَى اللَّهِ فَتَوَكَّلُوا إِنْ كُنْتُمْ مُؤْمِنِينَ﴾</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.25rem' }}>«Diňe Allaha daýanyň, eger siz mömin bolsaňyz.»</p>
          <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Mäide, 23)</p>
        </div>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {dayanmakMysallar1.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>تَوَكُّلُ الشِّرْكِ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Allahdan başga birine diňe Allahyň edip biljek zadynda daýanmak.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — uly şirkdir. Şeýle eden adam Yslamdan çykýar we kapyr bolýar.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Delil:</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.7rem 0.8rem', marginBottom: '0.6rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.35rem' }}>﴿وَعَلَى اللَّهِ فَتَوَكَّلُوا إِنْ كُنْتُمْ مُؤْمِنِينَ﴾</p>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.25rem' }}>«Diňe Allaha daýanyň, eger siz mömin bolsaňyz.»</p>
          <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Mäide, 23)</p>
        </div>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {dayanmakMysallar2.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="definition-box" style={{ padding: '0.5rem 0.3rem' }}>
        <p style={{ color: '#d4af7a', fontSize: '0.8rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3-nji görnüş</p>
        <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>التَّوَكُّلُ الْمُبَاحُ</p>
        <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diri adamyň elinden gelýän işde oňa daýanmak, ýagny oňa bir işi tabşyrmak.</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.5rem' }}>Bu — rugsat berilendir.</p>
        <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Mysallar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {dayanmakMysallar3.map((m, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const IbadatGornusleriLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Ybadatyň manysy we görnüşleri</h2>
      <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%)', border: '2px solid rgba(212, 175, 122, 0.25)', borderRadius: '14px', padding: '1rem 1.2rem', marginBottom: '1.2rem' }}>
        <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>Ybadat diýmek — Allah Tagalanyň gowy görýän we razy bolýan ähli amallarydyr.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {[
          { title: 'Doga etmek', arabic: 'الدُّعَاءُ', level: 'doga-detay' },
          { title: 'Gorky', arabic: 'الْخَوْفُ', level: 'gorky-detay' },
          { title: 'Umyt etmek', arabic: 'الرَّجَاءُ', level: 'umyt-detay' },
          { title: 'Daýanmak', arabic: 'التَّوَكُّلُ', level: 'dayanmak-detay' },
        ].map((item, idx) => (
          <div key={idx} onClick={() => navigateTo(item.level)} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.9rem 1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{ minWidth: '36px', height: '28px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>{idx + 1}</div>
              <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontWeight: '600', margin: 0 }}>{item.title}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <p style={{ color: '#c9b991', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', margin: 0 }}>{item.arabic}</p>
              <span style={{ color: '#d4af7a', fontSize: '1.2rem' }}>›</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const IlkinjiBilmeliMenuLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Musulmanyň ilkinji bilmeli zady</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {[
          { num: 1, title: '1-nji bölüm', level: 'shahadah-details' },
          { num: 2, title: '2-nji bölüm', level: 'ibadat-gornusleri' },
          { num: 3, title: '3-nji bölüm', level: null },
          { num: 4, title: '4-nji bölüm', level: null },
        ].map((item) => (
          <div key={item.num} onClick={() => item.level && navigateTo(item.level)} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.9rem 1.2rem', cursor: item.level ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: item.level ? 1 : 0.45 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{ minWidth: '36px', height: '28px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>{item.num}</div>
              <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>{item.title}</p>
            </div>
            {item.level && <span style={{ color: '#d4af7a', fontSize: '1.2rem' }}>›</span>}
          </div>
        ))}
      </div>
    </div>
  );

  const ShahadahDetailsLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Şaýatlyk sözleriniň içine alýan zatlary</h2>
      <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%)', border: '2px solid rgba(212, 175, 122, 0.25)', borderRadius: '14px', padding: '1.5rem', marginBottom: '1.5rem', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
        <p className="arabic" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ</p>
        <p className="translation" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>Men Allahdan başga ybadata hakly hiç bir ilahyň ýokdugyna we Muhammediň ﷺ Allanyň guly we resulydygyna şaýatlyk edýärin.</p>
      </div>
      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ fontSize: '0.92rem', color: '#f4e4c1', margin: '0 0 0.4rem' }}><strong>LÂ ILÂHA ILLA ALLAH</strong> şaýatlygy öz içine 2 zady alýar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {['Allahdan başga ähli ilahlaryň ybadata mynasypdygyny inkär etmek', 'Ýeke-täk Allahyň ybadata mynasyp ilahdygyny tassyk etmek'].map((text, idx) => (
            <div key={idx} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.3rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>{idx + 1}.</span> {text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="definition-box" style={{ marginBottom: '1rem', padding: '0.5rem 0.3rem' }}>
        <p style={{ fontSize: '0.92rem', color: '#f4e4c1', margin: '0 0 0.4rem' }}><strong>MUHAMMADAN 'ABDUHU WA RASÛLUH</strong> şaýatlygy öz içine 4 zady alýar:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {['Pygamberiň ﷺ habar beren zatlaryna ynanmak', 'Onuň buýruklaryny ýerine ýetirmek', 'Onuň gadagan eden zatlaryndan gaça durmak', 'Allaha diňe Onuň görkezişi ýaly ybadat etmek'].map((item, idx) => (
            <div key={idx} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.5rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>{idx + 1}.</span> {item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="definition-box" style={{ padding: '0.5rem 0.3rem' }}>
        <p style={{ fontSize: '0.92rem', color: '#f4e4c1', fontWeight: '600', margin: '0 0 0.4rem' }}>Kesgitlemeler</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {['Ilah diýmek — islendik ybadat edilýän zatdyr.', 'Allah diýmek — ybadata hakly ýeke-täk Ilah diýmekdir.', 'Ybadat diýmek — Allah Tagalanyň gowy görýän we razy bolýan ähli amallarydyr.', 'Gul diýmek - 1) boýun edilen 2) boýun bolýan', 'Resul — bu Allah tarapyndan wahy berlen we adamlara ýetirmek üçin iberilen ilçisidir.'].map((item, idx) => (
            <div key={idx} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.5rem' }}>
              <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>{idx + 1}.</span> {item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ZikirMenuLevel = () => (
    <div className="level-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="ayah-card" onClick={() => navigateTo('irdenky')} style={{ cursor: 'pointer' }}>
          <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '1rem' }}>
            <p style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🌅</p>
            <p style={{ color: '#f4e4c1', fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.8rem' }}>Irdenki zikirler</p>
            <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.6' }}>Irdenki zikirleriň wagty ertir namazdan başlap, öýlän namaza çenli dowam edýär, ýöne iň gowy wagty ertir namazyndan gün dogýança.</p>
          </div>
        </div>
        <div className="ayah-card" onClick={() => navigateTo('agsamky')} style={{ cursor: 'pointer' }}>
          <div className="ayah-content" style={{ width: '100%', textAlign: 'center', padding: '1rem' }}>
            <p style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🌙</p>
            <p style={{ color: '#f4e4c1', fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.8rem' }}>Agşamky zikirler</p>
            <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.6' }}>Agşamky zikirleriň wagty öýlän namazdan ertir namazyna çenli dowam edýär, ýöne iň gowy wagty ikindi namazyndan agşam namazyna çenli.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ZCard = ({ arabic, turkmen, times }) => (
    <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%)', border: '2px solid rgba(212, 175, 122, 0.25)', borderRadius: '14px', padding: '1.5rem', marginBottom: '1.2rem', backdropFilter: 'blur(10px)' }}>
      <p style={{ fontFamily: "'Amiri', serif", fontSize: '1.5rem', color: '#f4e4c1', direction: 'rtl', textAlign: 'right', marginBottom: '1rem', lineHeight: '2' }}>{arabic}</p>
      <p style={{ color: '#c9b991', fontSize: '1rem', lineHeight: '1.7' }}>{turkmen}</p>
      {times && <p style={{ color: '#d4af7a', fontSize: '0.9rem', marginTop: '0.8rem', fontStyle: 'italic' }}>({times})</p>}
    </div>
  );

  const NCard = ({ arabic, turkmen, transliteration, audioSrc }) => {
    const [playing, setPlaying] = React.useState(false);
    const audioRef = React.useRef(null);

    const handleAudio = () => {
      if (playing) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setPlaying(false);
      } else {
        if (!audioRef.current) {
          audioRef.current = new Audio(audioSrc);
          audioRef.current.onended = () => setPlaying(false);
        }
        audioRef.current.play();
        setPlaying(true);
      }
    };

    return (
      <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%)', border: '2px solid rgba(212, 175, 122, 0.25)', borderRadius: '14px', padding: '1rem 0.8rem', marginBottom: '1.2rem', backdropFilter: 'blur(10px)' }}>
        <p style={{ fontFamily: "'Amiri', serif", fontSize: '1.5rem', color: '#f4e4c1', direction: 'rtl', textAlign: 'center', marginBottom: '0.8rem', lineHeight: '2', padding: '0 0.2rem' }}>{arabic}</p>
        <div style={{ borderTop: '1px solid rgba(212, 175, 122, 0.2)', marginBottom: '0.5rem' }} />
        <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', textAlign: 'center', margin: '0 0 0.4rem', letterSpacing: '0.03em' }}>Terjime</p>
        <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: '0 0 0.8rem', padding: '0 0.2rem' }}>{turkmen}</p>
        <div style={{ borderTop: '1px solid rgba(212, 175, 122, 0.2)', marginBottom: '0.5rem' }} />
        <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', textAlign: 'center', margin: '0 0 0.4rem', letterSpacing: '0.03em' }}>Transkripsiýa</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: audioSrc ? '0.8rem' : 0 }}>
          <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>{transliteration}</p>
        </div>
        {audioSrc && (
          <button
            onClick={handleAudio}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', margin: '0 auto', background: playing ? 'rgba(212, 175, 122, 0.25)' : 'rgba(212, 175, 122, 0.15)', border: '1px solid rgba(212, 175, 122, 0.4)', borderRadius: '8px', padding: '0.4rem 1rem', color: '#d4af7a', fontSize: '0.9rem', cursor: 'pointer' }}
          >
            {playing ? '⏹ Dur' : '▶ Diňle'}
          </button>
        )}
      </div>
    );
  };

  const KitablarLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Kitablar</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.9rem' }}>
        <div onClick={() => navigateTo('kitab-uch-esas')} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1.1rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '130px', textAlign: 'center', gap: '0.5rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1rem', fontWeight: '400', margin: 0, fontFamily: 'Amiri, serif', lineHeight: '1.6', textAlign: 'center' }}>الأُصُولُ الثَّلَاثَةُ وَأَدِلَّتُهَا</p>
          <p style={{ color: '#c9b991', fontSize: '0.85rem', margin: 0, lineHeight: '1.4', textAlign: 'center' }}>Üç esas we olaryň delilleri</p>
        </div>
      </div>
    </div>
  );

  const UchEsasLevel = () => (
    <div className="level-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        <div onClick={() => navigateTo('kitab-uch-esas-1')} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.9rem 1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <div style={{ minWidth: '28px', height: '28px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>1</div>
          <p style={{ color: '#f4e4c1', fontSize: '1rem', fontWeight: '600', margin: 0 }}>Birinji bölüm</p>
          <span style={{ color: '#d4af7a', fontSize: '1.2rem', marginLeft: 'auto' }}>›</span>
        </div>
        <div onClick={() => navigateTo('kitab-uch-esas-2')} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.9rem 1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <div style={{ minWidth: '28px', height: '28px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>2</div>
          <p style={{ color: '#f4e4c1', fontSize: '1rem', fontWeight: '600', margin: 0 }}>Ikinji bölüm</p>
          <span style={{ color: '#d4af7a', fontSize: '1.2rem', marginLeft: 'auto' }}>›</span>
        </div>
        <div onClick={() => navigateTo('kitab-uch-esas-3')} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.9rem 1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <div style={{ minWidth: '28px', height: '28px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>3</div>
          <p style={{ color: '#f4e4c1', fontSize: '1rem', fontWeight: '600', margin: 0 }}>Üçünji bölüm</p>
          <span style={{ color: '#d4af7a', fontSize: '1.2rem', marginLeft: 'auto' }}>›</span>
        </div>
        <div onClick={() => navigateTo('kitab-uch-esas-4')} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.9rem 1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <div style={{ minWidth: '28px', height: '28px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>4</div>
          <p style={{ color: '#f4e4c1', fontSize: '1rem', fontWeight: '600', margin: 0 }}>Dördünji bölüm</p>
          <span style={{ color: '#d4af7a', fontSize: '1.2rem', marginLeft: 'auto' }}>›</span>
        </div>
        <div onClick={() => navigateTo('kitab-uch-esas-5')} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.9rem 1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <div style={{ minWidth: '28px', height: '28px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>5</div>
          <p style={{ color: '#f4e4c1', fontSize: '1rem', fontWeight: '600', margin: 0 }}>Bäşinji bölüm</p>
          <span style={{ color: '#d4af7a', fontSize: '1.2rem', marginLeft: 'auto' }}>›</span>
        </div>
        <div onClick={() => navigateTo('kitab-uch-esas-6')} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.9rem 1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <div style={{ minWidth: '28px', height: '28px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>6</div>
          <p style={{ color: '#f4e4c1', fontSize: '1rem', fontWeight: '600', margin: 0 }}>Altynjy bölüm</p>
          <span style={{ color: '#d4af7a', fontSize: '1.2rem', marginLeft: 'auto' }}>›</span>
        </div>
      </div>
    </div>
  );

  const UchEsasBolum1Level = () => (
    <div className="level-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontWeight: '400', margin: '0 0 0.25rem', fontFamily: 'Amiri, serif', textAlign: 'center', lineHeight: '1.6' }}>الأُصُولُ الثَّلَاثَةُ وَأَدِلَّتُهَا</p>
          <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', margin: '0 0 0.5rem', textAlign: 'center' }}>Üç esas we olaryň delilleri</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Bil, Allah Tagala saňa rehim etsin, bize dört zady öwrenmek wajypdyr: <button onClick={() => setPopup({ id: 'wajyp' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button></p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', margin: '0 0 0.8rem' }}>
            {['Ylym, ýagny: Allahy tanamak, Onuň Pygamberini tanamak we Yslam dinini deliller bilen tanamak.', 'Şol ylma görä amal etmek.', 'Şol ylma çagyrmak.', 'Bu ýolda duş gelýän ezýetlere we kynçylyklara sabyr etmek.'].map((item, i) => (
              <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.45rem 0.5rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, textAlign: 'left' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>{i + 1}.</span> {item}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Munuň delili <button onClick={() => setPopup({ id: 'delil' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button> Allatagalanyň şu sözüdir:</p>

          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '10px', padding: '0.7rem 0.9rem', margin: '0 0 0.6rem' }}>
            <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Asr süresi</p>
            {[
              { id: 'asr-1', num: '1', arabic: 'وَالْعَصْرِ', turkmen: 'Wagta kasam bolsun.', hasPopup: true },
              { id: 'asr-2', num: '2', arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', turkmen: 'Hakykatdan-da her-bir adam utulyşdadyr.', hasPopup: false },
              { id: 'iman', num: '3', arabic: 'إِلَّا الَّذِينَ آمَنُوا', turkmen: 'Emma iman edenler,', hasPopup: true },
              { id: 'amal', num: '', arabic: 'وَعَمِلُوا الصَّالِحَاتِ', turkmen: 'we gowy amallar edenler,', hasPopup: true },
              { id: 'hak', num: '', arabic: 'وَتَوَاصَوْا بِالْحَقِّ', turkmen: 'we biri-birine hakykaty ýatladanlar,', hasPopup: true },
              { id: 'sabyr', num: '', arabic: 'وَتَوَاصَوْا بِالصَّبْرِ', turkmen: 'we biri-birine sabyry ýatladýanlar (utulyşda däldirler).', hasPopup: true },
            ].map((ayah) => (
              <div key={ayah.id} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212, 175, 122, 0.15)', borderRadius: '8px', padding: '0.5rem 0.7rem', marginBottom: '0.4rem' }}>
                <p style={{ color: '#f4e4c1', fontSize: '0.92rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.7', margin: '0 0 0.2rem' }}>{ayah.arabic}</p>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.4rem' }}>
                  <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{ayah.num}{ayah.num ? '. ' : ''}{ayah.turkmen}</p>
                  {ayah.hasPopup && (
                    <button onClick={(e) => { e.stopPropagation(); setPopup({ id: ayah.id }); }} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', flexShrink: 0, padding: '2px 5px', lineHeight: 1.2, whiteSpace: 'nowrap' }}>aç</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.55rem 0.8rem' }}>
              <p style={{ color: '#d4af7a', fontWeight: '700', fontSize: '0.88rem', margin: '0 0 0.3rem' }}>Imam Aş-Şafygy, Allah Tagala oňa rehim etsin, şeýle diýdi:</p>
              <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>«Eger-de Allah Tagala Öz gullaryna şu süreden başga hiç bir delil indermedik bolsa-da, bu olara ýeterlik bolardy».{' '}<button onClick={() => setPopup({ id: 'sure-yeterlik' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button></p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.55rem 0.8rem' }}>
              <p style={{ color: '#d4af7a', fontWeight: '700', fontSize: '0.88rem', margin: '0 0 0.3rem' }}>Imam Al-Buhary, Allah Tagala oňa rehim etsin, şeýle diýdi:</p>
              <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.6', margin: '0 0 0.5rem', fontStyle: 'italic' }}>«Sözden we amaldan öň ylym (gelýär). Munuň delili Allatagalanyň şu sözüdir:»</p>
              <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', margin: '0 0 0.5rem' }}>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.3rem' }}>﴿فَاعْلَمْ أَنَّهُ لَا إِلَهَ إِلَّا اللَّهُ وَاسْتَغْفِرْ لِذَنبِكَ﴾</p>
                <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 0.2rem' }}>«Bilgin! Allahdan başga hiç bir hak hudaý ýokdur we günäň üçin bagyşlanma dile!»</p>
                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Muhammet, 19)</p>
              </div>
              <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>«Şonuň üçin, Ol (Allah Tagala) sözden we amaldan öň ilki ylym bilen başlady».</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const UchEsasBolum2Level = () => (
    <div className="level-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>Bilgin, Allah Tagala saňa rehmet etsin: her bir musulman erkege we aýala şu üç meseläni öwrenmek hem-de olara amal etmek wajypdyr:</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>Birinjisi:</span> Allah Tagala bizi ýaratdy, bize rysgal berdi we bizi başyboş (öz ugrumyza) goýmady; gaýtam, bize resul (ilçi) iberdi. Kim oňa boýun bolsa Jennete girer, kim oňa boýun bolmasa Dowzaha girer.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِنَّا أَرْسَلْنَا إِلَيْكُمْ رَسُولًا شَاهِدًا عَلَيْكُمْ كَمَا أَرْسَلْنَا إِلَى فِرْعَوْنَ رَسُولًا، فَعَصَى فِرْعَوْنُ الرَّسُولَ فَأَخَذْنَاهُ أَخْذًا وَبِيلًا﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Hakykatdan-da, Biz edil Fyrgawna resul (ilçi) iberşimiz ýaly, size-de şaýat boljak resul (ilçi) iberdik. Fyrgawn bolsa ol resula boýun bolmady (garşy çykdy), şonuň üçin Biz ony elhenç azap bilen heläk etdik.»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Müzzemmil, 15-16)</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>Ikinjisi:</span> Allah Tagala Özüne edilýän ybadatda hiç kimiň Oňa şärik edilmegine razy bolmaýar — ol hatda iň ýakyn perişde ýa-da iberilen pygamber bolsa-da.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Şübhesiz, metjitler diňe Allaha mahsusdyr. Şonuň üçin, Allah bilen bilelikde hiç kime doga (ybadat) etmäň!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Jyn, 18)</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>Üçünjisi:</span> Kim resula boýun bolup, Allahy (ybadatda) birlese, oňa Allaha we Onuň resulyna garşy çykýanlar bilen dostlaşmak (olary dinleri üçin söýmek) bolýan däldir — hatda olar iň ýakyn garyndaşlary bolsa-da.{' '}<button onClick={() => setPopup({ id: 'yakyn-garyndas' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button></p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿لَا تَجِدُ قَوْمًا يُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ يُوَادُّونَ مَنْ حَادَّ اللَّهَ وَرَسُولَهُ وَلَوْ كَانُوا آبَاءَهُمْ أَوْ أَبْنَاءَهُمْ أَوْ إِخْوَانَهُمْ أَوْ عَشِيرَتَهُمْ أُولَئِكَ كَتَبَ فِي قُلُوبِهِمُ الْإِيمَانَ وَأَيَّدَهُم بِرُوحٍ مِّنْهُ وَيُدْخِلُهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ أُولَئِكَ حِزْبُ اللَّهِ أَلَا إِنَّ حِزْبَ اللَّهِ هُمُ الْمُفْلِحُونَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Sen Allaha we Ahyret gününe iman edýän adamlaryň (içinden), Allaha we Onuň resulyna garşy çykýanlary söýýänini tapmarsyň — hatda olar (garşy çykýanlar) öz kakalary, ogullary, doganlary ýa-da garyndaşlary bolsa-da. Ine, şolaryň ýüreklerine Allah imany ýazandyr (berkidendir) we Özünden ruh (ýeňiş we ýardam) berip olary güýçlendirendir. Ol (Allah) olary aşagyndan derýalar akyp duran, içinde ebedi galjak Jennetlere girizer. Allah olardan razy boldy, olar hem Ondan razy boldular. Ine, şolar — Allahyň toparydyr. Üns beriň! Hakykatdan-da, üstünlik gazanýanlar hut Allahyň toparydyr!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Müjädile, 22)</p>
          </div>
        </div>

      </div>
    </div>
  );

  const UchEsasBolum3Level = () => (
    <div className="level-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Bilgin! Allah seni Öz tagat-ybadatyna gönükdirsin, elbetde, Ybraýym pygamberiň dini hanifiýýädir. Bu bolsa: ýeke-täk Allah Tagala şärik goşmazdan, arassa Oňa ybadat etmekdir. Allah Tagala ähli adamlara hem şuny buýrandyr we olary hut şu (ybadat) üçin ýaradandyr. Edil Allah Tagalanyň şu aýatynda aýdyşy ýaly:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.6rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Men jynlary we adamlary diňe Maňa ybadat etsinler diýip ýaratdym.»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Zariýat, 56)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>(Bu aýatdaky) «ybadat etsinler» sözüniň manysy bolsa: «Meni (ybadatda) birlesinler» diýmekdir.</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Allah Tagalanyň iň uly buýrugy — töwhitdir. Töwhit bolsa: Allahy ybadatda birlemekdir. Allah Tagalanyň iň uly gaýtaran zady bolsa — şirkdir. Şirk bolsa: Allah bilen bilelikde başga birine doga-ybadat etmekdir. Munuň delili Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«(Ýeke-täk) Allaha ybadat ediň we Oňa hiç zady şärik goşmaň...»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Nisa, 36)</p>
          </div>
        </div>

      </div>
    </div>
  );

  const UchEsasBolum4Level = () => (
    <div className="level-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>Eger saňa: «Ynsanyň bilmegi wajyp bolan üç esas haýsylardyr?» diýilse, onda şeýle jogap ber: «Guluň öz Rebbini, dinini we pygamberi Muhammedi ﷺ tanamagydyr».</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#d4af7a', fontSize: '1rem', fontWeight: '700', margin: '0 0 0.6rem' }}>Birinji esas</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Eger saňa: «Rebbiň kim?» diýilse, onda şeýle jogap ber: «Meniň Rebbim — meni we tutuş älemleri Öz nygmatlary bilen ýetişdirip-terbiýelän Allahdyr. Ol meniň ybadat edýän hak ilähimdir, meniň Ondan başga ybadat edýän hiç bir hudaýym ýokdur». Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.6rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Ähli öwgüler älemleriň Rebbi bolan Allaha mahsusdyr.»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Fatyha, 2)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Allahdan başga ähli zat ýaradylan älemdir, men hem şol älemiň bir bölegidirin.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Eger saňa: «Rebbiňi näme arkaly tanadyň?» diýilse, onda şeýle jogap ber:</p>
          <div style={{ background: 'rgba(0,0,0,0.12)', borderLeft: '3px solid rgba(212, 175, 122, 0.4)', borderRadius: '0 8px 8px 0', padding: '0.6rem 0.8rem', marginBottom: '0.6rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.4rem' }}>«Onuň (barlygyny we beýikligini görkezýän) görkezmeleri we ýaradan zatlary arkaly tanadym».</p>
            <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.4rem' }}>Onuň (şol) görkezmelerinden: gije, gündiz, gün we aýdyr.</p>
            <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>Ýaradan zatlaryndan bolsa: ýedi gat asman, ýedi gat ýer we olaryň içindäki we arasyndaky zatlardyr.</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَمِنْ آيَاتِهِ اللَّيْلُ وَالنَّهَارُ وَالشَّمْسُ وَالْقَمَرُ ۚ لَا تَسْجُدُوا لِلشَّمْسِ وَلَا لِلْقَمَرِ وَاسْجُدُوا لِلَّهِ الَّذِي خَلَقَهُنَّ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Gije, gündiz, gün we aý Onuň aýatlaryndandyr (görkezmelerindendir). Güne-de, aýa-da sežde etmäň! Eger-de Siz diňe Allaha ybadat etmek isleýän bolsaňyz, onda olary ýaradan Allaha sežde ediň!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Fussylat, 37)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>We Allah Tagalanyň şeýle-de şu sözidir:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.6rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَى عَلَى الْعَرْشِ يُغْشِي اللَّيْلَ النَّهَارَ يَطْلُبُهُ حَثِيثًا وَالشَّمْسَ وَالْقَمَرَ وَالنُّجُومَ مُسَخَّرَاتٍ بِأَمْرِهِ أَلَا لَهُ الْخَلْقُ وَالْأَمْرُ تَبَارَكَ اللَّهُ رَبُّ الْعَالَمِينَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Hakykatdan-da, siziň Rebbiňiz bolan Allah asmanlary we ýeri alty günde ýaratdy, soňra bolsa Arşyň üstüne çykdy. Ol tiz gelýän gündizi gije bilen örtýär. Güni, aýy we ýyldyzlary hem Öz buýrugyna boýun edip ýaratdy. Üns beriň! Ýaratmak hem, buýruk bermek hem diňe Oňa mahsusdyr. Älemleriň Rebbi bolan Allah beýikdir!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Agraf, 54)</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Reb bolsa — ybadat edilýän Hak Ilahdyr. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ ۝ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا وَالسَّمَاءَ بِنَاءً وَأَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجَ بِهِ مِنَ الثَّمَرَاتِ رِزْقًا لَّكُمْ فَلَا تَجْعَلُوا لِلَّهِ أَندَادًا وَأَنتُمْ تَعْلَمُونَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Eý, adamlar! Sizi we sizden öňküleri ýaradan Rebbiňize ybadat ediň, (şeýle etseňiz) belki, tagwa bolarsyňyz! ۝ Ol (Rebbiňiz) size ýeri düşek, asmany bolsa bina etdi. Asmandan suw indirip, onuň bilen size rysgal hökmünde miweleri çykardy. Şonuň üçin, (muny) bilip durkaňyz, Allaha hiç kimi deň tutmaň (şärik goşmaň)!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Bakara, 21-22)</p>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.55rem 0.8rem', marginTop: '0.7rem' }}>
            <p style={{ color: '#d4af7a', fontWeight: '700', fontSize: '0.88rem', margin: '0 0 0.3rem' }}>Ibn Kesir, Allah oňa rehmet etsin, şeýle aýtdy:</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>«Şu zatlary Ýaradanyň hut Özi ybadata mynasypdyr».</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Allah Tagalanyň bize buýran ybadatlarynyň görnüşlerine, şu aşakdakylar mysaldyr: Yslam, Iman, Yhsan. Şeýle hem ol ybadatlardan: doga-dileg, gorky, umyt, daýanmak, Er-Rogba (umyt bilen amal etmek), Er-Rohba (gorkyp amal etmek), El-Huşug (Allahy beýgeldip peselmek), El-Haşýä (ylymyň esasynda gorkmak), El-Inäbe (toba edip Allaha dolanmak), isti'ana (kömek soramak), isti'aza (pena dilemek), istigasa (gyssananda ýardam soramak), gurbanlyk kesmek, nezir etmek (aýdylan zady etmek) we Allah Tagalanyň buýran beýleki ähli ybadat görnüşleridir — bularyň ählisi diňe Allah Tagala üçin edilmelidir.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Metjitler diňe Allaha mahsusdyr. Şonuň üçin, Allah bilen bilelikde hiç kime doga (ybadat) etmäň!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Jyn, 18)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Kim şol ybadatlaryň haýsam bolsa birini Allahdan başga birine etse, ol müşrik{' '}<button onClick={() => setPopup({ id: 'musrik' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button>{' '}we kapyr{' '}<button onClick={() => setPopup({ id: 'kapyr' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button>{' '}bolýandyr. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَمَن يَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ لَا بُرْهَانَ لَهُ بِهِ فَإِنَّمَا حِسَابُهُ عِندَ رَبِّهِ إِنَّهُ لَا يُفْلِحُ الْكَافِرُونَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Kim Allah bilen bilelikde, hiç bir delili bolmadyk başga bir ilähe doga-ybadat etse, ol jezasyny öz Rebbiniň ýanynda çeker. Hakykatdan-da, kapyrlar üstünlik gazanmazlar (halas bolmazlar)!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Möminun, 117)</p>
          </div>
          <p style={{ color: '#d4af7a', fontSize: '1rem', fontWeight: '700', margin: '0.8rem 0 0.5rem', textAlign: 'center', letterSpacing: '0.03em' }}>Ybadatyň görnüşleri{' '}<button onClick={() => setPopup({ id: 'ybadat-manys' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button></p>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.55rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#d4af7a', fontWeight: '700', fontSize: '0.88rem', margin: '0 0 0.3rem' }}>Hadysda Pygamberimiz ﷺ şeýle diýdi:</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>«Doga hut ybadatyň özenidir».</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Doganyň ybadatdygyna delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Siziň Rebbiňiz aýtdy: «Maňa doga ediň, Men hem size jogap bereýin (dilegiňizi kabul edeýin)! Hakykatdan-da, Maňa ybadat etmekden tekepbirlik edýänler peselen ýagdaýda Dowzaha girerler!»»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: '0 0 0.5rem' }}>(Gafyr, 60)</p>
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setPopup({ id: 'doga-ginisleyin' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '8px', color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', cursor: 'pointer', padding: '4px 12px', lineHeight: 1.4 }}>giňişleýin öwren</button>
            </div>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Gorkynyň delili bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿...فَلَا تَخَافُوهُمْ وَخَافُونِ إِن كُنتُم مُّؤْمِنِينَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«...Eger-de Siz çyn mömin bolsaňyz, onda olardan gorkmaň-da, Menden gorkuň!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: '0 0 0.5rem' }}>(Äli-Imran, 175)</p>
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setPopup({ id: 'gorky-ginisleyin' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '8px', color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', cursor: 'pointer', padding: '4px 12px', lineHeight: 1.4 }}>giňişleýin öwren</button>
            </div>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Umydyň delili bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿...فَمَن كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«...Kim öz Rebbi bilen duşuşmagy umyt edýän bolsa, goý, ol ýagşy amal etsin we Rebbine edýän ybadatynda hiç kimi Oňa şärik goşmasyn!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: '0 0 0.5rem' }}>(Kehf, 110)</p>
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setPopup({ id: 'umyt-ginisleyin' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '8px', color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', cursor: 'pointer', padding: '4px 12px', lineHeight: 1.4 }}>giňişleýin öwren</button>
            </div>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Daýanmagyň delili bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿...وَعَلَى اللَّهِ فَتَوَكَّلُوا إِن كُنتُم مُّؤْمِنِينَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«...Eger-de Siz çyn mömin bolsaňyz, onda diňe Allaha daýanyň!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Mäide, 23)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Şeýle hem Allah Tagala aýtdy:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿...وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«...Kim Allaha daýansa, Ol (Allah) oňa ýeterlikdir!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: '0 0 0.5rem' }}>(Talak, 3)</p>
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setPopup({ id: 'dayanmak-ginisleyin' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '8px', color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', cursor: 'pointer', padding: '4px 12px', lineHeight: 1.4 }}>giňişleýin öwren</button>
            </div>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Er-Rogbanyň (umyt bilen amal etmegiň), Er-Rohbanyň (gorkyp amal etmegiň) we El-Huşugyň (Allahy beýgeldip peselmegiň ybadatdygyna) delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿...إِنَّهُمْ كَانُوا يُسَارِعُونَ فِي الْخَيْرَاتِ وَيَدْعُونَنَا رَغَبًا وَرَهَبًا وَكَانُوا لَنَا خَاشِعِينَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«...Hakykatdan-da, olar ýagşy işlere howlugardylar we Bize ragba hem-de rahba bilen doga ederdiler. Olar Bizi beýgeldip, (peselen halda) boýun bolardylar!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Enbiýä, 90)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>El-Haşýäniň (ylymyň esasynda gorkmagyň ybadatdygyna) delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿...فَلَا تَخْشَوْهُمْ وَاخْشَوْنِ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«...Şonuň üçin olardan gorkmaň-da, Menden gorkuň!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Mäide, 3)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>El-Inäbäniň (toba edip Allaha dolanmagyň ybadatdygyna) delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَأَنِيبُوا إِلَىٰ رَبِّكُمْ وَأَسْلِمُوا لَهُ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Rebbiňize dolanyň (toba ediň) we Oňa boýun boluň!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Zümer, 54)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Isti'ananyň (kömek soramagyň ybadatdygyna) delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«(Eý, Allahym!) Diňe Saňa ybadat edýäris we diňe Senden kömek soraýarys!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Fätihe, 5)</p>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.55rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#d4af7a', fontWeight: '700', fontSize: '0.88rem', margin: '0 0 0.3rem' }}>Hadysda bolsa şeýle aýdylýar:</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>«Eger kömek sorajak bolsaň, onda diňe Allahdan kömek sora!»</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Isti'azanyň (pena we gorag dilemegiň ybadatdygyna) delil bolsa Allah Tagalanyň şu aýatlarydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.5rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Aýt: «Men daňyň Rebbinden gorag soraýaryn!»»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Felek, 1)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.9rem', margin: '0 0 0.5rem', textAlign: 'center' }}>we</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Aýt: «Men adamlaryň Rebbinden gorag soraýaryn!»»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Näs, 1)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Istigasanyň (gyssananda ýardam soramagyň ybadatdygyna) delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«(Ýadyňyza salyň!) Şol wagt (Bedr söweşinde) siz Rebbiňizden (gyssagly ýagdaýda) kömek soraýardyňyz, Ol hem size jogap berdi (dilegiňizi kabul etdi)...»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Enfal, 9)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Gurbanlyk kesmegiň (ybadatdygyna) delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ ۝ لَا شَرِيكَ لَهُ...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Aýt: "Hakykatdan-da, meniň namazym, gurbanlygym, ýaşaýşym we ölümim — älemleriň Rebbi bolan Allah üçindir. ۝ Onuň hiç bir şärigi ýokdur..."»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Engam, 162-163)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.5rem 0 0.5rem' }}>Sünnetden (delil) bolsa şu hadysdyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '7px', padding: '0.5rem 0.8rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.93rem', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>«Allahdan başga biri üçin gurbanlyk keseni Allah nälet{' '}<button onClick={() => setPopup({ id: 'nalet' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button>{' '}edendir!»</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Nezir etmegiň (ybadatdygyna) delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿يُوفُونَ بِالنَّذْرِ وَيَخَافُونَ يَوْمًا كَانَ شَرُّهُ مُسْتَطِيرًا﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Olar nezirlerini (aýdylanlaryny) berjaý edýärdiler we elhençligi giňden ýaýraýan Günden gorkýardylar!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Insan, 7)</p>
          </div>
        </div>


      </div>
    </div>
  );

  const UchEsasBolum5Level = () => (
    <div className="level-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#d4af7a', fontSize: '1rem', fontWeight: '700', margin: '0 0 0.6rem' }}>Ikinji esas</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Yslam dinini delilleri bilen tanamakdyr. «Ol (Yslam) bolsa: Allahy birläp Oňa boýun bolmak, Onuň buýran zatlaryna tabyn bolmak hem-de şirkden we müşriklerden päklenmekdir.»</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Bu din üç derejeden ybaratdyr: Yslam, Iman we Yhsan.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>We her bir derejäniň hem öz sütünleri bardyr.</p>
          <p style={{ color: '#d4af7a', fontSize: '1rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Birinji dereje: Yslam</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Yslamyň sütünleri bolsa bäşdir: «Allahdan başga ybadat edilmäge mynasyp bolan hiç bir hak iläh ýokdur we Muhammed Allahyň resulydyr» diýip şaýatlyk etmek, namaz okamak, zekat bermek, Remezan aýynda agyz beklemek we Allahyň Mukaddes Öýüne haj etmekdir.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Şaýatlyk etmegiň delili bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.6rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ ۚ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Allah adalaty dik tutup, Özünden başga (ybadata hakly) hiç bir ilähiň ýokdugyna şaýatlyk berdi. Perişdeler we ylym eýeleri hem muňa şaýatlyk berdiler. Ondan başga hiç bir (hak) ilah ýokdur, Ol — Azizdir, Hakimdir!»{' '}<button onClick={() => setPopup({ id: 'aziz-hakim' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button></p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Äli-Imran, 18)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.8rem' }}>Onuň manysy bolsa: «Allahdan başga ybadat edilmäge mynasyp bolan hiç bir hak iläh ýokdur» diýmekdir.</p>
          <div style={{ background: 'rgba(0,0,0,0.12)', borderLeft: '3px solid rgba(212, 175, 122, 0.4)', borderRadius: '0 8px 8px 0', padding: '0.6rem 0.8rem', marginBottom: '0.6rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.4rem' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>«Lā ilāhe»</span> — Allahdan başga ähli ilahlaryň ybadata mynasypdygyny inkär etmekdir.</p>
            <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>«Illallāh»</span> — Ýeke-täk Allahyň ybadata mynasyp ilahdygyny tassyk etmekdir.</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Onuň mülkünde hiç bir şärigi bolmaýşy ýaly, Oňa edilýän ybadatda hem hiç bir şärigi ýokdur.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Muny aýdyňlaşdyrýan düşündiriş bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِيهِ وَقَوْمِهِ إِنَّنِي بَرَاءٌ مِّمَّا تَعْبُدُونَ ۝ إِلَّا الَّذِي فَطَرَنِي فَإِنَّهُ سَيَهْدِينِ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«(Ýadyňa sal!) Ine, Ibrahim kakasyna we kowmuna şeýle diýdi: «Hakykatdan-da, men siziň ybadat edýän zatlaryňyzdan päkdirin, ۝ diňe meni ýaradan (Allahdan) başga...»»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Zuhruf, 26-27)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Şeýle hem Allah Tagala aýtdy:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ أَلَّا نَعْبُدَ إِلَّا اللَّهَ وَلَا نُشْرِكَ بِهِ شَيْئًا وَلَا يَتَّخِذَ بَعْضُنَا بَعْضًا أَرْبَابًا مِّن دُونِ اللَّهِ ۚ فَإِن تَوَلَّوْا فَقُولُوا اشْهَدُوا بِأَنَّا مُسْلِمُونَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Aýt (eý, Resul): «Eý, Kitap berlenler (ýahudylar we hristianlar)! Biziň bilen siziň araňyzda deň bolan bir söze geliň: (ol bolsa) diňe Allaha ybadat edeliň, Oňa hiç bir zady şärik goşmazdan we Allahy goýup, biri-birimizi reb (hudaý) edinmäliň (Allaha garşy çykmakda adamlara boýun bolmalyň)!» Eger olar (bu çagyryşdan) ýüz öwürseler, onda (olara): «Şaýat boluň, biz (Allaha) boýun bolan musulmanlardyrys!» diýip aýdyň!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Äli-Imran, 64)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Muhammediň Allahyň resulylygyna şaýatlyk etmegiň delili bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.6rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيصٌ عَلَيْكُم بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Hakykatdan-da, size öz içiňizden (bir) Resul geldi. Siziň kynçylyk çekmegiňiz oňa agyr degýändir, ol siziň (dogry ýola düşmegiňize we peýdaňyza) çemeleşýändir, möminlere bolsa (örän) mähribandyr, rehimlidir!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Töwbe, 128)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Muhammediň Allahyň resulylygyna şaýatlyk etmegiň manysy bolsa: buýran zatlarynda oňa boýun bolmak, habar beren zatlaryny tassyklamak, gadagan edip gaýtaran zatlaryndan daş durmak (saklanmak) hem-de Allaha diňe onuň görkezen (öwreden) ýoly bilen ybadat etmekdir.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Namazyň, zekatyň we töwhidiň düşündirişiniň delili bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.6rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ وَذَٰلِكَ دِينُ الْقَيِّمَةِ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Aslynda, olara diňe ybadaty arassa Oňa (Allaha) bagyşlap, hanif bolup (şirkden daş durup) ýeke-täk Allaha ybadat etmek, namaz okamak we zekat bermek buýruldy. Ine, hak (dogry) din hut şudur!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Beýýine, 5)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Agyz beklemegiň delili bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Eý, iman edenler! Edil sizden öňki (ummatlara) parz edilişi ýaly, size hem agyz beklemek parz edildi, siziň tagwa bolmagyňyz üçin (günälerden daşlaşyp, Allahyň azabyndan goranmagyňyz üçin)!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Bakara, 183)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Hajyň etmekligiň delili bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.6rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا ۚ وَمَن كَفَرَ فَإِنَّ اللَّهَ غَنِيٌّ عَنِ الْعَالَمِينَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Mümkinçiligi bar bolan adamlara Allahyň öňünde haj etmek parzdyr. Kim kapyr bolsa (muny inkär etse), şübhesiz, Allah älemlere (hiç kime) mätäç däldir!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Äli-Imran, 97)</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#d4af7a', fontSize: '1rem', fontWeight: '700', margin: '0 0 0.6rem' }}>Ikinji dereje: Iman</p>

          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Iman ýetmişden gowrak şahadan ybaratdyr. Onuň iň ýokarky derejesi: «Lā ilāhe illallāh» diýmekdir, iň pesi bolsa ýoldan päsgelçiligi aýyrmakdyr. Utanç-haýa hem imanyň bir şahasydyr.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Onuň sütünleri bolsa altydyr: Allaha, Onuň perişdelerine, Onuň kitaplaryna, Onuň resullaryna, Ahyret gününe hem-de takdyryň gowusyna we erbedine iman getirmegiňdir.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Şu alty sütüniň delili bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿لَّيْسَ الْبِرَّ أَن تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَالْمَلَائِكَةِ وَالْكِتَابِ وَالنَّبِيِّينَ...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Ýagşylyk diňe bir ýüzüňizi (namaz okaňyzda) gündogara we günbatara tarap öwürmegiňiz däldir, eýsem (hakyky) ýagşylyk — Allaha, Ahyret gününe, perişdelere, Kitaba we pygamberlere iman edeniň imanydyr...»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Bakara, 177)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Takdyryň (ýazgydyň) delili bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Hakykatdan-da, Biz her bir zady takdyr bilen (öňünden ýazylan ýazgyt boýunça) ýaratdyk!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Kamer, 49)</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#d4af7a', fontSize: '1rem', fontWeight: '700', margin: '0 0 0.6rem' }}>Üçünji dereje: Yhsan</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Ol ýeke-täk bir sütün bolup, Allaha edil Ony görüp duran ýaly ybadat etmegiňdir. Eger sen Ony görmeýän bolsaň-da, şübhesiz, Ol seni görýändir.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُم مُّحْسِنُونَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Hakykatdan-da, Allah takwa bolanlar (günälerden daşlaşanlar) we yhsan (ýagşylyk) edýänler bilendir!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Nahl, 128)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Şeýle hem Allah Tagalanyň şu sözüdir:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem', marginBottom: '0.7rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَتَوَكَّلْ عَلَى الْعَزِيزِ الرَّحِيمِ ۝ الَّذِي يَرَاكَ حِينَ تَقُومُ ۝ وَتَقَلُّبَكَ فِي السَّاجِدِينَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Diňe Eziz (Ýeňilmeýän), Rehimli bolan (Allaha) daýan! ۝ Ol seni (namaza) duran wagtyň görýändir, ۝ we sežde edýänleriň arasynda (namazda) egilip-galşyňy hem (görýändir)!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Şuara, 217-219)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Şeýle hem Allah Tagalanyň şu sözüdir:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَمَا تَكُونُ فِي شَأْنٍ وَمَا تَتْلُو مِنْهُ مِن قُرْآنٍ وَلَا تَعْمَلُونَ مِنْ عَمَلٍ إِلَّا كُنَّا عَلَيْكُمْ شُهُودًا إِذْ تُفِيضُونَ فِيهِ...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«(Eý, Pygamber!) Sen haýsy bir işde bolsaň-da, Kurandan näme okasaň-da we (eý, adamlar!) siz haýsy bir amaly etseňiz-de, şol amala başlan (we edýän) wagtyňyzda Biz hökman siziň üstüňizde şaýatdyrys (ähli zady görüp-synlap durandyrys)...»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Ýunus, 61)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Sünnetden delil bolsa: meşhur Jibril hadysydyr. Omar Allah ondan razy bolsun şeýle aýtdy:</p>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>«Bir gün biz Allahyň Resulynyň ﷺ ýanynda otyrkak, ýanymyza bir adam geldi. Onuň eşikleri appak, saçlary gap-gara bolup, üst-başy sapardan (uzak ýoldan) gelene meňzemeýärdi we aramyzdan hem ony hiç kim tanamaýardy. Ol gelip Pygamberiň ﷺ öňünde oturdy-da, dyzlaryny Onuň dyzlaryna diräp, iki aýasyny budunyň üstünde goýdy-da: «Eý, Muhammed!» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>«Maňa Yslam barada habar ber?»</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Allahyň Resuly ﷺ aýtdy: «Yslam: «Allahdan başga hiç bir (hak) hudaý ýokdur we Muhammed Allahyň resulydyr» diýip şaýatlyk etmegiň, namaz okamagyň, zekat bermegiň, Remezan aýynda agyz beklemegiň we eger ýoluna güýjüň ýetse, (Allahyň) Öýüne haj etmegiňdir». Ol (Jebraýyl): «Dogry aýtdyň!» diýdi. Biz bolsa onuň hem sorap, hem-de tassyklamagyna geň galdyk.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Jebraýyl): «Onda maňa Iman barada habar ber?» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Pygamberimiz ﷺ): «Allaha, Onuň perişdelerine, Onuň kitaplaryna, Onuň resullaryna, Ahyret gününe hem-de takdyryň gowusyna we erbedine iman getirmegiňdir» diýdi. Ol (Jebraýyl): «Dogry aýtdyň!» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Jebraýyl): «Onda maňa Yhsan barada habar ber?» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Pygamberimiz ﷺ): «Allaha edil Ony görüp duran ýaly ybadat etmegiňdir. Eger sen Ony görmeýän bolsaň-da, şübhesiz, Ol seni görýändir» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Jebraýyl): «Onda maňa Kyýamat (haçan boljak wagty) barada habar ber?» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Pygamberimiz ﷺ): «Sorag berilýän kişi soraýandan has köp bilýän däldir» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Jebraýyl): «Onda maňa onuň alamatlary barada habar ber?» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol aýtdy: «Gyrnagyň (gul aýalyň) öz eýesini dogurmagy, şeýle hem aýagy ýalaňaç, egni ýalaňaç, garyp goýun çopanlarynyň belent binalary gurmakda bäsleşýändiklerini görmegiňdir».</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: 0, fontStyle: 'italic' }}>(Omar) aýtdy: «Soňra ol (adam) gitdi. Birnäçe wagt geçenden soňra (Pygamberimiz ﷺ) maňa: «Eý, Omar! Sorag bereniň kimdigini bilýärmisiň?» diýdi. Men: «Allah we Onuň resuly has gowy bilýändir» diýdim. (Pygamberimiz ﷺ): «Hakykatdan-da, ol Jebraýyldyr, size diniňizi öwretmek üçin geldi» diýdi».</p>
          </div>
        </div>

      </div>
    </div>
  );

  const UchEsasBolum6Level = () => (
    <div className="level-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#d4af7a', fontSize: '1rem', fontWeight: '700', margin: '0 0 0.6rem' }}>Üçünji esas</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Pygamberiňiz Muhammedi ﷺ tanamakdyr. Ol — Muhammed ibn Abdullah ibn Abdulmuttalyb ibn Haşymdyr. Haşym Kureýş tiresindendir, Kureýş araplardandyr, araplar bolsa Halyl{' '}<button onClick={() => setPopup({ id: 'halyl-manys' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button>{' '}bolan Ybrahymyň ogly Ysmaýylyň neslindendir — oňa we biziň Pygamberimize salawatlaryň hem-de salamlaryň iň gowusy bolsun!</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Ol altmyş üç ýyl ýaşandyr: kyrk ýyly pygamberlikden öň (bolan), ýigrimi üç ýyly bolsa pygamber we resul bolup geçendir.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.6rem' }}>Oňa "Oka (اِقْرَأْ)!" aýaty bilen pygamberlik berlendir we "El-Muddessir (المدثر)" süresi bilen hem, resul bolandyr. Onuň doglan şäheri bolsa Mekgedir.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Allah ony şirkden ägälendirmek we töwhide çagyrmak üçin iberdi. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ ۝ وَرَبَّكَ فَكَبِّرْ ۝ وَثِيَابَكَ فَطَهِّرْ ۝ وَالرُّجْزَ فَاهْجُرْ ۝ وَلَا تَمْنُن تَسْتَكْثِرُ ۝ وَلِرَبِّكَ فَاصْبِرْ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Eý, bürenip ýatan (Pygamber)! ۝ Tur-da, (Adamlary Allahyň azabyndan) ägälendir! ۝ We Rebbini beýikle! ۝ Egin-eşigiňi päkle! ۝ Rujzdan daşlaş! ۝ (Eden ýagşylygyň) köpdür öýdüp, minnet etme! ۝ We Rebbiň üçin sabyr et!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Muddessir, 1-7)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.7rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.12)', borderLeft: '3px solid rgba(212, 175, 122, 0.4)', borderRadius: '0 8px 8px 0', padding: '0.5rem 0.8rem' }}>
              <p style={{ color: '#d4af7a', fontSize: '0.88rem', fontWeight: '700', margin: '0 0 0.2rem' }}>﴿Tur-da, (Adamlary Allahyň azabyndan) ägälendir!﴾</p>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>Şirkden ägälendirmek we töwhide çagyrmakdyr.</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.12)', borderLeft: '3px solid rgba(212, 175, 122, 0.4)', borderRadius: '0 8px 8px 0', padding: '0.5rem 0.8rem' }}>
              <p style={{ color: '#d4af7a', fontSize: '0.88rem', fontWeight: '700', margin: '0 0 0.2rem' }}>﴿We Rebbini beýikle!﴾</p>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>Ýagny: Ony töwhit bilen beýikle.</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.12)', borderLeft: '3px solid rgba(212, 175, 122, 0.4)', borderRadius: '0 8px 8px 0', padding: '0.5rem 0.8rem' }}>
              <p style={{ color: '#d4af7a', fontSize: '0.88rem', fontWeight: '700', margin: '0 0 0.2rem' }}>﴿Egin-eşigiňi päkle!﴾</p>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>Ýagny: amallaryňy şirkden päkle.</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.12)', borderLeft: '3px solid rgba(212, 175, 122, 0.4)', borderRadius: '0 8px 8px 0', padding: '0.5rem 0.8rem' }}>
              <p style={{ color: '#d4af7a', fontSize: '0.88rem', fontWeight: '700', margin: '0 0 0.2rem' }}>﴿Rujzdan{' '}<button onClick={() => setPopup({ id: 'rujz-manys' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button>{' '}daşlaş!﴾</p>
              <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>Rujz — butlardyr. Olardan daşlaşmak bolsa: olary terk etmek hem-de olardan we olara ybadat edýänlerden (müşriklerden) päklenmekdir.</p>
            </div>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Ol on ýyllap şu ýagdaýda (adamlary) töwhide çagyrdy. On ýyldan soňra bolsa, ol asmana galdyryldy we oňa bäş wagt namaz parz edildi. Ol Mekgede üç ýyl namaz okady, ondan soň bolsa oňa Medinä hijret etmek buýruldy.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Hijret bolsa: şirk (kapyr) ýurdundan Yslam ýurduna göçmekdir.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Şirk ýurdundan Yslam ýurduna hijret etmek bu ymmat üçin parzdyr we ol tä Kyýamat gopýança dowam edýändir.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِنَّ الَّذِينَ تَوَفَّاهُمُ الْمَلَائِكَةُ ظَالِمِي أَنفُسِهِمْ قَالُوا فِيمَ كُنتُمْ ۖ قَالُوا كُنَّا مُسْتَضْعَفِينَ فِي الْأَرْضِ ۚ قَالُوا أَلَمْ تَكُنْ أَرْضُ اللَّهِ وَاسِعَةً فَتُهَاجِرُوا فِيهَا ۚ فَأُولَٰئِكَ مَأْوَاهُمْ جَهَنَّمُ ۖ وَسَاءَتْ مَصِيرًا ۝ إِلَّا الْمُسْتَضْعَفِينَ مِنَ الرِّجَالِ وَالنِّسَاءِ وَالْوِلْدَانِ لَا يَسْتَطِيعُونَ حِيلَةً وَلَا يَهْتَدُونَ سَبِيلًا﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Hakykatdan-da, perişdeler öz-özlerine zulüm edenleriň (mümkinçiligi barka, kapyr ýurdunda galanlaryň) janlaryny alanlarynda, (olary ýazgaryp): «Siz nähili ýagdaýdadyňyz?» diýerler. Olar: «Biz (öz ýaşaýan) ýerimizde ejizdik (Allahyň buýruklaryny ýerine ýetirip bilmeýärdik)» diýip aýdarlar. (Perişdeler bolsa): «Başga ýerlere hijret eder ýaly, Allahyň ýeri giň dälmidi?!» diýerler. Ine, şolaryň barjak ýeri Dowzahdyr we ol nähili erbet baryljak ýerdir! ۝ Emma (hijret etmäge) güýçleri ýetmeýän we ýol tapyp bilmeýän ejiz erkekler, aýallar we çagalar (bular aklanýandyrlar, hijret edip bilmeýändikleri üçin).»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Nisa, 97-98)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.7rem 0 0.5rem' }}>Şeýle hem Allah Tagalanyň şu sözüdir:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿يَا عِبَادِيَ الَّذِينَ آمَنُوا إِنَّ أَرْضِي وَاسِعَةٌ فَإِيَّايَ فَاعْبُدُونِ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Eý, iman eden gullarym! Şübhesiz, Meniň ýerim giňdir, diňe Maňa ybadat ediň!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Ankebut, 56)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.7rem 0 0.5rem' }}>Bagawy Allah oňa rehmet etsin şeýle aýtdy:</p>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '7px', padding: '0.5rem 0.8rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.93rem', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>«Bu aýatyň inmek sebäbi: Mekgede bolup, hijret etmedik musulmanlar baradadyr. Allah olara iman ady bilen ýüzlendi».</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Hijrete Sünnetden delil bolsa (Pygamberimiziň ﷺ) şu sözüdir:</p>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '7px', padding: '0.5rem 0.8rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.93rem', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>«Hijret etmeklik dowam edýändir tä tobanyň gapysy ýapylýança, toba gapysy bolsa ýapylýan däldir tä gün günbatardan dogýança».</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Ol Medinede ornaşandan soň, oňa Yslamyň galan beýleki şerigat hökümleri — meselem: zekat, agyz beklemek (oraza), haj, azan, jihat (Allahyň ýolunda söweşmek), ýagşylyga buýurmak we ýamanlykdan gaýtarmak ýaly amallar — buýruldy. Ol on ýyllap şuňa eýerip ýaşady.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Soňra bolsa Pygamberimiz ﷺ aradan çykdy, emma onuň dini bolsa bakydyr. Ine, şu onuň dinidir: Ol ymmatyna her bir haýyry görkezendir (öwredendir) we her bir şerden bolsa ägälendirip duýdurandyr.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Onuň görkezen haýry: Töwhit hem-de Allahyň gowy görýän we razy bolýan ähli zatlarydyr.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Onuň ägälendiren şeri bolsa: Şirk hem-de Allahyň ýigrenýän we ret edýän ähli zatlarydyr.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Allah ony ähli adamlara (resul edip) iberdi we jynlara hem-de adamlara oňa boýun bolmagy parz etdi. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿قُلْ يَا أَيُّهَا النَّاسُ إِنِّي رَسُولُ اللَّهِ إِلَيْكُمْ جَمِيعًا...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Aýt (eý, Pygamber): «Eý, adamlar! Şübhesiz, men siziň hemmäňize (iberilen) Allahyň resulydyryn...»»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Agraf, 158)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Allah ol (Pygamberimiz ﷺ) arkaly dini doly kämil etdi. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿...الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«...Şu gün Men siziň diniňizi doly kämil etdim, size Öz nygmatymy doly berdim we Yslamy siziň üçin din edip, ondan razy boldum...»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Mäide, 3)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Onuň (Pygamberimiziň ﷺ) aradan çykanlygyna (ölümine) delil bolsa Allah Tagalanyň şu aýatlarydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِنَّكَ مَيِّتٌ وَإِنَّهُم مَّيِّتُونَ ۝ ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ عِندَ رَبِّكُمْ تَخْتَصِمُونَ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Şübhesiz, sen öljeksiň, olar hem öljekdirler. ۝ Soňra bolsa, siz Kyýamat güni öz Rebbiňiziň öňünde dawalaşarsyňyz (dawaňyzy çözersiňiz).»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Zumer, 30-31)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Adamlar ölenlerinden soň (täzeden) direldiljekdirler. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿مِنْهَا خَلَقْنَاكُمْ وَفِيهَا نُعِيدُكُمْ وَمِنْهَا نُخْرِجُكُمْ تَارَةً أُخْرَى﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Biz sizi ondan (ýerden) ýaratdyk, sizi oňa hem gaýtararys we ýene-de (Kyýamat güni) gaýtadan sizi ondan çykararys.»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Taha, 55)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Şeýle hem Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَاللَّهُ أَنبَتَكُم مِّنَ الْأَرْضِ نَبَاتًا ۝ ثُمَّ يُعِيدُكُمْ فِيهَا وَيُخْرِجُكُمْ إِخْرَاجًا﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Allah sizi ýerden (ösümlikler ýaly) ösdürip ýetişdirdi. ۝ Soňra Ol sizi oňa (ýere) gaýtarar we (Kyýamat güni) gaýtadan (direldip) çykarar.»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Nuh, 17-18)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Direlişden soň bolsa adamlar hasaba çekilerler we eden amallarynyň netijesini görerler. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿...لِيَجْزِيَ الَّذِينَ أَسَاءُوا بِمَا عَمِلُوا وَيَجْزِيَ الَّذِينَ أَحْسَنُوا بِالْحُسْنَى﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«...Erbetlik edenlere eden amallary sebäpli jeza bermek we ýagşylyk edenlere bolsa iň gowusy (Jennet) bilen sogap bermek üçindir.»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Nejm, 31)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Kim direlişi inkär etse (ýalan hasaplasa), kapyr bolar. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿زَعَمَ الَّذِينَ كَفَرُوا أَن لَّن يُبْعَثُوا قُلْ بَلَى وَرَبِّي لَتُبْعَثُنَّ ثُمَّ لَتُنَبَّؤُنَّ بِمَا عَمِلْتُمْ وَذَلِكَ عَلَى اللَّهِ يَسِيرٌ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Kapyr bolanlar hiç haçan direldilmeris diýip çakladylar. (Eý, Pygamber!) Aýt: «Ýok, beýle däl! Rebbime kasam bolsun, siz hökman direldilersiňiz! Soňra bolsa eden amallaryňyz size hökman habar berler. Bu bolsa Allah üçin örän aňsatdyr!»»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Tegabun, 7)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Allah ähli resullary (jennet bilen) buşlaýjy we (dowzahdan) ägälendiriji edip iberdi. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿رُّسُلًا مُّبَشِّرِينَ وَمُنذِرِينَ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَى اللَّهِ حُجَّةٌ بَعْدَ الرُّسُلِ...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«(Biz) resullary buşlaýjy we ägälendiriji edip (iberdik), resullardan soň adamlaryň Allaha garşy hiç bir hüjjeti (tutarlygy) bolmaz ýaly...»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Nisa, 165)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Ol (resullaryň) birinjisi Nuh aleýhissalamdyr.</p>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Olaryň iň soňkysy bolsa Muhammeddir ﷺ. Ol pygamberleriň iň soňkusydyr we ondan soň hiç bir pygamber bolmaz. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Muhammed siziň erkekleriňizden hiç biriniň kakasy däldir, emma ol Allahyň resuly we pygamberleriň hatamydyr (iň soňkusydyr)...»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Ahzab, 40)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Olaryň birinjisiniň Nuhdugyna delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِنَّا أَوْحَيْنَا إِلَيْكَ كَمَا أَوْحَيْنَا إِلَى نُوحٍ وَالنَّبِيِّينَ مِن بَعْدِهِ...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«(Eý, Muhammed!) Şübhesiz, Biz Nuha we ondan soňky pygamberlere wahyý edişimiz ýaly, saňa hem wahyý etdik...»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Nisa, 163)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Allah Nuhdan başlap tä Muhammede ﷺ çenli her bir ymmata ýeke-täk Allaha ybadat etmegi buýurýan we taguta ybadat etmekden gaýtarýan resul iberdi. Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَّسُولًا أَنِ اعْبُدُوا اللَّهَ وَاجْتَنِبُوا الطَّاغُوتَ...﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Hakykatdan-da, Biz her bir ymmata: «Allaha ybadat ediň we tagutdan (Allahdan başga ybadat edilýän ähli zatlardan) daş duruň!» diýip, resul iberdik...»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Nahl, 36)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Allah ähli gullara: taguty inkär etmegi we Allaha iman getirmegi parz edendir.</p>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '7px', padding: '0.5rem 0.8rem', marginBottom: '0.5rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.7', margin: '0 0 0.3rem', fontWeight: '600' }}>Ibnul-Kaýýim (Allah Tagala oňa rehmet etsin) şeýle aýtdy:</p>
            <p style={{ color: '#c9b991', fontSize: '0.93rem', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>«Tagutyň manysy: guluň öz çäginden aşyran her bir zadydyr — bu ybadat edilýän bolsun, yzyna eýerilýän bolsun ýa-da boýun bolunýan bolsun».</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Tagutlar örän köpdür, olaryň baş tutanlary bolsa bäşdir:</p>
          <div style={{ background: 'rgba(0,0,0,0.12)', borderLeft: '3px solid rgba(212, 175, 122, 0.4)', borderRadius: '0 8px 8px 0', padding: '0.5rem 0.8rem', marginBottom: '0.6rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>1. Iblis — Allah oňa nälet etsin.<br />2. Özüne ybadat edilmegine razy bolýan.<br />3. Adamlary özüne ybadat etmäge çagyrýan.<br />4. Gaýypdan (geljekden) bir zat bilýändigini aýdýan.<br />5. Allahyň inderen kanunyndan başga zat bilen höküm çykarýan.</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 0.5rem' }}>Muňa delil bolsa Allah Tagalanyň şu aýatydyr:</p>
          <div style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(212, 175, 122, 0.2)', borderLeft: '3px solid #d4af7a', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ فَمَن يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِن بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَى لَا انفِصَامَ لَهَا وَاللَّهُ سَمِيعٌ عَلِيمٌ﴾</p>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.2rem' }}>«Dinde mejburylyk ýokdur. Hakykatdan-da, dogry ýol ýalňyş ýoldan aýdyň tapawutlandy. Kim taguty inkär edip, Allaha iman etse, ol hiç haçan üzülmejek iň berk tutawaçdan (Töwhitden) berk ýapyşandyr. Allah (ähli zady) Eşidýändir, Bilýändir!»</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '600', margin: 0 }}>(Bakara, 256)</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: '0.8rem 0 0.5rem' }}>Ine, bu hem «Lā ilāhe illallāh» (Allahdan başga hiç bir hak hudaý ýokdur) diýen sözüň manysydyr. Hadysda bolsa:</p>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '7px', padding: '0.5rem 0.8rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.93rem', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>«Diniň başy — Yslamdyr, onuň sütüni — namazdyr, onuň iň belent gerşi (çür başy) bolsa — Allahyň ýolunda söweşmekdir».</p>
          </div>
          <p style={{ color: '#d4af7a', fontSize: '0.9rem', lineHeight: '1.7', margin: '0.8rem 0 0', fontWeight: '600' }}>Dogrusyny bolsa Allah has gowy bilýändir.</p>
        </div>

      </div>
    </div>
  );

  const NamazSozleriLevel = () => (
    <div className="level-container">
      <h2 className="surah-title" style={{ fontFamily: "'Amiri', serif", direction: 'rtl', textAlign: 'center' }}>كَلِمَاتٌ مُتَعَلِّقَةٌ بِالصَّلَاةِ</h2>
      <h3 style={{ color: '#c9b991', textAlign: 'center', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '400' }}>Namaz bilen bagly sözler</h3>

      <NCard
        arabic="سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ"
        turkmen="Eý Allahym, Sen päksiň, Saňa öwgüler bolsun, Seniň adyň mübärekdir, Sen beýiksiň we Senden başga Hudaý ýokdur."
        transliteration="Subhaneke Allahumme we bihamdike, we tebärekesmuke, we ta'ala jedduke, we lä ilähe goýruk"
        audioSrc="/AtdaShyhy/audio/subhaneke.m4a"
      />
      <NCard
        arabic="سُبْحَانَ رَبِّيَ الْعَظِيمِ"
        turkmen="Meniň Beýik Rebbim päkdir."
        transliteration="Subhane Robbiýel Azym"
      />
      <NCard
        arabic="سَمِعَ اللهُ لِمَنْ حَمِدَهُ"
        turkmen="Allah Özüne öwgü aýdany eşidýändir."
        transliteration="SemiAllahu limen hämidäh"
      />
      <NCard
        arabic="رَبَّنَا وَلَكَ الْحَمْدُ"
        turkmen="Eý Rebbimiz, ähli öwgüler Saňadyr."
        transliteration="Robbenä we lekel-hamd"
      />
      <NCard
        arabic="اللهُ أَكْبَرُ"
        turkmen="Allah Beýikdir."
        transliteration="Allahu Ekber"
      />
      <NCard
        arabic="سُبْحَانَ رَبِّيَ الْأَعْلَى"
        turkmen="Meniň iň Belent Rebbim päkdir."
        transliteration="Subhane Robbiýel agla"
        audioSrc="/AtdaShyhy/audio/subhane-robbiyel-agla.m4a"
      />
      <NCard
        arabic="رَبِّ اغْفِرْ لِي"
        turkmen="Rebbim, meni bagyşla."
        transliteration="Robbigfirli"
        audioSrc="/AtdaShyhy/audio/robbigfirli.m4a"
      />
      <NCard
        arabic="التَّحِيَّاتُ للهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ"
        turkmen="Ähli beýgeltmeler, ybadatlar we päk sözler diňe Allaha mahsusdyr. Eý, Pygamber! Saňa salam, Allanyň rahmeti we bereketi bolsun. Bize we Allanyň salyh gullaryna salam bolsun. Men Allahdan başga Hudaýyň ýokdugyna şaýatlyk edýärin we Muhammediň Onuň guly hem-de resulydygyna şaýatlyk edýärin."
        transliteration="Ettehyýýatu lillähi wes-Solewätu wet-Toýýibät Esselämu aleýke eýýuhen-Nebiyýu we rahmatullahi we berekätuh Esselämu aleýnä we ala y'badillähis-solihin Eşhedu el-Lä ilähe illallah we eşhedu enne Muhammeden abduhu we resuluh"
      />
      <NCard
        arabic="اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ"
        turkmen="Eý, Allahym! Ibrahime we Ibrahime eýerenlere salawat aýdyşyň ýaly, Muhammede we Muhammede eýerenlere-de salawat aýt. Hakykatdan-da, Sen öwgülere mynasyp we beýiksiň. Eý, Allahym! Ibrahime we Ibrahime eýerenlere bereket berşiň ýaly, Muhammede we Muhammede eýerenlere-de bereket ber. Hakykatdan-da, Sen öwgülere mynasyp we beýiksiň."
        transliteration="Allahumme solli ala Muhammedin we ala äli Muhammed, kema solleýte ala Ibrohime we ala äli Ibrohim. Inneke Hamidum-Mejid Allahumme bärik ala Muhammedin we ala äli Muhammed, kema bärekte ala Ibrohime we ala äli Ibrohim. Inneke Hamidum-Mejid"
        audioSrc="/AtdaShyhy/audio/solawat.m4a"
      />
      <NCard
        arabic="اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ"
        turkmen="Eý, Allahym! Jähennemiň azabyndan, gabryň azabyndan, durmuşyň we ölümiň synaglaryndan hem-de Mesihi Dejjalyň azdyryjy synagynyň şerinden Senden pena soraýaryn."
        transliteration="Allahumme inni auzubike min azabil-kobri we min azabi jähennem, we miňň fitnetil-mahýa wel-memät, we miňň şerri fitnetil-mesihid-dejjal"
        audioSrc="/AtdaShyhy/audio/dort-zatdan-goranmak.m4a"
      />
    </div>
  );

  const IrdenkyZikirler = () => (
    <div className="level-container">
      <h2 className="surah-title">Irdenki zikirler 🌅</h2>
      <ZCard arabic="أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ" turkmen="Biz irdene çykdyk we ähli mülk Allaha degişlidir. Hemme öwgiler Allaha bolsun. Ondan başga hak ilah ýokdur, Onyň hiç hili şärigi hem ýokdur. Hemme mülk Oňa degişli, Hemme öwgilere ol mynasyp, we Ol ähli zady etmäge güýçlidir. Eý Rabbim, şu günüň haýyrlaryny we ondan soňra geljek haýyrlyklary Senden sorayaryn! Şu günüň şerlerinden we ondan soňra geljek şerlerden meni gora! Eý Rabbim, meni ýaltalykdan we erbet garrylykdan gora! Eý Rabbim, meni dowzahdan we gabyr azabyndan gora!" />
      <ZCard arabic="اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ" turkmen="Eý, Allahym! Seniň (rehmetiň) bilen irdene çykýarys, Seniň (rehmetiň) bilen agşama ýetýäris, Seniň (rehmetiň) bilen ýaşaýarys, Seniň (buýrugyň) bilen ölýäris, we Seniň öňüňde direlýäris." />
      <ZCard arabic="اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ" turkmen="Eý Allahym! Sen meniň Rabbim, Senden başga hak ilah ýokdur. Sen meni ýaratdyň we men hem Seniň guluň. Men Saňa beren wadalarmý güjimiň ýetdiginden berjaý ederin we men Seniň wadaňa ynanýaryn. Meni günälerimiň şerinden gora. Seniň maňa beren ähli ýagşylyklaryňy men ykrar edýärin we men öz günälerimi hem boýun alýaryn. Meni bagyşla, çünki günäleri diňe sen bagyşlap bilersiň." />
      <ZCard arabic="اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتِكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ" turkmen="Eý Allahym! Men Seni, Seniň Arşyňy göterýän perişdeleri, ähli perişdeleriňi we ähli ýaradan zatlaryňy irdene çykmaklygym bilen şaýat tutýaryn: Seniň Alladygyňa, Senden başga hak ilahyň ýokdugyna, Seniň hiç bir şärigiň ýokdugyna we Muhammediň Seniň guluň we pygamberiňdigine." times="Bu doga dört gezek aýdylýar" />
      <ZCard arabic="اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ" turkmen="Eý Allahym! Mende we her bir kişide bolan ähli haýyrlar diňe Sendendir. Seniň şärigiň ýokdur. Ähli öwgüler we şükürler diňe Saňa mynasypdyr." />
      <ZCard arabic="اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ" turkmen="Eý Allahym! Meniň bedenimi, eşidişimi we gözümi hemme erbetlikden gora. Senden başga hak ilah ýokdur. Eý Allahym! Meni kapyrlykdan we garyplykdan gora. Meni gabyryň azabyndan gora. Senden başga hak ilah ýokdur." times="üç gezek aýdylýar" />
      <ZCard arabic="حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ" turkmen="Meniň üçin Allah ýeterlikdir. Ondan başga hak ilah ýokdur. Men Oňa daýanýaryn. Ol beýik Arşyň Rabbidir." times="Bu doga 7 gezek aýdylýar" />
      <ZCard arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي" turkmen="Eý Allahym! Senden bu dünýäde we ahyretde günämi bagyşlamagyňy hemde erbetlikden goramaklygyňy soraýaryn. Eý Allahym! Meniň dinimi, dünýämi, maşgalami we emlägimy hemme erbetlikden gora. Eý Allahym! Meniň kemçiliklerimi ört, gorkularymdan aman et. Eý Allahym! Meni öňümden, yzymdan, sagymdan, çepimden we ýokarymdan gorap sakla! Meni aşagymdan duýdansyz gelýan heläkçilikden Öz beýikligiň bilen gora!" />
      <ZCard arabic="اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ" turkmen="Eý Allahym! Eý gizlin we äşgär zatlary bilýän, Eý asmanlary we ýeri ýaradyn, Eý her bir zadyň eýesi we patyşasy! Senden başga hak ilahiň ýokdugyna men şaýatlyk edýärin. Meni öz nebsimiň şerinden, şeýtanyň şerinden, onuň şirk etdirmekliginden hem-de özüme ýa-da bir musulmana erbetlik etmekden gora!" />
      <ZCard arabic="بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ" turkmen="Men Alladan gorag soraýaryn, çünki kim Allahyň goragy astynda bolsa oňa ýerde we asmanda hiç zyýan ýetmez. Ol eşidýändir we bilýändir." times="Üç gezek okalýar" />
      <ZCard arabic="رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا" turkmen="Allah Rabbim diýip we Yslam dinim diýip we Muhammed pygamberim diýip men razy boldum." times="3 gezek aýdylýar" />
      <ZCard arabic="يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ" turkmen="Eý Diri we Barlygy saklaýan! Seniň Rehimiň bilen senden ýardam soraýaryn. Meniň hemme işlerimi düzelt we meni bir salym hem kömegiňden aýyrma." />
      <ZCard arabic="أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ" turkmen="Biz irdene çykdyk we ähli mülk älemleriň eýesi bolan Allaha degişlidir. Eý Allahym! Men Senden bu günüň haýryny, üstünligini, ýeňşini, nuruny, bereketini we hidaýatyny soraýaryn. Şu günüň içindäki şerlerden we ondan soňky şerlerden meni gora!" />
      <ZCard arabic="أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلَامِ، وَعَلَى كَلِمَةِ الإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ" turkmen="Biz hak bolan yslam dini bilen we kelime şaýatlyk sözi bilen we Muhammed pygamberiň dini bilen we hiç bir sirk etmedik, musulman we Allany birleýji bolan Ibrahim atamyzyň dini bilen ertirledik." />
      <ZCard arabic="سُبْحَانَ اللَّهِ وَبِحَمْدِهِ" turkmen="Allah kemsizdir we ol öwgülere mynasypdyr." times="100 gezek okalýar" />
      <ZCard arabic="لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ" turkmen="Şärigi bolmadyk ýeke täk Alladan başga hiç hakly ilah ýokdur. Hemme mülk we öwgiler oňa degişlidir we Ol ähli zady etmäge güýçlidir." times="10 gezek okalýar" />
      <ZCard arabic="لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ" turkmen="Şärigi bolmadyk ýeke täk Alladan başga hiç hakly ilah ýokdur. Hemme mülk we öwgiler oňa degişlidir we Ol ähli zady etmäge güýçlidir." times="100 gezek okalýar — Günüň dowamynda" />
      <ZCard arabic="سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ" turkmen="Allaha Päklik we öwgiler bolsun! Onuň ýaradan zatlarynyň sanyça bolsun, Onuň razy bolan mukdaryça bolsun, Onuň Arşynyň agramyna deň bolsun we Onuň sözleriniň sanyça bolsun." times="üç gezek okalýar" />
      <ZCard arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا" turkmen="Eý Allahym! Men Senden peýdaly bilim, halal rysgal we kabul edilýän amal soraýaryn." times="irde okalýar" />
      <ZCard arabic="أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ" turkmen="Alladan ötünç soraýaryn we Oňa towa edýärin." times="Günde 100 gezek okalýar" />
      <ZCard arabic="اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ" turkmen="Eý Allahym, pygamberimiz Muhammedi öw we oňa salamatlyk ber!" times="10 gezek okalýar" />
    </div>
  );

  const AgsamkyZikirler = () => (
    <div className="level-container">
      <h2 className="surah-title">Agşamky zikirler 🌙</h2>
      <ZCard arabic="أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ" turkmen="Biz agşama ýetdik we ähli mülk Allaha degişlidir. Hemme öwgiler Allaha bolsun. Ondan başga hak ilah ýokdur, Onyň hiç hili şärigi hem ýokdur. Hemme mülk Oňa degişli, Hemme öwgilere ol mynasypdyr, we Ol ähli zady etmäge güýçlidir. Eý Rabbim, şu gijäniň haýyrlaryny we ondan soňra geljek haýyrlyklary Senden sorayaryn! Şu gijäniň şerlerinden we ondan soňra geljek şerlerden meni gora! Eý Rabbim, meni ýaltalykdan we erbet garrylykdan gora! Eý Rabbim, meni dowzahdan we gabyr azabyndan gora!" />
      <ZCard arabic="اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ" turkmen="Eý, Allahym! Seniň (rehmetiň) bilen agşama ýetýäris, Seniň (rehmetiň) bilen irdene çykýarys, Seniň (rehmetiň) bilen ýaşaýarys, Seniň (buýrugyň) bilen ölýäris, we Seniň öňüňde direlýäris!" />
      <ZCard arabic="اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ" turkmen="Eý Allahym! Sen meniň Rabbim, Senden başga hak ilah ýokdur. Sen meni ýaratdyň, men Seniň guluň. Men Saňa beren wadalarmý güjimiň ýetdiginden berjaý ederin we men Seniň wadaňa ynanýaryn. Meni günälerimiň şerinden gora. Seniň maňa beren ähli ýagşylyklaryňy men ykrar edýärin we men öz günälerimi hem boýun alýaryn. Meni bagyşla, çünki günäleri diňe sen bagyşlap bilersiň!" />
      <ZCard arabic="اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتِكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ" turkmen="Eý Allahym! Men Seni, Seniň Arşyňy göterýän perişdeleri, ähli perişdeleriňi we ähli ýaradan zatlaryňy agşama çykmaklygym bilen şaýat tutýaryn: Seniň Alladygyňa, Senden başga hak ilahyň ýokdugyna, Seniň hiç bir şärigiň ýokdugyna we Muhammediň Seniň guluň we pygamberiňdigine." times="Bu doga dört gezek aýdylýar" />
      <ZCard arabic="اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ" turkmen="Eý Allahym! Mende we her bir kişide bolan ähli haýyrlar diňe Sendendir. Seniň şärigiň ýokdur. Ähli öwgüler we şükürler diňe Saňa degişlidir." />
      <ZCard arabic="اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ" turkmen="Eý Allahym! Meniň bedenimi, eşidişimi we gözümi hemme erbetlikden gora. Senden başga hak ilah ýokdur. Eý Allahym! Meni kapyrlykdan we garyplykdan gora. Meni gabyryň azabyndan gora. Senden başga hak ilah ýokdur." times="üç gezek aýdylýar" />
      <ZCard arabic="حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ" turkmen="Meniň üçin Allah ýeterlikdir. Ondan başga hak ilah ýokdur. Men Oňa daýanýaryn. Ol beýik Arşyň Rabbidir." times="Bu doga 7 gezek aýdylýar" />
      <ZCard arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي" turkmen="Eý Allahym! Senden bu dünýäde we ahyretde günämi bagyşlamagyňy hemde erbetlikden goramaklygyňy soraýaryn. Eý Allahym! Meniň dinimi, dünýämi, maşgalami we emlägimy hemme erbetlikden gora. Eý Allahym! Meniň kemçiliklerimi ört, gorkularymdan aman et. Eý Allahym! Meni öňümden, yzymdan, sagymdan, çepimden we ýokarymdan gorap sakla! Meni aşagymdan duýdansyz gelýan heläkçilikden Öz beýikligiň bilen gora!" />
      <ZCard arabic="اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ" turkmen="Eý Allahym! Eý gizlin we äşgär zatlary bilýän, Eý asmanlary we ýeri ýaradyn, Eý her bir zadyň eýesi we patyşasy! Senden başga hak ilahiň ýokdugyna men şaýatlyk edýärin. Meni öz nebsimiň şerinden, şeýtanyň şerinden, onuň şirk etdirmekliginden hem-de özüme ýa-da bir musulmana erbetlik etmekden gora!" />
      <ZCard arabic="بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ" turkmen="Men Alladan gorag soraýaryn, çünki kim Allahyň goragy astynda bolsa oňa ýerde we asmanda hiç zyýan ýetmez. Ol eşidýändir we bilýändir." times="Üç gezek okalýar" />
      <ZCard arabic="رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا" turkmen="Allah Rabbim diýip we Yslam dinim diýip we Muhammed pygamberim diýip men razy boldum." times="3 gezek aýdylýar" />
      <ZCard arabic="يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ" turkmen="Eý Diri we Barlygy saklaýan! Seniň Rehimiň bilen senden ýardam soraýaryn. Meniň hemme işlerimi düzelt we meni bir salym hem kömegiňden aýyrma!" />
      <ZCard arabic="أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا وَنَصْرَهَا وَنُورَهَا وَبَرَكَتَهَا وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا" turkmen="Biz agşama ýetdik we ähli mülk älemleriň eýesi bolan Allaha degişlidir. Eý Allahym! Men Senden bu agşamyň haýryny, üstünligini, ýeňşini, nuruny, bereketini we hidaýatyny soraýaryn. Şu agşamyň içindäki we ondan soňky geljek şerlerden meni gora!" />
      <ZCard arabic="أَمْسَيْنَا عَلَى فِطْرَةِ الإِسْلَامِ، وَعَلَى كَلِمَةِ الإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ" turkmen="Biz hak bolan yslam dini bilen we kelime şaýatlyk sözi bilen we Muhammed pygamberiň dini bilen we hiç bir sirk etmedik, musulman we Allany birleýji bolan Ibrahim atamyzyň dini bilen agşama ýetdik" />
      <ZCard arabic="سُبْحَانَ اللَّهِ وَبِحَمْدِهِ" turkmen="Allah kemsizdir we ol öwgülere mynasypdyr." times="100 gezek okalýar" />
      <ZCard arabic="لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ" turkmen="Şärigi bolmadyk ýeke täk Alladan başga hiç hakly ilah ýokdur. Hemme mülk we öwgiler oňa degişlidir we Ol ähli zady etmäge güýçlidir." times="10 gezek okalýar" />
      <ZCard arabic="اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ" turkmen="Eý Allahym, pygamberimiz Muhammedi öw we oňa salamatlyk ber!" times="10 gezek okalýar" />
      <ZCard arabic="أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ" turkmen="Men Allahyň kämil sözleri bilen onuň ýaradan zatlarynyň şerinden gorag soraýaryn!" />
    </div>
  );

  const nasAyahs = [
    { num: 0, arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', turkmen: 'Rahman we Rahim bolan Allahyň ady bilen.', tafsir: 'Allahyň ady bilen Kurany okamaga başlaýaryn we Ondan kömek soraýaryn.\n\nAllah — hakykatda ybadata mynasyp bolan Rebbiň adydyr. Bu Allahyň diňe Özüne mahsus bolan adydyr. Bu at bilen Özünden başga hiç kim atlandyrylmaýar.\n\nRahman — ähli mahluklary Öz rehmeti we gowulygy bilen gurşap alýan.\n\nRahim — aýratyn iman edenlere rehmet we gowlyk edýän.\n\nBu iki at Allahyň atlaryndandyr. Olar Allah Tagalanyň Öz beýikligine mynasyp bolan rehmet sypatyny öz içine alýar.' },
    { num: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', turkmen: 'Aýt: Adamlaryň Rebbinden.', tafsir: 'Aýt, eý Resul: «Adamlaryň Rebbinden gorag we kömek soraýaryn. Diňe Ol was-was berýän şeýtanyň şerinden gorap bilýärdir.»' },
    { num: 2, arabic: 'مَلِكِ النَّاسِ', turkmen: 'Adamlaryň Patyşasyndan.', tafsir: 'Adamlaryň Patyşasy. Ol adamlaryň ähli işlerini dolandyrýar we özi bolsa hiç kime mätäç däldir.' },
    { num: 3, arabic: 'إِلَٰهِ النَّاسِ', turkmen: 'Adamlaryň Ilahyndan gorag soraýaryn.', tafsir: 'Adamlaryň Ilahy. Diňe Ol hakykatda ybadata mynasypdyr, Ondan başga hiç kim ybadata mynasyp däldir.' },
    { num: 4, arabic: 'مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', turkmen: 'Was-wasa berip, yza çekilýän (şeýtanyň) şerinden.', tafsir: 'Adam ünssüz bolanda was-was berýän, Allahy ýatlanda bolsa yza çekilýän şeýtanyň şerinden.', bellik: 'Was-was — adamy günä eltýän, islendik ýürege oklanýan pikir.' },
    { num: 5, arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', turkmen: 'Adamlaryň ýüreklerine was-wasa salýan', tafsir: 'Ol adamlaryň ýüreklerine erbetligi we şübheleri salýan.' },
    { num: 6, arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ', turkmen: '(Ol) jynlardan we adamlardan (bolýandyr).', tafsir: 'Jynlardan we adamlardan bolan şeýtanlardan.' },
  ];

  const ikhlasAyahs = [
    { num: 0, arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', turkmen: 'Rahman we Rahim bolan Allahyň ady bilen.', tafsir: 'Allahyň ady bilen Kurany okamaga başlaýaryn we Ondan kömek soraýaryn.\n\nAllah — hakykatda ybadata mynasyp bolan Rebbiň adydyr. Bu Allahyň diňe Özüne mahsus bolan adydyr. Bu at bilen Özünden başga hiç kim atlandyrylmaýar.\n\nRahman — ähli mahluklary Öz rehmeti we gowulygy bilen gurşap alýan.\n\nRahim — aýratyn iman edenlere rehmet we gowlyk edýän.\n\nBu iki at Allahyň atlaryndandyr. Olar Allah Tagalanyň Öz beýikligine mynasyp bolan rehmet sypatyny öz içine alýar.' },
    { num: 1, arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', turkmen: 'Aýt: Ol Allah ýeke-täkdir.', tafsir: 'Aýt, eý Resul! Ol — uluhiýetde (diňe Özüniň ybadata mynasyp bolmagynda), rububyýetde (ähli işleri dolandyrmakda, ýaratmakda, rysk bermekde we beýleki işlerinde), atlarynda we sypatlarynda ýeke-täk Allahdyr. Bu zatlaryň hiç birinde Oňa şärik ýokdur.' },
    { num: 2, arabic: 'اللَّهُ الصَّمَدُ', turkmen: 'Allah Sameddir.', tafsir: 'Ol — belent mertebäniň, şan-şöhratyň we beýikligiň ähli sypatlarynda kämil bolan Allahdyr. Ähli ýaradylanlar öz mätäçlikleri we islegleri üçin diňe Oňa ýüzlenýärler.' },
    { num: 3, arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', turkmen: 'Ol (hiç kimi) doguran däldir, (hiç kimden) doglan däldir.', tafsir: 'Onuň çagasy-da, kakasy-da, aýaly-da ýokdur.' },
    { num: 4, arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', turkmen: 'Onuň hiç bir deňi-taýy ýokdur.', tafsir: 'Allahyň atlarynda, sypatlarynda we edýän işlerinde hiç bir meňzeşi ýokdur. Ol beýik bereket eýesidir, belentdir we mukaddesdir.', bellik: 'Bereket — köp haýyr we gowulyk diýmekdir.' },
  ];

  const asrAyahs = [
    { num: 0, arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', turkmen: 'Rahman we Rahim bolan Allahyň ady bilen.', tafsir: 'Allahyň ady bilen Kurany okamaga başlaýaryn we Ondan kömek soraýaryn.\n\nAllah — hakykatda ybadata mynasyp bolan Rebbiň adydyr.\n\nRahman — ähli mahluklary Öz rehmeti we gowulygy bilen gurşap alýan.\n\nRahim — aýratyn iman edenlere rehmet we gowlyk edýän.' },
    { num: 1, arabic: 'وَالْعَصْرِ', turkmen: 'Wagta kasam bolsun.', tafsir: 'Allah tagala wagta kasam etdi, sebäbi wagytda Allanyň beýikligini görkezýän täsin güýçler bar.' },
    { num: 2, arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', turkmen: 'Hakykatdan-da her-bir adam utulyşdadyr.', tafsir: 'Her bir adam hakykatdan-da utylyşdadyr we zyýandadyr. Adama diňe Allah bilen ant içmek bolýar, çünki Allahdan başgasy bilen ant içmek şirkdir.' },
    { num: 3, arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', turkmen: 'Emma iman edenler, we gowy amallar edenler, we biri-birine hakykaty ýatladanlar we biri-birine sabyry ýatladýanlar (utulyşda däldirler).', tafsir: 'Emma Allaha iman edenler, gowy amallar edenler, biri-birine hakdan berk ýapyşmagy, Allaha boýun bolmagy we şol ýolda sabyr etmegi nesihat edenler utulyşda we zyýanda däldirler.' },
  ];

  const IkhlasSurahLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">سُورَةُ الْإِخْلَاصِ — Ihlas süresi</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {ikhlasAyahs.map((ayah) => (
          <div key={ayah.num} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.8rem 1.1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
              {ayah.tafsir && (
                <button onClick={() => setPopup({ id: 'nas-tafsir', content: ayah.tafsir, bellik: ayah.bellik })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, whiteSpace: 'nowrap', flexShrink: 0, marginTop: '0.4rem' }}>tefsir</button>
              )}
              <p style={{ color: '#f4e4c1', fontSize: '1.3rem', fontWeight: '400', textAlign: 'right', margin: 0, fontFamily: 'Amiri, serif', lineHeight: '1.7', direction: 'rtl', flex: 1 }}>{ayah.arabic}</p>
            </div>
            <p style={{ color: '#c9b991', fontSize: '1rem', margin: 0 }}>{ayah.turkmen}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const AsrSurahLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">سُورَةُ الْعَصْرِ — Asr süresi</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {asrAyahs.map((ayah) => (
          <div key={ayah.num} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.8rem 1.1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <button onClick={() => setPopup({ id: 'nas-tafsir', content: ayah.tafsir })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, whiteSpace: 'nowrap', flexShrink: 0, marginTop: '0.4rem' }}>tefsir</button>
              <p style={{ color: '#f4e4c1', fontSize: '1.3rem', fontWeight: '400', textAlign: 'right', margin: 0, fontFamily: 'Amiri, serif', lineHeight: '1.7', direction: 'rtl', flex: 1 }}>{ayah.arabic}</p>
            </div>
            <p style={{ color: '#c9b991', fontSize: '1rem', margin: 0 }}>{ayah.turkmen}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const NasSurahLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">سُورَةُ النَّاسِ — Nas süresi</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {nasAyahs.map((ayah) => (
          <div key={ayah.num} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.8rem 1.1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <button onClick={() => setPopup({ id: 'nas-tafsir', content: ayah.tafsir, bellik: ayah.bellik })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, whiteSpace: 'nowrap', flexShrink: 0, marginTop: '0.4rem' }}>tefsir</button>
              <p style={{ color: '#f4e4c1', fontSize: '1.3rem', fontWeight: '400', textAlign: 'right', margin: 0, fontFamily: 'Amiri, serif', lineHeight: '1.7', direction: 'rtl', flex: 1 }}>{ayah.arabic}</p>
            </div>
            <p style={{ color: '#c9b991', fontSize: '1rem', margin: 0 }}>{ayah.turkmen}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const QuranLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">Mukaddes Kuran</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {[
          { num: '112', arabic: 'سُورَةُ الْإِخْلَاصِ', turkmen: 'Ihlas süresi', level: 'quran-ihlas' },
          { num: '103', arabic: 'سُورَةُ الْعَصْرِ', turkmen: 'Asr süresi', level: 'quran-asr' },
          { num: '114', arabic: 'سُورَةُ النَّاسِ', turkmen: 'Nas süresi', level: 'quran-nas' },
        ].map((s) => (
          <div key={s.num} onClick={() => navigateTo(s.level)} style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '0.9rem 1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{ minWidth: '42px', height: '28px', background: 'linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%)', color: '#f4e4c1', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>{s.num}</div>
              <div>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontWeight: '700', margin: 0, fontFamily: 'Amiri, serif', direction: 'rtl' }}>{s.arabic}</p>
                <p style={{ color: '#c9b991', fontSize: '0.95rem', margin: '0.2rem 0 0' }}>{s.turkmen}</p>
              </div>
            </div>
            <span style={{ color: '#d4af7a', fontSize: '1.2rem' }}>›</span>
          </div>
        ))}
      </div>
    </div>
  );

  const HadisLevel = () => (
    <div className="level-container">
      <h2 className="surah-title">الأَحَادِيثُ النَّبَوِيَّةُ — Hadisler</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <p style={{ color: '#f4e4c1', fontSize: '1.15rem', fontWeight: '400', textAlign: 'right', margin: '0 0 1rem', fontFamily: 'Amiri, serif', lineHeight: '2', direction: 'rtl' }}>مَنْ سَلَكَ طَرِيقًا يَطْلُبُ فِيهِ عِلْمًا، سَلَكَ اللَّهُ بِهِ طَرِيقًا مِنْ طُرُقِ الْجَنَّةِ، وَإِنَّ الْمَلَائِكَةَ لَتَضَعُ أَجْنِحَتَهَا رِضًا لِطَالِبِ الْعِلْمِ، وَإِنَّ الْعَالِمَ لَيَسْتَغْفِرُ لَهُ مَنْ فِي السَّمَاوَاتِ وَمَنْ فِي الْأَرْضِ، وَالْحِيتَانُ فِي جَوْفِ الْمَاءِ، وَإِنَّ فَضْلَ الْعَالِمِ عَلَى الْعَابِدِ كَفَضْلِ الْقَمَرِ لَيْلَةَ الْبَدْرِ عَلَى سَائِرِ الْكَوَاكِبِ، وَإِنَّ الْعُلَمَاءَ وَرَثَةُ الْأَنْبِيَاءِ، وَإِنَّ الْأَنْبِيَاءَ لَمْ يُوَرِّثُوا دِينَارًا وَلَا دِرْهَمًا، وَرَّثُوا الْعِلْمَ فَمَنْ أَخَذَهُ أَخَذَ بِحَظٍّ وَافِرٍ</p>
          <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.5rem 0.8rem', marginBottom: '0.8rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.9rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'right', margin: '0 0 0.4rem' }}>الراوي : أبو الدَّرْدَاءِ</p>
            <p style={{ color: '#aaa', fontSize: '0.75rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'right', margin: '0 0 0.2rem', lineHeight: '1.6' }}>التخريج : أخرجه أبو داود (3641) واللفظ له، والترمذي (2682)، وابن ماجه (223)، وأحمد (21715)</p>
            <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', margin: 0 }}>✏️ Sahih hadis</p>
          </div>
          <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.8', margin: '0 0 0.8rem' }}>
            Kim ylym gözläp ýola düşse,{' '}
            <button onClick={() => setPopup({ id: 'hadis-acykla', content: 'Bu ýerde ylym diýlende, din ylymy göz öňünde tutulýar. Din ylymy bolsa ybadatdyr; ybadat bolsa, eger Allanyň razylygy üçin edilmese, kabul bolmaýar.' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button>
            {' '}Allah Tagala oňa jennetiň ýolyny ýeňilleşdirer. Perişdeler onyň ylym alýandygyna razy bolup, onuň üçin ganatlaryny ýazarlar. Alym kişi üçin asmandaky we ýerdäki zatlar, hatda suwda ýaşaýan balyklar hem, onuň günäleriniň geçilmegini Alladan soraýarlar. Alym adamyň ybadat edýän adamdan artykmaçlygy we derejesi, dolan aýyň beýleki ýyldyzlardan artykmaçlygy ýalydyr.{' '}
            <button onClick={() => setPopup({ id: 'hadis-acykla', content: 'Alym — bu peýdaly bilim bilen meşgullanýan adamdyr; ol bilimiň esaslaryny we dogry düzgünlerini öwrenýär.\n\nYbadat edýän adam — esasy möhüm we wajyp bolan ylymy bilip, köp ybadat edýän adamdyr.' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button>
            {' '}Alymlar Pygamberleriň mirasdüşerleridir; Pygamberler miras hökmünde pul ýa-da baýlyk galdyrmandyrlar. Olar miras hökmünde ylym galdyrdylar. Kim bu ylymy alsa, ol uly haýyrly paý gazanar.
          </p>
          <div style={{ background: 'rgba(212, 175, 122, 0.08)', border: '1px solid rgba(212, 175, 122, 0.2)', borderRadius: '8px', padding: '0.5rem 0.8rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.82rem', margin: 0, lineHeight: '1.6' }}>🔗 Bu hadysy Imam Ahmad, Abu Dawud, Tirmizi we Ibn Maje Abu Darda sahabadan rowayat edipdirler.</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '7px', padding: '0.5rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.4rem' }}>«لَعَنَ اللَّهُ مَنْ ذَبَحَ لِغَيْرِ اللَّهِ»</p>
            <p style={{ color: '#c9b991', fontSize: '0.93rem', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>«Allahdan başga biri üçin gurbanlyk keseni Allah nälet{' '}<button onClick={() => setPopup({ id: 'nalet' })} style={{ background: 'none', border: '1.5px solid #d4af7a', borderRadius: '6px', color: '#d4af7a', fontSize: '0.65rem', fontWeight: '700', cursor: 'pointer', padding: '2px 5px', lineHeight: 1.2, verticalAlign: 'middle' }}>aç</button>{' '}edendir!»</p>
          </div>
          <div style={{ background: 'rgba(212, 175, 122, 0.08)', border: '1px solid rgba(212, 175, 122, 0.2)', borderRadius: '8px', padding: '0.5rem 0.8rem', marginTop: '0.6rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.82rem', margin: 0, lineHeight: '1.6' }}>🔗 Bu hadysy Imam Muslim Aly ibn Ebu Talipden rowayat edendir.</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(139, 90, 43, 0.15) 0%, rgba(76, 49, 23, 0.15) 100%)', border: '2px solid rgba(212, 175, 122, 0.3)', borderRadius: '14px', padding: '1rem 1.1rem' }}>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.6rem 0.8rem' }}>
            <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'right', lineHeight: '2', margin: '0 0 0.8rem' }}>«بَيْنَمَا نَحْنُ عِنْدَ رَسُولِ اللَّهِ ﷺ ذَاتَ يَوْمٍ إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ شَدِيدُ سَوَادِ الشَّعَرِ لَا يُرَى عَلَيْهِ أَثَرُ السَّفَرِ وَلَا يَعْرِفُهُ مِنَّا أَحَدٌ حَتَّى جَلَسَ إِلَى النَّبِيِّ ﷺ فَأَسْنَدَ رُكْبَتَيْهِ إِلَى رُكْبَتَيْهِ وَوَضَعَ كَفَّيْهِ عَلَى فَخِذَيْهِ وَقَالَ: يَا مُحَمَّدُ أَخْبِرْنِي عَنِ الإِسْلَامِ. فَقَالَ رَسُولُ اللَّهِ ﷺ: الإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَتُقِيمَ الصَّلَاةَ وَتُؤْتِيَ الزَّكَاةَ وَتَصُومَ رَمَضَانَ وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلًا. قَالَ: صَدَقْتَ. فَعَجِبْنَا لَهُ يَسْأَلُهُ وَيُصَدِّقُهُ. قَالَ: فَأَخْبِرْنِي عَنِ الإِيمَانِ. قَالَ: أَنْ تُؤْمِنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الآخِرِ وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ. قَالَ: صَدَقْتَ. قَالَ: فَأَخْبِرْنِي عَنِ الإِحْسَانِ. قَالَ: أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ. قَالَ: فَأَخْبِرْنِي عَنِ السَّاعَةِ. قَالَ: مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ. قَالَ: فَأَخْبِرْنِي عَنْ أَمَارَاتِهَا. قَالَ: أَنْ تَلِدَ الأَمَةُ رَبَّتَهَا وَأَنْ تَرَى الْحُفَاةَ الْعُرَاةَ الْعَالَةَ رِعَاءَ الشَّاءِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ. ثُمَّ انْطَلَقَ فَلَبِثْتُ مَلِيًّا ثُمَّ قَالَ: يَا عُمَرُ أَتَدْرِي مَنِ السَّائِلُ؟ قُلْتُ: اللَّهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: فَإِنَّهُ جِبْرِيلُ أَتَاكُمْ يُعَلِّمُكُمْ دِينَكُمْ»</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>«Bir gün biz Allahyň Resulynyň ﷺ ýanynda otyrkak, ýanymyza bir adam geldi. Onuň eşikleri appak, saçlary gap-gara bolup, üst-başy sapardan (uzak ýoldan) gelene meňzemeýärdi we aramyzdan hem ony hiç kim tanamaýardy. Ol gelip Pygamberiň ﷺ öňünde oturdy-da, dyzlaryny Onuň dyzlaryna diräp, iki aýasyny budunyň üstünde goýdy-da: «Eý, Muhammed!» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>«Maňa Yslam barada habar ber?»</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Allahyň Resuly ﷺ aýtdy: «Yslam: «Allahdan başga hiç bir (hak) hudaý ýokdur we Muhammed Allahyň resulydyr» diýip şaýatlyk etmegiň, namaz okamagyň, zekat bermegiň, Remezan aýynda agyz beklemegiň we eger ýoluna güýjüň ýetse, (Allahyň) Öýüne haj etmegiňdir». Ol (Jebraýyl): «Dogry aýtdyň!» diýdi. Biz bolsa onuň hem sorap, hem-de tassyklamagyna geň galdyk.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Jebraýyl): «Onda maňa Iman barada habar ber?» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Pygamberimiz ﷺ): «Allaha, Onuň perişdelerine, Onuň kitaplaryna, Onuň resullaryna, Ahyret gününe hem-de takdyryň gowusyna we erbedine iman getirmegiňdir» diýdi. Ol (Jebraýyl): «Dogry aýtdyň!» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Jebraýyl): «Onda maňa Yhsan barada habar ber?» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Pygamberimiz ﷺ): «Allaha edil Ony görüp duran ýaly ybadat etmegiňdir. Eger sen Ony görmeýän bolsaň-da, şübhesiz, Ol seni görýändir» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Jebraýyl): «Onda maňa Kyýamat (haçan boljak wagty) barada habar ber?» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Pygamberimiz ﷺ): «Sorag berilýän kişi soraýandan has köp bilýän däldir» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol (Jebraýyl): «Onda maňa onuň alamatlary barada habar ber?» diýdi.</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: '0 0 0.6rem', fontStyle: 'italic' }}>Ol aýtdy: «Gyrnagyň (gul aýalyň) öz eýesini dogurmagy, şeýle hem aýagy ýalaňaç, egni ýalaňaç, garyp goýun çopanlarynyň belent binalary gurmakda bäsleşýändiklerini görmegiňdir».</p>
            <p style={{ color: '#f4e4c1', fontSize: '0.92rem', lineHeight: '1.75', margin: 0, fontStyle: 'italic' }}>(Omar) aýtdy: «Soňra ol (adam) gitdi. Birnäçe wagt geçenden soňra (Pygamberimiz ﷺ) maňa: «Eý, Omar! Sorag bereniň kimdigini bilýärmisiň?» diýdi. Men: «Allah we Onuň resuly has gowy bilýändir» diýdim. (Pygamberimiz ﷺ): «Hakykatdan-da, ol Jebraýyldyr, size diniňizi öwretmek üçin geldi» diýdi».</p>
          </div>
          <div style={{ background: 'rgba(212, 175, 122, 0.08)', border: '1px solid rgba(212, 175, 122, 0.2)', borderRadius: '8px', padding: '0.5rem 0.8rem', marginTop: '0.6rem' }}>
            <p style={{ color: '#c9b991', fontSize: '0.82rem', margin: 0, lineHeight: '1.6' }}>🔗 Bu hadysy Imam Muslim Omar ibn Hattapdan rowayat edendir.</p>
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Sans:wght@400;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a2a1e 0%, #0f1810 100%);
          padding: 2rem;
          font-family: 'Noto Sans', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .app::before {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(139, 90, 43, 0.03) 35px, rgba(139, 90, 43, 0.03) 70px);
          pointer-events: none;
          z-index: 0;
        }

        .blob { display: none; }

        .level-container {
          max-width: 900px; margin: 0 auto;
          position: relative; z-index: 1;
          animation: fadeIn 0.5s ease-out;
          padding-top: 1.5rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .back-button {
          background: rgba(139, 90, 43, 0.25);
          border: 1.5px solid rgba(212, 175, 122, 0.5);
          color: #f4e4c1;
          padding: 0.45rem 0.9rem;
          border-radius: 10px;
          font-size: 0.85rem; font-weight: 600;
          cursor: pointer;
          display: flex; align-items: center; gap: 0.4rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(6px);
          position: fixed; top: 1rem; left: 1rem; z-index: 1000;
        }
        .back-button:hover {
          background: rgba(139, 90, 43, 0.4);
          transform: translateX(-5px);
          box-shadow: 0 4px 20px rgba(212, 175, 122, 0.3);
        }

        .main-menu-card { margin-bottom: 1.5rem; }

        .surah-title {
          color: #f4e4c1; font-size: 2.2rem; text-align: center;
          margin-bottom: 2.5rem; padding-bottom: 1rem;
          border-bottom: 2px solid rgba(212, 175, 122, 0.3);
          text-shadow: 0 2px 10px rgba(212, 175, 122, 0.3);
        }

        .ayah-list { display: flex; flex-direction: column; gap: 1.2rem; }

        .ayah-card {
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.12) 0%, rgba(76, 49, 23, 0.12) 100%);
          border: 2px solid rgba(212, 175, 122, 0.25);
          border-radius: 14px;
          padding: 1.5rem;
          display: flex; gap: 1.5rem; align-items: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .ayah-card:not(.non-clickable) { cursor: pointer; }
        .ayah-card:not(.non-clickable):hover {
          transform: translateX(8px);
          border-color: #d4af7a;
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.2) 0%, rgba(76, 49, 23, 0.2) 100%);
          box-shadow: 0 6px 25px rgba(212, 175, 122, 0.25);
        }

        .ayah-number {
          min-width: 50px; height: 50px;
          background: linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%);
          color: #f4e4c1; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; font-weight: 700;
        }
        .ayah-content { flex: 1; }

        .arabic {
          font-family: 'Amiri', serif; font-size: 1.6rem; color: #f4e4c1;
          direction: rtl; text-align: right; margin-bottom: 0.5rem; line-height: 1.8;
        }
        .translation { color: #c9b991; font-size: 1.05rem; line-height: 1.6; }

        .tafsir-box, .hadith-box, .definition-box {
          background: rgba(255,220,150,0.07);
          border: 1px solid rgba(255,220,150,0.15);
          border-radius: 14px;
          padding: 2rem; margin-bottom: 1.5rem;
          backdrop-filter: blur(14px);
        }

        .tafsir-title, .hadith-title, .definition-title {
          color: #f4e4c1; font-size: 1.3rem; font-weight: 600; margin-bottom: 1rem;
        }

        .arabic-quote {
          font-family: 'Amiri', serif; font-size: 1.4rem; color: #f4e4c1;
          direction: rtl; text-align: right; margin-bottom: 1rem; line-height: 1.8;
          padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 8px;
        }
        .quote-translation {
          color: #c9b991; font-size: 1.05rem; line-height: 1.7;
          padding-left: 1rem; border-left: 3px solid #d4af7a;
        }

        .info-box {
          display: flex; gap: 1rem; align-items: start;
          background: rgba(255,220,150,0.07);
          border: 1px solid rgba(255,220,150,0.15);
          border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }
        .info-icon { font-size: 1.8rem; }
        .info-content p { color: #c9b991; font-size: 1.05rem; line-height: 1.7; }

        .definition-section {
          display: flex; gap: 1.2rem; margin-bottom: 1.5rem;
          padding: 1.2rem; background: rgba(0,0,0,0.15); border-radius: 10px;
        }
        .section-icon { font-size: 2rem; }
        .section-content h4 { color: #d4af7a; font-size: 1.15rem; margin-bottom: 0.5rem; }
        .section-content p { color: #c9b991; font-size: 1rem; line-height: 1.6; }

        .patience-grid { display: flex; flex-direction: column; gap: 1.5rem; }
        .section-title {
          color: #f4e4c1; font-size: 1.6rem; text-align: center;
          margin-bottom: 2rem; padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }
        .patience-card {
          display: flex; gap: 1.5rem;
          background: rgba(255,220,150,0.07);
          border: 1px solid rgba(255,220,150,0.15);
          border-radius: 14px; padding: 1.8rem; align-items: center;
          backdrop-filter: blur(14px);
        }
        .patience-number {
          min-width: 60px; height: 60px;
          background: linear-gradient(135deg, #8b5a2b 0%, #5e3a1a 100%);
          color: #f4e4c1; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem; font-weight: 700;
        }
        .patience-content h4 { color: #f4e4c1; font-size: 1.25rem; margin-bottom: 0.5rem; font-weight: 600; }
        .patience-content p { color: #c9b991; font-size: 1.05rem; line-height: 1.6; }

        @media (max-width: 768px) {
          .app { padding: 1rem; }
          .level-container { padding-top: 0.75rem; }
          .surah-title { font-size: 1.5rem; margin-bottom: 1.5rem; }
          .main-menu-card { margin-bottom: 0.8rem; }
          .arabic { font-size: 1.3rem; }
        }
      `}</style>

      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
      <div className="blob blob4" />

      {currentLevel !== 'main' && (
        <button className="back-button" onClick={goBack}>
          <ChevronLeft size={20} />
          Yza
        </button>
      )}

      {currentLevel === 'main' && <MainLevel />}
      {currentLevel === 'zikirler' && <ZikirMenuLevel />}
      {currentLevel === 'irdenky' && <IrdenkyZikirler />}
      {currentLevel === 'agsamky' && <AgsamkyZikirler />}
      {currentLevel === 'ilkinji-bilmeli-menu' && <IlkinjiBilmeliMenuLevel />}
      {currentLevel === 'ibadat-gornusleri' && <IbadatGornusleriLevel />}
      {currentLevel === 'doga-detay' && <DogaDetayLevel />}
      {currentLevel === 'gorky-detay' && <GorkyLevel />}
      {currentLevel === 'umyt-detay' && <UmytLevel />}
      {currentLevel === 'dayanmak-detay' && <DayanmakLevel />}
      {currentLevel === 'shahadah-details' && <ShahadahDetailsLevel />}
      {currentLevel === 'quran' && <QuranLevel />}
      {currentLevel === 'quran-ihlas' && <IkhlasSurahLevel />}
      {currentLevel === 'quran-asr' && <AsrSurahLevel />}
      {currentLevel === 'quran-nas' && <NasSurahLevel />}
      {currentLevel === 'hadis' && <HadisLevel />}
      {currentLevel === 'namaz-sozleri' && <NamazSozleriLevel />}
      {currentLevel === 'kitablar' && <KitablarLevel />}
      {currentLevel === 'kitab-uch-esas' && <UchEsasLevel />}
      {currentLevel === 'kitab-uch-esas-1' && <UchEsasBolum1Level />}
      {currentLevel === 'kitab-uch-esas-2' && <UchEsasBolum2Level />}
      {currentLevel === 'kitab-uch-esas-3' && <UchEsasBolum3Level />}
      {currentLevel === 'kitab-uch-esas-4' && <UchEsasBolum4Level />}
      {currentLevel === 'kitab-uch-esas-5' && <UchEsasBolum5Level />}
      {currentLevel === 'kitab-uch-esas-6' && <UchEsasBolum6Level />}

      {popup && (
        <div onClick={() => setPopup(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: 'linear-gradient(135deg, #1e2d22 0%, #141f17 100%)', border: '2px solid rgba(212, 175, 122, 0.4)', borderRadius: '14px', padding: '1rem 1.1rem', width: '100%', maxWidth: '480px', maxHeight: '80vh', overflowY: 'auto', position: 'relative' }}>
            <button onClick={() => setPopup(null)} style={{ position: 'absolute', top: '0.5rem', right: '0.7rem', background: 'none', border: 'none', color: '#d4af7a', fontSize: '1.3rem', cursor: 'pointer', lineHeight: 1 }}>×</button>
            {popup.id === 'wajyp' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>Wajyp diýmek: ýerine ýetirseň sogap bar, taşlasaň günä bar.</p>
              </div>
            )}
            {popup.id === 'asr-1' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Ibn Kasiriň düşündirişi</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'right', lineHeight: '1.7', margin: '0 0 0.3rem' }}>قال ابن كثير: الْعَصْرُ: الزَّمَانُ الَّذِي تَقَعُ فِيهِ أَعْمَالُ بَنِي آدَمَ مِنْ خَيْرٍ وَشَرٍّ.</p>
                <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.7rem' }}>Ibn Kasir aýtdy: "Asr" — bu adamzadyň ähli hereketleriniň bolup geçýän wagtydyr, ýagşylyk bolsun ýa-da ýamanlyk.</p>
                <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.6rem 0.8rem', margin: '0 0 0.7rem', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>Allah tagala öz isleýän zadyndan ant içip bilýär, emma adamlar bolsa Alladan başga zatlardan ant içip bilmeýärler.</p>
                </div>
                <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Pygamber ﷺ aýtdy</p>
                <div style={{ borderLeft: '2px solid rgba(212, 175, 122, 0.4)', paddingLeft: '0.8rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1rem', fontFamily: 'Amiri, serif', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.3rem' }}>«مَنْ حَلَفَ بِغَيْرِ اللَّهِ فَقَدْ أَشْرَكَ»</p>
                  <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: 0, fontStyle: 'italic' }}>«Kim Alladan başga zatdan ant içse, ol şirk edendir.»</p>
                </div>
              </div>
            )}
            {popup.id === 'iman' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.6rem' }}>Iman sözüniň kesgitlemesi</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', fontWeight: '600', margin: '0 0 0.2rem' }}>Dil taýdan</p>
                <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.6rem' }}>Iman diýmek — tassyklamakdyr, ýagny dogry hasaplamakdyr.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', fontWeight: '600', margin: '0 0 0.2rem' }}>Din taýdan</p>
                <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>Iman — ýürek bilen ynanmak, dil bilen aýtmak we beden bilen amal etmekdir. Iman gowy amallar bilen ösýär, erbet amallar bilen peselýär.</p>
              </div>
            )}
            {popup.id === 'amal' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>Gowy amal — bu Allah üçin yhlas bilen edilýän we pygamberiň görkezmesine laýyk gelýän amaldyr.</p>
              </div>
            )}
            {popup.id === 'hak' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#e8d5a3', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.6rem' }}>Göz öňünde tutulmaly şertleri:</p>
                <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.8', margin: '0 0 0.8rem' }}>1. Yhlas bilen<br/>2. Ylym bilen<br/>3. Hikmet bilen<br/>4. Ýumşaklyk bilen<br/>5. Sabyr bilen</p>
                <p style={{ color: '#e07b54', fontSize: '0.88rem', margin: 0 }}>❗ Ylymsyz çagyrmak — peýdadan zyýany köp.</p>
              </div>
            )}
            {popup.id === 'sabyr' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#e8d5a3', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.6rem' }}>Sabyr üç görnüşde bolýar:</p>
                <p style={{ color: '#c9b991', fontSize: '0.9rem', lineHeight: '1.8', margin: '0 0 1rem' }}>1. Allanyň buýran zatlaryny ýerine ýetirmekde sabyr etmek<br/>2. Allanyň gadagan eden zatlaryndan saklanmakda sabyr etmek<br/>3. Başyňa kynçylyk gelende ýaman sözleri aýtmazlyk.</p>
                <p style={{ color: '#c9b991', fontSize: '0.88rem', margin: '0 0 0.5rem' }}>Allah Tagala şeýle diýdi:</p>
                <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.6rem 0.5rem', textAlign: 'center' }}>
                  <p style={{ color: '#e8d5a3', fontSize: '1.2rem', fontFamily: 'serif', margin: '0 0 0.3rem', direction: 'rtl' }}>وَاللَّهُ مَعَ الصَّابِرِينَ</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', margin: 0, fontStyle: 'italic' }}>Allah tagala sabyrly adamlar bilendir.</p>
                </div>
              </div>
            )}
            {popup.id === 'hadis-acykla' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0, whiteSpace: 'pre-line' }}>{popup.content}</p>
              </div>
            )}
            {popup.id === 'delil' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: '0 0 0.8rem' }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>Delil diýmek</span> — bir zady subut etmek üçin getirilýän esasdyr.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.4rem' }}>Delil birnäçe görnüşde bolýar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {[['Kuran', 'Allanyň sözi.'], ['Sünnet', 'Pygamberiň sözi.'], ['Yjma', 'Alymlaryň ylalaşygy.']].map(([name, desc]) => (
                    <div key={name} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '7px', padding: '0.4rem 0.6rem' }}>
                      <span style={{ color: '#d4af7a', fontWeight: '700', fontSize: '0.92rem' }}>{name}</span>
                      <span style={{ color: '#c9b991', fontSize: '0.92rem' }}> — {desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {popup.id === 'umyt-ginisleyin' && (
              <div style={{ paddingRight: '0.5rem' }}>
                <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '600', margin: '0 0 0.8rem' }}>Umyt etmek diýmek — sebäp tutup, bir gowy zada garaşmakdyr.</p>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>الرَّجَاءُ الْوَاجِبُ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diňe Allahdan umyt etmek.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — wajyp bolan ybadatdyr.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Delil:</p>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.4rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿فَمَنْ كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا﴾</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 0.2rem' }}>«Kim Rebbi bilen duşuşmagy umyt edýän bolsa, goý, ol ýagşy amal etsin we Rebbine edýän ybadatynda hiç kimi Oňa şärik goşmasyn.»</p>
                  <p style={{ color: '#d4af7a', fontSize: '0.76rem', fontWeight: '600', margin: 0 }}>(Al-Kahf, 110)</p>
                </div>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.8rem' }}>
                  {umytMysallar1.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>رَجَاءُ الشِّرْكِ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Allahdan başga birinden diňe Allahyň edip biljek zadyny umyt etmek.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — uly şirkdir. Şeýle eden adam Yslamdan çykýar we kapyr bolýar.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Delil:</p>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.4rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.3rem' }}>﴿فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا﴾</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 0.2rem' }}>«Şonuň üçin Allah bilen bilelikde hiç kime doga etmäň.»</p>
                  <p style={{ color: '#d4af7a', fontSize: '0.76rem', fontWeight: '600', margin: 0 }}>(Jyn, 18)</p>
                </div>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.8rem' }}>
                  {umytMysallar2.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>الرَّجَاءُ الْمُبَاحُ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diri adamyň elinden gelýän zady ondan umyt etmek.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — rugsat berilendir.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {umytMysallar3.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {popup.id === 'dayanmak-ginisleyin' && (
              <div style={{ paddingRight: '0.5rem' }}>
                <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '600', margin: '0 0 0.8rem' }}>Daýanmak diýmek — sebäp tutup, netijäni Allaha tabşyrmakdyr.</p>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>تَوَكُّلُ الْعِبَادَةِ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diňe Allaha daýanmak.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — wajyp bolan ybadatdyr.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Delil:</p>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.4rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَعَلَى اللَّهِ فَتَوَكَّلُوا إِنْ كُنْتُمْ مُؤْمِنِينَ﴾</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 0.2rem' }}>«Diňe Allaha daýanyň, eger siz mömin bolsaňyz.»</p>
                  <p style={{ color: '#d4af7a', fontSize: '0.76rem', fontWeight: '600', margin: 0 }}>(Mäide, 23)</p>
                </div>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.8rem' }}>
                  {dayanmakMysallar1.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>تَوَكُّلُ الشِّرْكِ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Allahdan başga birine diňe Allahyň edip biljek zadynda daýanmak.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — uly şirkdir. Şeýle eden adam Yslamdan çykýar we kapyr bolýar.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Delil:</p>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.4rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَعَلَى اللَّهِ فَتَوَكَّلُوا إِنْ كُنْتُمْ مُؤْمِنِينَ﴾</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 0.2rem' }}>«Diňe Allaha daýanyň, eger siz mömin bolsaňyz.»</p>
                  <p style={{ color: '#d4af7a', fontSize: '0.76rem', fontWeight: '600', margin: 0 }}>(Mäide, 23)</p>
                </div>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.8rem' }}>
                  {dayanmakMysallar2.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>التَّوَكُّلُ الْمُبَاحُ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diri adamyň elinden gelýän işde oňa daýanmak, ýagny oňa bir işi tabşyrmak.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — rugsat berilendir.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {dayanmakMysallar3.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {popup.id === 'gorky-ginisleyin' && (
              <div style={{ paddingRight: '0.5rem' }}>
                <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '600', margin: '0 0 0.2rem' }}>Gorky diýmek — howp abanýan zatdan çekinmekdir.</p>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', margin: '0 0 0.8rem' }}>Gorkynyň görnüşleri:</p>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>خَوْفُ الْعِبَادَةِ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Allahdan gorkmak.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — wajyp bolan ybadatdyr.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Delil:</p>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.4rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.3rem' }}>﴿فَلَا تَخَافُوهُمْ وَخَافُونِ إِنْ كُنْتُمْ مُؤْمِنِينَ﴾</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 0.2rem' }}>«Şonuň üçin olardan gorkmaň-da, Menden gorkuň, eger çyn mömin bolsaňyz.»</p>
                  <p style={{ color: '#d4af7a', fontSize: '0.76rem', fontWeight: '600', margin: 0 }}>(Äli Ymran, 175)</p>
                </div>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.8rem' }}>
                  {gorkyMysallar1.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>خَوْفُ الشِّرْكِ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diňe Allahyň güýji ýetýän zatlarda Allahdan däl-de, başgadan gorkmak.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — uly şirkdir. Şeýle eden adam Yslamdan çykýar we kapyr bolýar.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Delil:</p>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.4rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِنَّمَا ذَلِكُمُ الشَّيْطَانُ يُخَوِّفُ أَوْلِيَاءَهُ فَلَا تَخَافُوهُمْ وَخَافُونِ إِنْ كُنْتُمْ مُؤْمِنِينَ﴾</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 0.2rem' }}>«Aslynda, sizi öz kömekçileri bilen gorkuzýan diňe şeýtandyr. Şonuň üçin olardan gorkmaň-da, Menden gorkuň, eger-de siz çyn mömin bolsaňyz.»</p>
                  <p style={{ color: '#d4af7a', fontSize: '0.76rem', fontWeight: '600', margin: 0 }}>(Äli Ymran, 175)</p>
                </div>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.8rem' }}>
                  {gorkyMysallar2.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>الْخَوْفُ الْمُحَرَّمُ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Gadagan edilen gorky.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Kimdir birinden gorkup, Allahyň buýran zadyny taşlamak ýa-da Onuň haram eden işlerini etmekdir. Bu uly günädir.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Delil:</p>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.4rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.3rem' }}>﴿فَلَا تَخْشَوُا النَّاسَ وَاخْشَوْنِ﴾</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>«Adamlardan gorkmaň, Menden gorkuň.»</p>
                </div>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.8rem' }}>
                  {gorkyMysallar4.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>4-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>الْخَوْفُ الطَّبِيعِيُّ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Tebigy gorky.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — rugsat berilendir.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {gorkyMysallar3.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {popup.id === 'doga-ginisleyin' && (
              <div style={{ paddingRight: '0.5rem' }}>
                <p style={{ color: '#f4e4c1', fontSize: '0.97rem', fontWeight: '600', margin: '0 0 0.2rem' }}>Doga diýmek — çagyrmak diýmekdir.</p>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', margin: '0 0 0.8rem' }}>Doga etmegiň, ýagny çagyrmagyň görnüşleri:</p>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>دُعَاءُ الْعِبَادَةِ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diňe Allaha doga etmek.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — wajyp bolan ybadatdyr we ybadatyň iň beýik görnüşlerinden biridir.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Deliller:</p>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.4rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.3rem' }}>﴿وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ﴾</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 0.2rem' }}>«Rebbiňiz aýtdy: "Maňa doga ediň, Men size jogap bereýin".»</p>
                  <p style={{ color: '#d4af7a', fontSize: '0.76rem', fontWeight: '600', margin: 0 }}>(Ğafir, 60)</p>
                </div>
                <p style={{ color: '#c9b991', fontSize: '0.86rem', margin: '0 0 0.3rem' }}>Pygamberimiz ﷺ şeýle diýdi:</p>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.8rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1.05rem', fontFamily: 'Amiri, serif', textAlign: 'center', lineHeight: '1.8', margin: '0 0 0.3rem' }}>«الدُّعَاءُ هُوَ الْعِبَادَةُ»</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', margin: '0 0 0.2rem' }}>«Doga — ybadatyň hut özüdir.»</p>
                  <p style={{ color: '#d4af7a', fontSize: '0.76rem', fontWeight: '600', margin: 0 }}>(Ahmad, Abu Dawud, at-Tirmizi)</p>
                </div>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>دُعَاءُ الشِّرْكِ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diňe Allahyň başaryp biljek zadyny Ondan başga birinden soramak.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — uly şirkdir. Şeýle eden adam Yslamdan çykýar we kapyr bolýar.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.4rem' }}>
                  {dogaMysallar2.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Deliller:</p>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.3rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿وَلَا تَدْعُ مِنْ دُونِ اللَّهِ مَا لَا يَنْفَعُكَ وَلَا يَضُرُّكَ ۖ فَإِنْ فَعَلْتَ فَإِنَّكَ إِذًا مِنَ الظَّالِمِينَ﴾</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 0.2rem' }}>«Allahdan başga saňa peýda we zyýan berip bilmeýän zatlara doga etme. Eger şeýle etseň, onda sen zalymlardan bolarsyň.»</p>
                  <p style={{ color: '#d4af7a', fontSize: '0.76rem', fontWeight: '600', margin: 0 }}>(Ýunus, 106)</p>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.6rem 0.7rem', marginBottom: '0.8rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.9', margin: '0 0 0.3rem' }}>﴿إِنَّهُ مَنْ يُشْرِكْ بِاللَّهِ فَقَدْ حَرَّمَ اللَّهُ عَلَيْهِ الْجَنَّةَ وَمَأْوَاهُ النَّارُ ۖ وَمَا لِلظَّالِمِينَ مِنْ أَنْصَارٍ﴾</p>
                  <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: '0 0 0.2rem' }}>«Kim Allaha şirk goşsa, Allah oňa Jenneti haram edändir we onuň barjak ýeri bolsa Dowzahdyr. Zalymlar üçin hiç bir kömekçi ýokdur.»</p>
                  <p style={{ color: '#d4af7a', fontSize: '0.76rem', fontWeight: '600', margin: 0 }}>(Al-Mäidä, 72)</p>
                </div>

                <p style={{ color: '#d4af7a', fontSize: '0.78rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3-nji görnüş</p>
                <p style={{ color: '#f4e4c1', fontSize: '1.1rem', fontFamily: 'Amiri, serif', direction: 'rtl', textAlign: 'center', lineHeight: '1.6', margin: '0 0 0.15rem' }}>الدُّعَاءُ الْمُبَاحُ</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.95rem', fontWeight: '700', textAlign: 'center', margin: '0 0 0.3rem' }}>Diri adamyň elinden gelýän zady ondan soramak.</p>
                <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.65', margin: '0 0 0.4rem' }}>Bu — rugsat berilendir.</p>
                <p style={{ color: '#d4af7a', fontSize: '0.82rem', fontWeight: '700', margin: '0 0 0.3rem' }}>Mysallar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {dogaMysallar3.map((m, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                      <p style={{ color: '#c9b991', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>• </span>{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {popup.id === 'yakyn-garyndas' && (
              <div style={{ paddingRight: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.5rem 0.7rem' }}>
                    <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>Ýakyn garyndaşlary tebigy söýgi bilen söýmek bolýandyr, hatda olar kapyr bolsalar hem, meselem: ata-eneň.</p>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.5rem 0.7rem' }}>
                    <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>Saňa ýagşylyk edene ýagşylyk bilen jogap bermek bolýandyr, hatda olar kapyr bolsalar hem.</p>
                  </div>
                </div>
              </div>
            )}
            {popup.id === 'musrik' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                  <span style={{ color: '#d4af7a', fontWeight: '700' }}>Müşrik</span> diýmek — Allaha şärik goşýan adamdyr.
                </p>
              </div>
            )}
            {popup.id === 'kapyr' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                  <span style={{ color: '#d4af7a', fontWeight: '700' }}>Kapyr</span> diýmek — sözi, amaly ýa-da ynanjy bilen imany bütinleý ýitiren adamdyr.
                </p>
              </div>
            )}
            {popup.id === 'rujz-manys' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>Rujz</span> — Allahdan başga ybadat edilýän zatlar.</p>
              </div>
            )}
            {popup.id === 'halyl-manys' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}><span style={{ color: '#d4af7a', fontWeight: '700' }}>Halyl</span> — Allahyň iň söýgüli guly diýmekdir.</p>
              </div>
            )}
            {popup.id === 'hira-wadysy' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>Pygamberimiz Mekgäniň ýanyndaky Hira gowagyndaka, Jebraýyl perişde ilkinji gezek gelip, Allah Tagaladan oňa wahy (habar) getirdi.</p>
              </div>
            )}
            {popup.id === 'sure-yeterlik' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>Bu ymamyň sözi başga süreler indirilmese-de bolardy diýmekligi aňlatmaýar, eýsem bu söz bu süräniň uly ähmiýetiniň bardygyny aňladýar.</p>
              </div>
            )}
            {popup.id === 'aziz-hakim' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#d4af7a', fontSize: '0.88rem', fontWeight: '700', margin: '0 0 0.4rem' }}>El-Aziz adynyň üç manysy bar:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.7rem' }}>
                  <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.7rem' }}>
                    <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>1. Hemme zatdan güýçli, Oňa güýji ýetjek ýokdur.</p>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.7rem' }}>
                    <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>2. Hemme zady ýeňýär, Ony hiç kim ýeňip bilmeýär.</p>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.7rem' }}>
                    <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>3. Oňa hiç kim zyýan berip bilmeýär.</p>
                  </div>
                </div>
                <p style={{ color: '#d4af7a', fontSize: '0.88rem', fontWeight: '700', margin: '0 0 0.4rem' }}>El-Hakim adynyň manysy:</p>
                <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.4rem 0.7rem' }}>
                  <p style={{ color: '#f4e4c1', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>Her bir işi hikmetler (sebäpler) bilen edýän diýmekdir.</p>
                </div>
              </div>
            )}
            {popup.id === 'ybadat-manys' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                  <span style={{ color: '#d4af7a', fontWeight: '700' }}>Ybadat</span> diýmek — Allah Tagalanyň gowy görýän we razy bolýan ähli amallarydyr.
                </p>
              </div>
            )}
            {popup.id === 'nalet' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
                  <span style={{ color: '#d4af7a', fontWeight: '700' }}>Nälet</span> ýa-da <span style={{ color: '#d4af7a', fontWeight: '700' }}>lagnat</span> diýmek — adamyň uly günäsi sebäpli Allahyň rehminden we gowulygyndan daşlaşdyrylmagyny aňladýar.
                </p>
              </div>
            )}
            {popup.id === 'nas-tafsir' && (
              <div style={{ paddingRight: '1rem' }}>
                <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.5rem' }}>Ýeňilleşdirilen tefsir</p>
                <p style={{ color: '#c9b991', fontSize: '0.92rem', lineHeight: '1.7', margin: 0, whiteSpace: 'pre-line' }}>{popup.content}</p>
                {popup.bellik && (
                  <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.6rem 0.8rem', marginTop: '1.2rem' }}>
                    <p style={{ color: '#d4af7a', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Bellik</p>
                    <p style={{ color: '#c9b991', fontSize: '0.9rem', margin: 0, lineHeight: '1.6', paddingLeft: '0.8rem' }}>{popup.bellik}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
