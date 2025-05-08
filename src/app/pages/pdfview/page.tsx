import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import Footer from "@/components/Footer/Footer";
import Pdf from "@/components/Section/PdfView/Pdf";
import MenuSix from "@/components/Header/Menu/MenuSix";

export default function PdfPages() {
  return (
    <>
      <div className="bg-grey overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuSix />
        </header>
        <main className="content">
          <Pdf />
        </main>
        <footer id="footer" className="style-six">
          <Footer />
        </footer>
      </div>
    </>
  );
}
