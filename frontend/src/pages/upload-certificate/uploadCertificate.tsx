import { Link } from 'react-router-dom';
import { UploadImage } from '#/components/uploadImage';
import { useState } from 'react';
import { ProgressStepStatus } from '#/components/progressIndicator/types';
import ProgressIndicator from '#/components/progressIndicator';
import FormHeader from '#/components/formHeader';
import './styles.css';

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex justify-space-around items-center gap-2 h-12">
    <div className="flex justify-center items-center rounded-full bg-green-check text-white w-5 h-5 flex-shrink-0">
      <img className="w-3 h-3" src="src/assets/check-icon.svg" alt="" />
    </div>
    <p>{text}</p>
  </div>
);

const UploadCertificate = () => {
  // TODO: Replace with context useState
  const [, setCertificateImage] = useState<string>();

  return (
    <section className="items-center flex flex-col ">
      <FormHeader routerLink="/dashboard" title="Tomar foto" />
      <div className="p-4 w-full">
        <div className="container mx-auto flex-column my-210">
          <ProgressIndicator
            steps={[
              ProgressStepStatus.Active,
              ProgressStepStatus.Pending,
              ProgressStepStatus.Pending,
            ]}
          />
          <div className="text-start my-6">
            <p>
              Usá la cámara para subir el <b>certificado del fiscal</b>, o
              cargala desde la galería.
            </p>
            <div className="flex-column gap-2 p-4">
              <CheckItem text="Buscá un lugar con buena luz." />
              <CheckItem text="Asegurate de que se vean todos los datos." />
              <CheckItem
                text="Asegurate que el certificado esté firmado por el presidente de
                  tu mesa."
              />
            </div>
          </div>
        </div>
        <UploadImage onUpload={setCertificateImage} />
      </div>
    </section>
  );
};

export default UploadCertificate;
