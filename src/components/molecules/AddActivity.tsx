import styled from "@emotion/styled";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { ChangeEvent, useState } from "react";

interface AddActivityFormProps {
  id: string;
  defaultValue?: string;
}

interface ActivityFormTypes {
  activityName: string;
}

export const AddActivity = ({ defaultValue, id }: AddActivityFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ActivityFormTypes>({
    defaultValues: {
      activityName: defaultValue,
    },
  });

  const onSubmit: SubmitHandler<ActivityFormTypes> = (data) => {
    // TODO Here pass data to context
    console.log(data);
  };

  return (
    <AddActivityWrapper>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors?.activityName}>
            <Input
              id={id}
              variant="flushed"
              placeholder="Name of your new activity..."
              size="lg"
              {...register("activityName", {
                required: "Activity name is required",
                maxLength: {
                  value: 30,
                  message: "Max value length is 30 characters",
                },
              })}
            />
            {errors ? (
              <FormErrorMessage>
                {errors.activityName?.message}
              </FormErrorMessage>
            ) : null}
          </FormControl>
          <Button
            variant="solid"
            size="lg"
            marginTop="10px"
            colorScheme={"blue"}
            type={"submit"}
            isLoading={isSubmitting}
          >
            Add activity
          </Button>
        </form>
      </Flex>
    </AddActivityWrapper>
  );
};

const AddActivityWrapper = styled.div`
  width: 100%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
