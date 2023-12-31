import AboutPageSection from "@/page-modules/about/AboutPageSection";

export default function AboutPage() {
    return (
        <section className="container grid gap-6 pb-8 pt-6 md:py-10 h-screen">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                    Hi, I&apos;m Anushka
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                    Psychologist
                </p>
            </div>
        </section>
    )
}