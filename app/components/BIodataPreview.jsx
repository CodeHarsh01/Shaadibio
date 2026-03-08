import Template1 from "./template/Template1";
import Template2 from "./template/Template2";

export default function BiodataPreview({ biodata, TargetRef , Id}) {
  return (
    <>
    {
    
      Id == "2" ? <Template2 biodata={biodata}  TargetRef={TargetRef} /> : <Template1 biodata={biodata}  TargetRef={TargetRef} />
    }
    </>
    
  );
}