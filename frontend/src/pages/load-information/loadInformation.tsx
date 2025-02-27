import { FC } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Button from '#/components/button';
import FormHeader from '#/components/formHeader';
import FlatList from '#/components/flatList';
import ProgressIndicator from '#/components/progressIndicator';

import { FlatListTypeEnum } from '#/components/flatList/types';
import { ProgressStepStatus } from '#/components/progressIndicator/types';
import { ILoadInformationProps } from './types';

import './styles.css';

const LoadInformationPage: FC<ILoadInformationProps> = ({ message }) => {
  const flatList = [
    {
      logo: 'src/assets/logos/lla-logo.svg',
      type: FlatListTypeEnum.milei,
      subTitle: 'Milei',
      title: 'Javier Gerardo',
      votes: 0,
      edit: true,
    },
    {
      logo: 'src/assets/logos/uxp.svg',
      type: FlatListTypeEnum.massa,
      subTitle: 'Massa',
      title: 'Sergio Tomas',
      votes: 0,
      edit: true,
    },
    {
      logo: 'src/assets/icon/mail-closed.svg',
      type: FlatListTypeEnum.blank,
      subTitle: '',
      title: 'Votos en blanco',
      votes: 0,
      edit: true,
    },
    {
      logo: 'src/assets/icon/mail-open.svg',
      type: FlatListTypeEnum.null,
      subTitle: '',
      title: 'Votos nulos',
      votes: 0,
      edit: true,
    },
    {
      logo: 'src/assets/icon/mail-invalid.svg',
      type: FlatListTypeEnum.noValidate,
      subTitle: '',
      title: 'Votos invalidos',
      votes: 0,
      edit: true,
    },
    {
      logo: 'src/assets/icon/mail-question.svg',
      type: FlatListTypeEnum.absent,
      subTitle: '',
      title: 'Ausentes',
      votes: 0,
      edit: true,
    },
  ];

  return (
    <section className="bg-white items-center flex flex-col ">
      <FormHeader routerLink="/" title="Cargar datos del certificado" />
      <div className="container mx-auto p-2">
        <div className="flex items-center justify-center my-210">
          <ProgressIndicator
            steps={[
              ProgressStepStatus.Successful,
              ProgressStepStatus.Successful,
              ProgressStepStatus.Active,
            ]}
          />
        </div>
        {flatList.map((item, index) => (
          <div
            className="flex items-center justify-center my-6 w-full p-2"
            key={index}
          >
            <FlatList
              logo={item.logo}
              type={item.type}
              subTitle={item.subTitle}
              title={item.title}
              votes={item.votes}
              edit={item.edit}
            />
          </div>
        ))}
        <div className="flex items-center justify-center my-10">
          {/* TODO: Mover a Dashboard */}
          <Link to="/">
            <Button
              className="bg-violet-brand p-4 text-white rounded-xl font-semibold text-xl tracking-wider w-full"
              type="submit"
              label="Enviar Datos"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const LoadInformation = observer(LoadInformationPage);

export default LoadInformation;
