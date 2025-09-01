import CertificateTopLeft from "./CertificateTopLeft";
import CertificateTopMiddle from "./CertificateTopMiddle";
import CertificateTopRight from "./CertificateTopRight";

const CertificateTop = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center flex-col gap-0">
        <CertificateTopMiddle />  
        <CertificateTopLeft />  
      </div>
      <CertificateTopRight />
    </div>
  );
};

export default CertificateTop;
