import PageSelection from "./components/PageSelection";
import Line from "./components/Line";
import DoneButton from "./components/DoneButton";

export default function App() {
  return (
    <div className="m-30">
      <div className="px-2 py-4 flex justify-center items-center">
        <div className="p-2.5 bg-white rounded-md border border-[#EEEEEE] shadow-[0_8px_15px_rgba(20,20,20,0.12),0_0_4px_rgba(20,20,20,0.1)] flex flex-col justify-center items-center">
          <PageSelection pageName="All pages" />
          <Line />
          <PageSelection pageName="Page 1" />
          <PageSelection pageName="Page 2" />
          <PageSelection pageName="Page 3" />
          <PageSelection pageName="Page 4" />
          <Line />
          <DoneButton />
        </div>
      </div>
    </div>
  );
}
