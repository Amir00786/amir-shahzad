import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { useToast } from "../../components/ui/use-toast"
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from "../../config/emailjs"

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

interface FormErrors {
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    message?: string
}

export const Contact = () => {
    const { toast } = useToast()
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required'
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required'
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format'
        }

        const phoneRegex = /^[0-9]{10,15}$/
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required'
        } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Invalid phone number (10-15 digits)'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            // Send email using EmailJS
            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message,
                to_email: 'amirshahzadvu91@gmail.com',
            }

            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            )

            toast({
                variant: "success",
                title: "Success!",
                description: "Your message has been sent successfully. We'll get back to you soon.",
            })

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            })
        } catch (error) {
            console.error('EmailJS Error:', error)
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to send message. Please try again or contact directly at amirshahzadvu91@gmail.com",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="md:py-20 sm:py-8 py-4" id="contact">
            <h1 className="text-3xl sm:mt-3 mt-20 md:text-5xl lg:mb-16 mb-8 uppercase font-extrabold text-transparent stroke-orange-500 stroke-[2px]">
                Get In Touch
            </h1>
            <div className="flex flex-col md:flex-row gap-x-4">
                <div className='2xl:w-1/3 md:w-1/2 w-full' data-aos="zoom-in-right" data-aos-duration="2000">
                    <div className="border-b md:border-b-0 mb-5 gap-y-5 md:gap-0 md:border-r border-orange-500 h-full flex flex-col justify-between pb-8 md:pr-8">
                        <div className='bg-white rounded-2xl p-4 lg:p-6'>
                            <div className='flex items-center gap-2 sm:gap-4'>
                                <div className='w-10 sm:w-12 h-10 sm:h-12 shrink-0 bg-orange-500 rounded-full flex items-center justify-center'>
                                    <Phone className="w-5 sm:w-6 h-5 sm:h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <a href="tel:+923076258337" className="text-sm sm:text-base lg:text-xl text-gray-500 font-bold hover:text-orange-500 transition-colors">+92 3076258337</a>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl p-4 lg:p-6'>
                            <div className='flex items-center gap-2 sm:gap-4'>
                                <div className='w-10 sm:w-12 h-10 sm:h-12 shrink-0 bg-orange-500 rounded-full flex items-center justify-center'>
                                    <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amirshahzadvu91@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base lg:text-xl text-gray-500 font-bold hover:text-orange-500 transition-colors break-all">amirshahzadvu91@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl p-4 lg:p-6'>
                            <div className='flex items-center gap-2 sm:gap-4'>
                                <div className='w-10 sm:w-12 h-10 sm:h-12 shrink-0 bg-orange-500 rounded-full flex items-center justify-center'>
                                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <strong className="text-sm sm:text-base lg:text-xl text-gray-500">
                                        Gujranwala, Punjab, Pakistan
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grow basis-0 min-w-0 mx-auto" data-aos="zoom-in-left" data-aos-duration="2000">
                    <form onSubmit={handleSubmit} className="border border-orange-500 rounded-md p-4 2xl:max-w-3xl mx-auto">
                        <div className="flex flex-wrap -mx-4 gap-y-4">
                            <div className="flex flex-col gap-y-2 w-full lg:w-1/2 px-4">
                                <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`border px-8 h-12 bg-transparent ${errors.firstName ? 'border-orange-500' : 'border-orange-500'} rounded-full p-2 focus:outline-none`}
                                />
                                <span className="text-orange-500 text-xs min-h-4 block">
                                    {errors.firstName || '\u00A0'}
                                </span>
                            </div>
                            <div className="flex flex-col gap-y-2 w-full lg:w-1/2 px-4">
                                <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`border px-8 h-12 bg-transparent ${errors.lastName ? 'border-orange-500' : 'border-orange-500'} rounded-full p-2 focus:outline-none`}
                                />
                                <span className="text-orange-500 text-xs min-h-4 block">
                                    {errors.lastName || '\u00A0'}
                                </span>
                            </div>
                            <div className="flex flex-col gap-y-2 w-full lg:w-1/2 px-4">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`border px-8 h-12 bg-transparent ${errors.email ? 'border-orange-500' : 'border-orange-500'} rounded-full p-2 focus:outline-none`}
                                />
                                <span className="text-orange-500 text-xs min-h-4 block">
                                    {errors.email || '\u00A0'}
                                </span>
                            </div>
                            <div className="flex flex-col gap-y-2 w-full lg:w-1/2 px-4">
                                <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`border px-8 h-12 bg-transparent ${errors.phone ? 'border-orange-500' : 'border-orange-500'} rounded-full p-2 focus:outline-none`}
                                />
                                <span className="text-orange-500 text-xs min-h-4 block">
                                    {errors.phone || '\u00A0'}
                                </span>
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col gap-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`border w-full resize-none px-8 h-32 bg-transparent ${errors.message ? 'border-orange-500' : 'border-orange-500'} rounded-md p-2 focus:outline-none`}
                            />
                            <span className="text-orange-500 text-xs min-h-4 block">
                                {errors.message || '\u00A0'}
                            </span>
                            <div className="w-full flex items-end justify-end mt-5">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-orange-500 text-white cursor-pointer sm:w-32 w-full h-12 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}