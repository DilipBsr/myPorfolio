import CertificateTopLeft from "./CertificateTopLeft";
import CertificateTopMiddle from "./CertificateTopMiddle";
import CertificateTopRight from "./CertificateTopRight";

const CertificateTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
      <CertificateTopLeft />
      <CertificateTopMiddle />
      <CertificateTopRight />
    </div>
  );
};

export default CertificateTop;
