import DashboardBlock from "@/components/ui/dashboard-block";
import ChartsBlock from "@/components/ui/charts-block";
import TableBlock from "@/components/table-block";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardBlock />
      <ChartsBlock />
      <TableBlock />
    </div>
  );
}
