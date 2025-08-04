import { Button } from "@mui/material";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <h1 className="uppercase text-3xl font-semibold">Pagina no encontrada</h1>

      <Button
        component={Link}
        to="/"
        color="error"
        variant="contained"
        size="large"
      >
        Ir al inicio
      </Button>
    </main>
  );
}
