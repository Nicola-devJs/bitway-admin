import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useUploadFilesMutation } from "../../../redux/services/files";
import { ImageListApp } from "../../components/ImageList/ImageListApp";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  onChange?: (value: string | string[] | undefined) => void;
}

export const UploadApp = React.forwardRef<HTMLInputElement, IProps>(
  ({ error, helperText, label, onChange, value, ...props }, ref) => {
    const [fetcherUploadFiles, { isLoading }] = useUploadFilesMutation();

    const getUrls = async (files: File[]): Promise<Array<string>> => {
      const urls = [];
      for (const file of files) {
        const formData = new FormData();

        formData.append("file", file);
        try {
          const data = await fetcherUploadFiles(formData).unwrap();
          urls.push(`${import.meta.env.VITE_BACKEND_API}${data.url}`);
        } catch (err) {
          return [];
        }
      }

      return urls;
    };

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
      const files = e.target.files;

      if (!files || files.length === 0) {
        return;
      }

      const dataUrls = await getUrls(Array.from(files));

      if (Array.isArray(value)) {
        const uniqueDataUrls = Array.from(new Set([...value, ...dataUrls]));
        onChange?.(uniqueDataUrls);
      } else {
        onChange?.(dataUrls);
      }
    };

    const handelDeleteImage = (id: number) => {
      if (!Array.isArray(value)) {
        return;
      }

      const filteredImages = value.filter((_, idImage) => idImage !== id);
      onChange?.(filteredImages);
    };

    return (
      <Box>
        {label && (
          <Typography sx={{ p: 1 }} style={{ color: error ? "#d32f2f" : "inherit" }}>
            {label}
          </Typography>
        )}
        <Box sx={{ m: 1, position: "relative" }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            fullWidth
            startIcon={<CloudUploadIcon />}
            disabled={isLoading}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={changeHandler}
              accept=".png, .jpg, .jpeg, .gif"
              multiple
              ref={ref}
              {...props}
            />
          </Button>
          {isLoading && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
        {helperText && (
          <Typography variant="caption" color={"#d32f2f"}>
            {helperText}
          </Typography>
        )}
        {Array.isArray(value) && <ImageListApp images={value} onDeleteImage={handelDeleteImage} isPreviewImage />}
      </Box>
    );
  }
);
