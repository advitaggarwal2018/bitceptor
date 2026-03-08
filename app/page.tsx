import type { Metadata } from "next";
import { Hero} from "@/components/home/hero";
import { ServiceOverview } from "@/components/home/service-overview";

export const metadata: Metadata = {

    title: 'Home',
    description: 'Engineering Intelligent Systems for the future. Betceptor delivers innovative IT services and cutting-edge AI solutions.',
    openGraph: {
        title: 'Home | Bitceptor',
        description: 'Engineering Intelligent Systems for the future. Betceptor delivers innovative IT services and cutting-edge AI solutions.',
        url: '/',
    },

};
export default function Home() {

    return (
        <div>
            <Hero />
            <ServiceOverview/>
        </div>
    );

}
/*export default function Test() {
  return (
    <div className="bg-red-500 text-white p-10 text-3xl">
      Tailwind is working
    </div>
  )
}*/