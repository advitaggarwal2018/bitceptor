import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServiceOverview() {
  const services = [
    {
      title: "IT Services & Solutions",
      description:
        "Comprehensive technology solutions for businesses of all sizes",
      href: "/offerings",
      buttonText: "Explore Offerings",
      accentColor: "blue",
      gradientFrom: "from-blue-50",
      gradientTo: "to-blue-100",
      borderColor: "border-l-blue-500",
    },
    {
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence capabilities to transform your business",
      href: "/ai-solutions",
      buttonText: "Discover AI",
      accentColor: "purple",
      gradientFrom: "from-purple-50",
      gradientTo: "to-purple-100",
      borderColor: "border-l-purple-500",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card
                key={service.href}
                className={`flex flex-col border-l-4 ${service.borderColor} bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} hover:shadow-lg transition-shadow duration-300`}
              >
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1" />
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={service.href}>{service.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}