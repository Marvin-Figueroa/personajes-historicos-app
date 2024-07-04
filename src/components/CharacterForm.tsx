import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { characterSchema } from "../validation/characterSchema";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";

import { z } from "zod";
import { useRef } from "react";
import useAddCharacter from "../hooks/useAddCharacter";

type FormData = z.infer<typeof characterSchema>;

const CharacterForm = () => {
  const toast = useRef<Toast>(null);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(characterSchema),
  });

  const addCharacter = useAddCharacter(
    () => {
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Character added successfully!",
      });

      reset();
    },
    () => {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail:
          addCharacter.error?.message || "The character could not be added!",
      });
    }
  );

  const onSubmit = (data: FormData) => {
    const newCharacter = { id: 0, ...data };
    addCharacter.mutate(newCharacter);
  };

  return (
    <>
      <Toast ref={toast} />
      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid w-10 py-4">
        <div className="flex flex-column gap-3 md:flex-row md:justify-content-between md:gap-6">
          <div className="flex flex-column justify-content-between gap-1 md:w-6">
            <div>
              <label htmlFor="name">Name</label>
              <InputText
                id="name"
                {...register("name")}
                className={classNames({ "p-invalid": errors.name })}
              />
              <small
                className={classNames("p-error", "error-message", {
                  visible: errors.name,
                })}
              >
                {errors.name?.message}
              </small>
            </div>

            <div>
              <label htmlFor="biography">Biography</label>
              <InputTextarea
                id="biography"
                {...register("biography")}
                rows={5}
                className={classNames({ "p-invalid": errors.biography })}
              />
              <small
                className={classNames("p-error", "error-message", {
                  visible: errors.biography,
                })}
              >
                {errors.biography?.message}
              </small>
            </div>

            <div>
              <label htmlFor="nationality">Nationality</label>
              <InputText
                id="nationality"
                {...register("nationality")}
                className={classNames({ "p-invalid": errors.nationality })}
              />
              <small
                className={classNames("p-error", "error-message", {
                  visible: errors.nationality,
                })}
              >
                {errors.nationality?.message}
              </small>
            </div>
          </div>

          <div className="flex flex-column gap-2 md:w-6">
            <div>
              <label htmlFor="occupation">Occupation</label>
              <InputText
                id="occupation"
                {...register("occupation")}
                className={classNames({ "p-invalid": errors.occupation })}
              />
              <small
                className={classNames("p-error", "error-message", {
                  visible: errors.occupation,
                })}
              >
                {errors.occupation?.message}
              </small>
            </div>
            <div>
              <label htmlFor="imageUrl">Image URL</label>
              <InputText
                id="imageUrl"
                {...register("imageUrl")}
                className={classNames({ "p-invalid": errors.imageUrl })}
              />
              <small
                className={classNames("p-error", "error-message", {
                  visible: errors.imageUrl,
                })}
              >
                {errors.imageUrl?.message}
              </small>
            </div>
            <div>
              <label htmlFor="birthDate">Birth Date</label>
              <Calendar
                showIcon
                id="birthDate"
                {...register("birthDate", { valueAsDate: true })}
                className={classNames({ "p-invalid": errors.birthDate })}
                maxDate={new Date()}
              />
              <small
                className={classNames("p-error", "error-message", {
                  visible: errors.birthDate,
                })}
              >
                {errors.birthDate?.message}
              </small>
            </div>

            <div>
              <label htmlFor="deathDate">Death Date</label>
              <Calendar
                showIcon
                id="deathDate"
                {...register("deathDate", { valueAsDate: true })}
                className={classNames({ "p-invalid": errors.deathDate })}
                maxDate={new Date()}
              />
              <small
                className={classNames("p-error", "error-message", {
                  visible: errors.deathDate,
                })}
              >
                {errors.deathDate?.message}
              </small>
            </div>
          </div>
        </div>
        <div className="card flex justify-content-center">
          <Button type="submit" label="Submit" className="mt-4 w-3" />
        </div>
      </form>
    </>
  );
};

export default CharacterForm;
