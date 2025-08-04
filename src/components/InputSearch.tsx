import { Button, ButtonGroup, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface InterfaceProps {
  value?: string;
  className?: string;
  classes?: { input: string };
  colors?: {
    border?: string;
    iconSearch?: string;
    borderHover?: string;
  };
  setValue?: (val: string) => void;
  handleSearch?: () => void;
  onClear?: () => void;
}

export default function InputSearch({
  value,
  className,
  classes,
  colors,
  setValue,
  handleSearch,
  onClear,
}: InterfaceProps) {
  const colors_ = {
    border: "var(--color-warning)",
    borderHover: "var(--color-tertiary)",
    iconSearch: "var(--color-warning)",
    ...colors,
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch && handleSearch();
  };

  return (
    <TextField
      name="text"
      placeholder="Buscar..."
      title="Texto a buscar..."
      size="small"
      className={"" + (className ? " " + className : "")}
      value={value}
      onChange={(e) => setValue && setValue(e.target.value)}
      onKeyDown={onKeyDown}
      sx={{
        "& .MuiInputBase-root": {
          padding: 0,
          borderRadius: "100px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderWidth: 2,
          borderColor: colors_.border,
        },
        "& .css-jupps9-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
          {
            borderColor: colors_.borderHover,
          },
      }}
      slotProps={{
        input: {
          className: classes?.input ? " " + classes.input : "",
          endAdornment: (
            <ButtonGroup variant="text" color="inherit" className="!">
              <Button
                title="Limpiar"
                sx={{
                  width: "2.5rem",
                  minWidth: 0,
                  borderRadius: 0,
                }}
                onClick={onClear}
              >
                <HighlightOffIcon
                  className="text-neutral-500"
                  fontSize="small"
                />
              </Button>

              <Button
                title="Buscar"
                sx={{
                  width: "2.5rem",
                  minWidth: 0,
                  borderRadius: "100px",
                }}
                onClick={handleSearch}
              >
                <SearchIcon
                  sx={{
                    color: colors_.iconSearch,
                  }}
                />
              </Button>
            </ButtonGroup>
          ),
        },
      }}
    />
  );
}
