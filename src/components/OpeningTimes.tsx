import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  SxProps,
} from "@mui/material";

export interface OpeningTimesProps {
  openingTimes: Record<
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday",
    { open: string; close: string }
  >;
  sx?: SxProps;
}

export const OpeningTimes = ({ sx, openingTimes }: OpeningTimesProps) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: 3,
        mt: 4,
        ...sx,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Opening Times
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: "bold", borderBottom: "2px solid #ccc" }}
            >
              Day
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", borderBottom: "2px solid #ccc" }}
            >
              Opening Time
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", borderBottom: "2px solid #ccc" }}
            >
              Closing Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(openingTimes).map(([day, times], index) => (
            <TableRow sx={{ td: { py: 1 } }} key={index}>
              <TableCell sx={{ borderBottom: "1px solid #eee" }}>
                {day}
              </TableCell>
              <TableCell align="center" sx={{ borderBottom: "1px solid #eee" }}>
                {times.open}
              </TableCell>
              <TableCell align="center" sx={{ borderBottom: "1px solid #eee" }}>
                {times.close}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
