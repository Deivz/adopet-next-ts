import Button from '@/components/Button';
import FileButton from '@/components/FileButton';
import FormInput from '@/components/FormInput';
import SelectInput, { SelectOptions } from '@/components/SelectInput';
import styles from '@/styles/Pet.module.css';
import { InputFieldData } from '@/utils/inputFieldData';
import formInputPets from '@/utils/petRegistration';

type PetProps = {
   countries: Array<SelectOptions>;
   message: Array<SelectOptions>;
   responsibles: Array<SelectOptions>;
}

type GeoNamesResult = {
   totalResultsCount: number,
   geonames: Array<Country>
}

type Responsible = {
   id: string;
   nome: string;
   telefone: string;
   email: string;
}

type Country = {
   adminCode1: string,
   lng: string,
   geonameId: number,
   toponymName: string,
   countryId: string,
   fcl: string,
   population: number,
   countryCode: string,
   name: string,
   fclName: string,
   adminCodes1: {
      ISO3166_2: string
   },
   countryName: string,
   fcodeName: string,
   adminName1: string,
   lat: string,
   fcode: string
}

export async function getStaticProps() {
   try {
      const countriesData = await fetch('http://www.geonames.org/childrenJSON?geonameId=3469034');
      const geoNameResult: GeoNamesResult = await countriesData.json();
      const countries: Array<SelectOptions> = [];

      const responsiblesData = await fetch('http://127.0.0.1:8000/api/responsaveis');
      const responsiblesResult: Array<Responsible> = await responsiblesData.json();
      const responsibles: Array<SelectOptions> = [];

      geoNameResult.geonames.forEach((country: Country) => {
         countries.push(
            {
               value: country.adminCodes1.ISO3166_2,
               label: country.name
            }
         )
      })

      Object.values(responsiblesResult).forEach((responsible: Responsible) => {
         responsibles.push(
            {
               value: responsible.id,
               label: responsible.nome
            }
         )
      });

      return {
         props: {
            countries,
            responsibles
         }
      };
   } catch (error) {
      const message: Array<{}> = [];

      message.push({
         value: '',
         label: "Nenhum resultado encontrado!"
      })

      return {
         props: {
            message
         }
      };
   }
}

export default function Pet({ countries, message, responsibles }: PetProps) {
   return (
      <>
         <div className={styles.side__image}>
         </div>
         <section className={styles.pet}>
            <p className={styles.title}>Cadastre um novo animal para disponibilizá-lo para adoção:</p>
            <form className={styles.form}>
               <div className={styles.container}>
                  {
                     Object.values(formInputPets).map((label: InputFieldData) => {
                        return (
                           <FormInput
                              key={label.id}
                              label={label.label}
                              type={label.type}
                              id={label.inputId}
                              name={label.name}
                              placeholder={label.placeholder}
                           />
                        )
                     })
                  }
                  {countries && <SelectInput label='Estado' options={countries} placeholder='Estado onde o pet reside' />}
                  {message && <SelectInput label='Estado' options={message} placeholder='Não encontrado' />}
               </div>
               {responsibles && <SelectInput label='Responsável' options={responsibles} placeholder='Responsável pelo pet' type='responsible' />}
               {message && <SelectInput label='Estado' options={message} placeholder='Não encontrado' />}
               <FileButton label='Foto' />
               <div className={styles.button}>
                  <Button type='submit' className='button' value='Enviar' />
               </div>
            </form>
         </section>
      </>
   );
}