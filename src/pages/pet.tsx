import Button from '@/components/Button';
import FileButton from '@/components/FileButton';
import FormInput from '@/components/FormInput';
import SelectInput, { SelectOptions } from '@/components/SelectInput';
import styles from '@/styles/Pet.module.css';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
   estado: string;
   cod_responsavel: string;
   foto: any;
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

   const validacao = yup.object().shape({
      nome: yup.string().required().max(50),
      idade: yup.string().required().max(50),
      porte: yup.string().required().max(50),
      perfil: yup.string().required().max(50),
      cidade: yup.string().required().max(50),
      estado: yup.string().required(),
      cod_responsavel: yup.string().required(),
      foto: yup.mixed().required().test("fileSize", "O arquivo deve possuir no máximo 2MB", (value: any) => {
         if (!value?.length) return true // attachment is optional
         return value[0].size <= 200000
      })
   });

   const { control, register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
      resolver: yupResolver(validacao)
   });

   // const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data, data.foto);

   function onSubmit(petData: FormInputs) {
      const formData = new FormData();
      let dataKey: string | undefined = '';

      petData.foto = petData.foto[0]
      Object.values(petData).forEach((data, index) => {
         dataKey = Object.keys(petData).at(index)
         formData.append(dataKey, data);
      });

      fetch('http://127.0.0.1:8000/api/pets', {
         method: 'POST',
         body: formData,
         // headers: {
         //    'content-type': 'multipart/form-data'
         //    // 'content-type': 'application/json'
         // },
      })
         .then((res) => res.json())
         .then((data) => alert(data))
         .catch((err) => alert(err));
   }

   return (
      <>
         <div className={styles.side__image}>
         </div>
         <section className={styles.pet}>
            <p className={styles.title}>Cadastre um novo animal para disponibilizá-lo para adoção:</p>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <div className={styles.container}>
                  <FormInput label='Nome' type='text' id='nome' placeholder='Nome do pet' register={register} errors={errors} />
                  <FormInput label='Idade' type='text' id='idade' placeholder='Idade do pet' register={register} errors={errors} />
                  <FormInput label='Porte' type='text' id='porte' placeholder='Porte do pet' register={register} errors={errors} />
                  <FormInput label='Perfil' type='text' id='perfil' placeholder='Perfil do pet' register={register} errors={errors} />
                  <FormInput label='Cidade' type='text' id='cidade' placeholder='Cidade do pet' register={register} errors={errors} />
                  {
                     countries &&
                     <Controller
                        name="estado"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                           <SelectInput
                              id='estado'
                              label='Estado'
                              options={countries}
                              placeholder='Estado onde o pet reside'
                              errors={errors}
                              value={countries.find((c) => c.value === value)}
                              onChange={(val: any) => onChange(val.value)}
                           />
                        )}
                     />
                  }
                  {/* {message &&
                     <SelectInput id='message' label='Estado' options={message} placeholder='Não encontrado' />} */}
               </div>
               {
                  responsibles &&
                  <Controller
                     name="cod_responsavel"
                     control={control}
                     render={({ field: { onChange, value } }) => (
                        <SelectInput
                           id='cod_responsavel'
                           type='responsible'
                           label='Responsável'
                           options={responsibles}
                           placeholder='Responsável pelo pet'
                           errors={errors}
                           value={responsibles.find((c) => c.value === value)}
                           onChange={(val: any) => onChange(val.value)}
                        />
                     )}
                  />
               }
               {/* {message &&
                  <SelectInput id='message' label='Estado' options={message} placeholder='Não encontrado' />} */}
               {/* <FileButton label='Foto' id='foto' register={register} errors={errors} /> */}
               <FileButton
                  label='Foto'
                  id='foto'
                  register={register}
                  errors={errors}
               />
               <div className={styles.button}>
                  <Button type='submit' className='button' value='Enviar' />
               </div>
            </form>
         </section>
      </>
   );
}