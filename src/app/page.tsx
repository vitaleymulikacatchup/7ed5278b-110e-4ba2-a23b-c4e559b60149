"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Award, BarChart3, DollarSign, MessageCircle, Package, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Webild"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Build Something Amazing Today"
          description="Transform your ideas into reality with our powerful platform designed for modern businesses and creators."
          tag="New Platform"
          tagIcon={Sparkles}
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern workspace technology"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We empower teams to create exceptional digital experiences through innovative solutions and cutting-edge technology"
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Get Started", href: "contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Powerful Features"
          description="Discover the tools and capabilities that make our platform stand out"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "Advanced Analytics",
              description: "Get detailed insights into your business performance with real-time data and comprehensive reporting",
              icon: BarChart3,
              button: { text: "Learn More", href: "features" }
            },
            {
              title: "Real-time Collaboration",
              description: "Work together seamlessly with your team using our integrated collaboration tools and shared workspaces",
              icon: Users,
              button: { text: "Try Now", href: "contact" }
            },
            {
              title: "Smart Automation",
              description: "Streamline your workflow with intelligent automation that adapts to your business processes",
              icon: Zap,
              button: { text: "Discover", href: "features" }
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Products"
          description="Explore our premium solutions designed for modern businesses"
          tag="Products"
          tagIcon={Package}
          products={[
            {
              id: "1",
              brand: "Webild Pro",
              name: "Business Suite",
              price: "$99/month",
              rating: 5,
              reviewCount: "2.3k",
              imageSrc: "https://images.pexels.com/photos/8000536/pexels-photo-8000536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Business Suite product interface"
            },
            {
              id: "2",
              brand: "Webild Enterprise",
              name: "Enterprise Solution",
              price: "$299/month",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/17614477/pexels-photo-17614477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Enterprise Solution product interface"
            },
            {
              id: "3",
              brand: "Webild Starter",
              name: "Starter Package",
              price: "$29/month",
              rating: 4,
              reviewCount: "5.2k",
              imageSrc: "https://images.pexels.com/photos/8000536/pexels-photo-8000536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Starter Package product interface"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Plan"
          description="Select the perfect plan that fits your needs and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Starter Plan",
              badgeIcon: Sparkles,
              price: "$29/month",
              subtitle: "Perfect for individuals and small teams",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "pricing" }
              ],
              features: [
                "Up to 5 team members",
                "10GB storage",
                "Basic analytics",
                "Email support"
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$99/month",
              subtitle: "Ideal for growing businesses",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Chat to Sales", href: "contact" }
              ],
              features: [
                "Up to 25 team members",
                "100GB storage",
                "Advanced analytics",
                "Priority support",
                "API access"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Impact"
          description="Key metrics that showcase our growth and success"
          tag="Stats"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              description: "Active Users Worldwide"
            },
            {
              id: "2",
              value: "99.9%",
              description: "Uptime Guarantee"
            },
            {
              id: "3",
              value: "150+",
              description: "Countries Served"
            },
            {
              id: "4",
              value: "24/7",
              description: "Customer Support"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The talented people behind our success"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO & Founder",
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from our valued customers"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Emily Rodriguez",
              role: "Marketing Director at TechCorp",
              testimonial: "This platform has revolutionized how we manage our projects. The intuitive interface and powerful features have increased our productivity by 40%.",
              imageSrc: "https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "2",
              name: "David Kim",
              role: "Product Manager at InnovateLab",
              testimonial: "The customer support is outstanding and the platform delivers exactly what it promises. Our team couldn't be happier with the results.",
              imageSrc: "https://images.pexels.com/photos/8815929/pexels-photo-8815929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "CEO at StartupXYZ",
              testimonial: "We've tried many solutions, but this one stands out. The attention to detail and commitment to excellence is evident in every feature.",
              imageSrc: "https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Thompson"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Operations Director at GrowthCo",
              testimonial: "The analytics and reporting features have given us insights we never had before. It's been a game-changer for our business decisions.",
              imageSrc: "https://images.pexels.com/photos/7109087/pexels-photo-7109087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that trust our platform"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>
    </ThemeProvider>
  );
}