"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function ContactForm({ isHomePage = false }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   
  // Handle form submission
  const handleEnquiry = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    // ✅ Load from environment
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  
    try {
      // ✅ 1. WhatsApp message
      const waRes = await fetch("/api/send-wa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const waData = await waRes.json();
      if (!waRes.ok) throw new Error(waData?.error || "WhatsApp failed");
  
      // ✅ 2. Email via EmailJS
      const emailResponse = await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          event_date: formData.eventDate,
          message: formData.message,
        },
        publicKey
      );
  
      console.log("✅ EmailJS sent:", emailResponse.text);
  
      toast({
        title: "Enquiry Sent",
        description: "We’ll get back to you soon!",
      });
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        message: "",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={`bg-wedding-cream py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isHomePage && (
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-charcoal mb-6 animate-fade-up">
              Let's Capture Your Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-up">
              Ready to book your special day? Get in touch with us and let's
              discuss how we can make your wedding photography dreams come true.
            </p>
          </div>
        )}
        
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-up">
          <form onSubmit={handleEnquiry} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your special day, your vision, and any specific requirements..."
                className="mt-1"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-wedding-gold hover:bg-wedding-gold/90 text-white py-3 font-medium transition-all duration-300"
              >
                <Send className="h-4 w-4 mr-2" />
                {isLoading ? "Sending..." : "Send Message"}
              </Button>

              {/* <Button
                type="button"
                onClick={handleWhatsApp}
                variant="outline"
                className="flex-1 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white py-3 font-medium transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Button> */}
            </div>
          </form>
        </div>
      </div>
      {/* <form onSubmit={handleEnquiry} className="bg-wedding-cream py-20 max-w-7xl rounded-md mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><Label htmlFor="name">Name</Label><Input id="name" name="name" required value={formData.name} onChange={handleChange} /></div>
        <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" value={formData.phone} onChange={handleChange} /></div>
        <div><Label htmlFor="eventDate">Event Date</Label><Input id="eventDate" name="eventDate" type="date" value={formData.eventDate} onChange={handleChange} /></div>
      </div>
      <div><Label htmlFor="message">Message</Label><Textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} /></div>
      <div className="flex justify-center">
        <Button type="submit" disabled={isLoading} className="bg-wedding-gold text-white">
          <Send className="h-4 w-4 mr-2" />
          {isLoading ? "Sending..." : "Send Enquiry"}
        </Button>
      </div>
    </form> */}
    </div>
  );
}
