import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react"
import { useState } from "react"
import { useToast } from "../../components/ui/use-toast"

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

export const Contact = () => {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        firstName: '', lastName: '', email: '', phone: '', message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Formspree API call
            const response = await fetch('https://formspree.io/f/xwppwrgr', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                toast({ title: "Message Sent!", description: "I'll get back to you as soon as possible.", variant: "success" })
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
            } else {
                throw new Error()
            }
        } catch (error) {
            toast({ title: "Error", description: "Something went wrong. Please try again later.", variant: "destructive" })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="md:py-24 sm:py-16 py-10 bg-[#0a0a0a] relative overflow-hidden" id="contact">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left: Content & Info */}
                    <div data-aos="fade-right" className="t">
                        <div className="text-center md:text-left">
                            <span className="text-orange-500 font-mono tracking-[0.3em] uppercase text-xs mb-4 block">Get In Touch</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
                                Let's Work <br /> <span className="text-orange-500">Together.</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 text-lg w-full md:max-w-md mb-12">
                            Have a project in mind? Looking for a senior developer to join your team? Or just want to say hi? I'm always open to discussing new opportunities.
                        </p>

                        <div className="space-y-6 inline-flex flex-col">
                            <ContactInfo icon={<Mail />} label="Email" value="amirshahzadvu91@gmail.com" />
                            <ContactInfo icon={<Phone />} label="Call Me" value="+92 307 6358337" />
                            <ContactInfo icon={<MapPin />} label="Location" value="Gujranwala Punjab Pakistan" />
                        </div>
                    </div>

                    {/* Right: Modern Form */}
                    <div className="relative" data-aos="fade-left">
                        <div className="bg-neutral-900/50 border border-white/5 p-4 sm:p-8 rounded-2xl backdrop-blur-sm relative z-10">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <FormInput label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                    <FormInput label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                </div>
                                <FormInput label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
                                <FormInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-orange-500/50 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] disabled:opacity-70"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : (
                                        <>
                                            SEND MESSAGE
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

const ContactInfo = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="inline-flex items-center gap-5 group">
        <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
            {icon}
        </div>
        <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{label}</p>
            <p className="text-white font-medium">{value}</p>
        </div>
    </div>
)

const FormInput = ({ label, ...props }: any) => (
    <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">{label}</label>
        <input
            {...props}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-500/50 transition-all"
        />
    </div>
)