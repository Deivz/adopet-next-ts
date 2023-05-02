import Button from '@/components/Button';
import FileButton from '@/components/FileButton';
import FormInput from '@/components/FormInput';
import SelectInput, { SelectOptions } from '@/components/SelectInput';
import styles from '@/styles/Pet.module.css';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import ErrorField from '@/components/ErrorField';

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

export type FormInputs = {
   nome: string;
   idade: string;
   porte: string;
   perfil: string;
   cidade: string;
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

   const stringErrorMessage = 'Este campo não pode estar vazio';

   const schema = z.object({
      nome: z.string().nonempty(stringErrorMessage),
      idade: z.string().nonempty(stringErrorMessage),
      porte: z.string().nonempty(stringErrorMessage),
      perfil: z.string().nonempty(stringErrorMessage),
      cidade: z.string().nonempty(stringErrorMessage)
      // photo: z.string().refine((value) => {
      //    return !!value && typeof value === 'object' && Object.keys(value).length > 0;
      //  }, { message: 'O campo de arquivo é obrigatório' })
   });

   const { formState: { errors, isSubmitting }, handleSubmit, register } = useForm<FormInputs>({
      defaultValues: {
         nome: '',
         idade: '',
         porte: '',
         perfil: '',
         cidade: ''
      },
      resolver: zodResolver(schema)
   });

   const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

   return (
      <>
         <div className={styles.side__image}>
         </div>
         <section className={styles.pet}>
            <p className={styles.title}>Cadastre um novo animal para disponibilizá-lo para adoção:</p>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <div className={styles.container}>
                  <FormInput label='Nome' type='text' id='nome' placeholder='Nome do pet' status={isSubmitting} register={register} errors={errors} />
                  <FormInput label='Idade' type='text' id='idade' placeholder='Idade do pet' status={isSubmitting} register={register} errors={errors} />
                  <FormInput label='Porte' type='text' id='porte' placeholder='Porte do pet' status={isSubmitting} register={register} errors={errors} />
                  <FormInput label='Perfil' type='text' id='perfil' placeholder='Perfil do pet' status={isSubmitting} register={register} errors={errors} />
                  <FormInput label='Cidade' type='text' id='cidade' placeholder='Cidade do pet' status={isSubmitting} register={register} errors={errors} />
                  {countries &&
                     <SelectInput
                        id='country'
                        label='Estado'
                        options={countries}
                        placeholder='Estado onde o pet reside'
                        status={isSubmitting}
                        errors={errors}
                        register={register}
                     />}
                  {/* {message &&
                     <SelectInput id='message' label='Estado' options={message} placeholder='Não encontrado' />} */}
               </div>
               {responsibles &&
                  <SelectInput
                     id='responsible'
                     label='Responsável'
                     options={responsibles}
                     placeholder='Responsável pelo pet'
                     type='responsible'
                     status={isSubmitting}
                     errors={errors}
                     register={register}
                  />}
               {/* {message &&
                  <SelectInput id='message' label='Estado' options={message} placeholder='Não encontrado' />} */}
               <FileButton label='Foto' />
               {/* {errors?.photo?.message && <ErrorField message={errors?.photo?.message} />} */}
               <div className={styles.button}>
                  <Button type='submit' className='button' value='Enviar' />
               </div>
            </form>
         </section>
      </>
   );
}