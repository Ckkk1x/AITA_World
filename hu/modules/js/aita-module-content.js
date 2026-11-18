// Тексти сторінок модулів за шаблоном (AITA_Site/Модулі_шаблон_сторінки_модуля.md).
// Модуль без запису тут показується старим шаблоном. video: шлях до ролика; якщо порожньо, показуємо img.
const MODC = {
  "Leadek": {
    h1: "Minden hívás kitölti az ügyfél adatlapját",
    sub: "A weboldalról, e-mailből és telefonon érkező megkeresések automatikusan az értékesítési tölcsérbe kerülnek, az ügyfél adatlapja pedig minden levél, megbeszélés és hívás után bővül.",
    hero: { img: "/modules-assets/leads-hero.jpg", video: "" },
    diff: [
      ["A menedzser a hívás után kézzel írja le a megállapodásokat", "Az Aita átírja a hívást, és az összefoglalót az ügyfél adatlapjára írja", "A megállapodások akkor is megmaradnak, ha a menedzser nem ért rá feljegyezni őket"],
      ["Minden menedzser a maga módján jegyzetel", "Minden tölcsérhez megadod az AI utasítását, és a hívásösszefoglalók a te struktúrád szerint készülnek", "Az igényeket, a költségkeretet és a következő lépéseket az egész csapat egyformán írja le"],
      ["A megnyert ügyfelet újra fel kell vinni a projektekbe", "A projekt közvetlenül a lead adatlapjáról jön létre", "A megrendelést teljesítő munkatársak látják az ügyfél teljes előzményeit"]
    ],
    tasks: [
      { tab: "Megkeresés", h: "A megkeresés kézi bevitel nélkül kerül a tölcsérbe", p: "A platform megmutatja, honnan jött az ügyfél: weboldalról, e-mailből, Telegramról vagy hívásból. Más források, például a hirdetések, külön csatlakoztathatók. Minden telefonvonal a saját tölcsérébe irányítható, így a megkeresés azonnal a megfelelő csapathoz kerül.", img: "/modules-assets/leads-board.jpg", video: "" },
      { tab: "Hívás", h: "A beszélgetésből bejegyzés lesz az adatlapon", p: "A bejövő és kimenő hívások automatikusan átíródnak, az összefoglaló pedig minden beszélgetés után frissül. Az ember által beírt leírás változatlan marad. A tartalom nélküli hívások, például az üzenetrögzítő vagy a téves szám, nem módosítják az adatlapot.", img: "/modules-assets/leads-call.jpg", video: "" },
      { tab: "Utasítás az AI-nak", h: "Te döntöd el, mit rögzítsen a hívás után", p: "Írd le a tölcsért egyszerű szavakkal, és a platform elkészíti az AI utasítását. Vagy írj saját utasítást a saját jelentésformátumoddal. Indítás előtt a „Prompt tesztelése” gombbal ellenőrizheted.", img: "/modules-assets/leads-prompt.jpg", video: "" },
      { tab: "Üzlet", h: "Látszik, mi a következő lépés minden ügyféllel", p: "A szakasz, az összeg, az utolsó és a következő kapcsolatfelvétel az adatlapon látszik. A „Késésben” szűrő azokat az ügyfeleket mutatja, akikkel nem vették fel időben a kapcsolatot.", img: "/modules-assets/leads-board.jpg", video: "" },
      { tab: "Előzmények", h: "Az ügyféllel végzett teljes munka egy adatlapon", p: "Az adatlaphoz levelek és megbeszélések kapcsolódnak, a „Chat”, „Levelezés”, „Beszélgetések” és „Előzmények” fülek pedig mindent megőriznek, ami az ügyféllel történt. Ha menedzser változik, a kolléga ugyanonnan folytatja.", img: "/modules-assets/leads-history.jpg", video: "", link: null },
      { tab: "Projekt", h: "A megnyert leadből projekt lesz", p: "Az adatlapon a „Projekt létrehozása” gombra kattintasz, és a projekt emlékszik, melyik leadből indult.", img: "/modules-assets/blog-cover-project_stages.jpg", video: "", link: null }
    ],
    ai: [
      ["A hívás összefoglalója", "Az AI a te utasításod szerint rögzíti a beszélgetés tartalmát."],
      ["Következő lépések", "A hívás után az AI-ügynök javasolja, mi legyen a következő lépés."],
      ["AI-titkár", "Az AI elolvassa az új leveleket, és javasolja lead, kapcsolat vagy feladat létrehozását."]
    ],
    aiLimit: "A menedzser által írt leírást az AI nem módosítja. A hívás összefoglalója külön mezőbe kerül.",
    more: ["Több tölcsér", "Címkék és szűrők", "Elvesztési okok", "Importálás CSV-ből és Excelből", "Exportálás CSV-be és XLSX-be", "Űrlapok a weboldalra"],
    access: ["A tölcséreket és a leadeket a céged tagjai látják.", "A tölcsér megosztható egy másik céggel.", "Az egyes leadekhez való hozzáférést a „Hozzáférés kezelése” menüben állítják be."],
    start: ["Válassz kész beállítást, vagy hozd létre a saját tölcsérédet.", "Töltsd fel az ügyfeleket CSV-ből vagy Excelből, egyszerre legfeljebb 5 000 sort.", "Kapcsold be a levelezést és a telefóniát."],
    industry: "A lead adatlapján teljesítmény- és kapacitásmezők vannak, ezek átkerülnek az erőmű projektjébe.",
    faq: [
      ["Mi a lead, és mire jó ez a modul a cégnek?", "A lead potenciális ügyfél. A modul az első megkereséstől a megnyert ügyletig kíséri, hogy egyetlen megkeresés se vesszen el."],
      ["Magam határozhatom meg, mit rögzítsen a hívás után?", "Igen. Minden tölcsérhez külön AI-utasítás adható meg, a leírás nyelvét pedig a cég választja."],
      ["Milyen telefonrendszer csatlakoztatható?", "Bármely nyílt API-val rendelkező telefonrendszer. Jelenleg az Unitalk működik: ez továbbítja a hívás felvételét, az átírást és az összefoglalót az Aita készíti."],
      ["Benne van a csomagban a hívások átírása?", "Igen, csak egy telefonszám kell. Az átírás kevés AI-kreditet használ a csomagodból."],
      ["Átvihetők az ügyfelek egy másik CRM-ből?", "Igen, CSV- vagy Excel-fájlból. Vagy az adatokat a csapatunk viszi át."],
      ["Kell külön fizetni a modulért?", "Nem. A „Leadek” minden csomagban benne vannak."]
    ],
    final: "Megmutatjuk, hogyan töltik ki a hívások az ügyféladatlapokat a cégednél"
  }
};
