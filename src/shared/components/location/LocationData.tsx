import { BaseTextFieldProps, TextField } from "@mui/material";
import React, { ChangeEventHandler, forwardRef, useEffect, useState } from "react";
import { useGetLocationQuery } from "../../../redux/services/properties";
import { SelectApp } from "../../UI/select/SelectApp";

interface IValue {
  district: string;
  microdistrict: string;
  exactLocation: string;
}

interface IProps extends BaseTextFieldProps {
  onChange?: (value: string) => void;
  value?: string;
}

type OptionType = {
  label: string;
  value: string;
};

const getInitialState = (value?: string) => (value ? value.split(", ") : []);

export const LocationData = forwardRef<HTMLInputElement, IProps>(({ onChange, value, ...props }, ref) => {
  const { data } = useGetLocationQuery();
  const [optionsDistrict, setOptionsDistrict] = useState<OptionType[]>([]);
  const [optionsMicrodistrict, setOptionsMicrodistrict] = useState<OptionType[]>([]);
  const [valueState, setValueState] = useState<IValue>({
    district: getInitialState(value)[0] || "",
    microdistrict: getInitialState(value)[1] || "",
    exactLocation: getInitialState(value)[2] || "",
  });

  const handleWritingLocation: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValueState({ ...valueState, exactLocation: event.target.value });
  };

  const handleChangeDistrict: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!data) {
      return;
    }
    const district = event.target.value;

    setValueState({ district, exactLocation: "", microdistrict: "" });
  };

  const handleChangeMicrodistrict: ChangeEventHandler<HTMLInputElement> = (event) => {
    const microdistrict = event.target.value;

    setValueState({ ...valueState, microdistrict, exactLocation: "" });
  };

  useEffect(() => {
    if (data) {
      const districties = Object.keys(data.location).map((district) => ({ label: district, value: district }));

      setOptionsDistrict(districties);
    }
  }, [data]);

  useEffect(() => {
    if (!data || !valueState.district) {
      return;
    }

    const microdistricties = data.location[valueState.district].map((mcdistrict) => ({
      label: mcdistrict,
      value: mcdistrict,
    }));

    setOptionsMicrodistrict(microdistricties);
  }, [data, valueState.district]);

  useEffect(() => {
    const location = `${valueState.district}, ${valueState.microdistrict}, ${valueState.exactLocation}`;

    onChange?.(location);
  }, [valueState, onChange]);

  return (
    <>
      <SelectApp
        options={optionsDistrict}
        label="Выберете район"
        name="district"
        value={valueState.district}
        onChange={handleChangeDistrict}
      />
      {Boolean(valueState.district) && (
        <SelectApp
          options={optionsMicrodistrict}
          label="Выберете микрорайон"
          name="microdistrict"
          value={valueState.microdistrict}
          onChange={handleChangeMicrodistrict}
        />
      )}

      {valueState.microdistrict && (
        <TextField
          label="Локация"
          variant="outlined"
          value={valueState.exactLocation}
          onChange={handleWritingLocation}
          {...props}
          ref={ref}
          placeholder="ул. Каралева 45"
        />
      )}
    </>
  );
});
