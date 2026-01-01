import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's Connect</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Ready to start your next project? We're here to help you succeed.
                </p>
            </div>
            <ContactForm />
        </div>
    );
}
