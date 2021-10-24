import html2canvas from "html2canvas";
import { Button } from '../Button';

const DownloadButton = ({ id, text }) => {
  const downloadImage = () => {
    window.scrollTo(0, 0);
    const node = document.getElementById(id);

    html2canvas(node).then(function (canvas) {
      const d = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.href = d;
      link.download = "F1Prediction.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return <Button action={downloadImage}>{text}</Button>;
};

export { DownloadButton };
