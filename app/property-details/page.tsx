import Description from "@/components/description";
import PropertyDetailHeader from "@/components/property-detail-header";
import RentalDetail from "@/components/rental-detail";

export default function Page() {
  return (
    <div>
      <PropertyDetailHeader />
      <Description />
      <RentalDetail />
    </div>
  );
}
