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
}

type GeoNamesResult = {
   totalResultsCount: number,
   geonames: Array<Country>
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
      const data = await fetch('http://www.geonames.org/childrenJSON?geonameId=3469034');
      const geoNameResult: GeoNamesResult = await data.json();
      const countries: Array<SelectOptions> = [];
      
      geoNameResult.geonames.forEach((country: Country) => {
         countries.push(
            {
               value: country.adminCodes1.ISO3166_2,
               label: country.name
            }
            )
         })
         
         return {
            props: {
               countries
            }
         };
      } catch (error) {
         const message: Array<{}> = [];
         
      message.push({
         value: '',
         label: "Nenhum estado a ser exibido!"
      })
      
      return {
         props: {
            message
         }
      };
   }
}

export default function Pet({ countries, message }: PetProps) {
   return (
      <>
         <div className={styles.side__image}>
         </div>
         <section className={styles.contact}>
            <p className={styles.title}>Cadastre um novo animal para disponibilizá-lo para adoção:</p>
            <form className={styles.form}>
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
               { countries && <SelectInput label='Estado' options={countries} /> }
               { message && <SelectInput label='Estado' options={message} /> }
               <FileButton label='Foto' />
               <div className={styles.button}>
                  <Button type='submit' className='button' value='Enviar' />
               </div>
            </form>
         </section>
      </>
   );
}