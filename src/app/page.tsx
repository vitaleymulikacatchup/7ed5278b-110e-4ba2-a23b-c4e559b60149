"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, BarChart3, DollarSign, HelpCircle, MessageCircle, Package, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="CloudFlow"
          button={{
            text: "Start Free Trial",
            href: "https://cloudflow.com/signup"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Streamline Your Workflow with CloudFlow"
          description="The all-in-one SaaS platform that helps teams collaborate, manage projects, and scale their business with intelligent automation and powerful integrations."
          tag="New Release"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Free Trial",
              href: "https://cloudflow.com/signup"
            },
            {
              text: "Watch Demo",
              href: "https://cloudflow.com/demo"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="CloudFlow dashboard interface"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About CloudFlow"
          description={[
            "We're building the future of team collaboration with cutting-edge technology that adapts to your workflow.",
            "Trusted by over 10,000 companies worldwide, CloudFlow empowers teams to work smarter, not harder."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "https://cloudflow.com/about"
            },
            {
              text: "Start Trial",
              href: "https://cloudflow.com/signup"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Powerful Features for Modern Teams"
          description="Everything you need to manage projects, collaborate effectively, and scale your business"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "Real-time Collaboration",
              description: "Work together seamlessly with live editing, comments, and instant notifications across all devices",
              icon: Users,
              button: {
                text: "Learn More",
                href: "https://cloudflow.com/features/collaboration"
              }
            },
            {
              title: "Advanced Analytics",
              description: "Get detailed insights into team performance, project progress, and business metrics with beautiful dashboards",
              icon: BarChart3,
              button: {
                text: "View Demo",
                href: "https://cloudflow.com/demo/analytics"
              }
            },
            {
              title: "Smart Automation",
              description: "Automate repetitive tasks, set up custom workflows, and integrate with 100+ popular tools",
              icon: Zap,
              button: {
                text: "Explore",
                href: "https://cloudflow.com/features/automation"
              }
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="CloudFlow Product Suite"
          description="Comprehensive solutions designed for teams of all sizes"
          tag="Products"
          tagIcon={Package}
          products={[
            {
              id: "1",
              brand: "CloudFlow",
              name: "Project Dashboard",
              price: "Free",
              rating: 5,
              reviewCount: "4.2k",
              imageSrc: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "CloudFlow project dashboard interface"
            },
            {
              id: "2",
              brand: "CloudFlow",
              name: "Mobile App",
              price: "Included",
              rating: 5,
              reviewCount: "3.8k",
              imageSrc: "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "CloudFlow mobile application"
            },
            {
              id: "3",
              brand: "CloudFlow",
              name: "Integrations Hub",
              price: "Pro Plan",
              rating: 5,
              reviewCount: "2.9k",
              imageSrc: "https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "CloudFlow integrations hub"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Plan"
          description="Flexible pricing that grows with your team and business needs"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              price: "Free",
              name: "Starter",
              buttons: [
                {
                  text: "Get Started",
                  href: "https://cloudflow.com/signup"
                },
                {
                  text: "Learn More",
                  href: "https://cloudflow.com/pricing/starter"
                }
              ],
              features: [
                "Up to 3 team members",
                "5GB storage",
                "Basic project management",
                "Email support",
                "Mobile app access"
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$19/month",
              name: "Business",
              buttons: [
                {
                  text: "Start Trial",
                  href: "https://cloudflow.com/trial"
                },
                {
                  text: "Contact Sales",
                  href: "https://cloudflow.com/sales"
                }
              ],
              features: [
                "Up to 25 team members",
                "100GB storage",
                "Advanced analytics",
                "Priority support",
                "Custom integrations",
                "Automated workflows"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Trusted by Teams Worldwide"
          description="Join thousands of companies that rely on CloudFlow to power their success"
          tag="Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "10K+",
              description: "Active Companies"
            },
            {
              id: "2",
              value: "99.9%",
              description: "Uptime Guarantee"
            },
            {
              id: "3",
              value: "50+",
              description: "Countries Served"
            },
            {
              id: "4",
              value: "24/7",
              description: "Expert Support"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Leadership Team"
          description="Experienced leaders dedicated to building the future of work"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO & Co-founder",
              description: "Former VP of Engineering at Atlassian. 15 years building products that scale to millions of users.",
              imageSrc: "https://images.pexels.com/photos/7959794/pexels-photo-7959794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson, CEO",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/sarahjohnson"
                },
                {
                  icon: "Twitter",
                  url: "https://twitter.com/sarahjohnson"
                }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO & Co-founder",
              description: "Previously Tech Lead at Google. Passionate about building scalable, secure cloud infrastructure.",
              imageSrc: "https://images.pexels.com/photos/34389927/pexels-photo-34389927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen, CTO",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/michaelchen"
                },
                {
                  icon: "Github",
                  url: "https://github.com/michaelchen"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from teams using CloudFlow every day"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Emily Rodriguez",
              role: "Product Manager at TechFlow",
              testimonial: "CloudFlow transformed how our team collaborates. We've increased productivity by 40% and reduced project delivery time by 3 weeks on average.",
              imageSrc: "https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "2",
              name: "David Kim",
              role: "Engineering Director at DataSync",
              testimonial: "The automation features are incredible. What used to take hours of manual work now happens automatically. Our team can focus on what really matters.",
              imageSrc: "https://images.pexels.com/photos/8815929/pexels-photo-8815929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "CEO at StartupHub",
              testimonial: "As a fast-growing startup, we needed a platform that could scale with us. CloudFlow has been that solution - reliable, intuitive, and constantly improving.",
              imageSrc: "https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Thompson"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Operations Manager at ScaleCorp",
              testimonial: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions that have improved our ROI by 35%.",
              imageSrc: "https://images.pexels.com/photos/7109087/pexels-photo-7109087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that trust CloudFlow to power their workflows"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4744755/pexels-photo-4744755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about CloudFlow"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How does the free trial work?",
              content: "You get full access to all Business plan features for 14 days, no credit card required. You can invite your team, set up projects, and explore all integrations during your trial period."
            },
            {
              id: "2",
              title: "Can I change plans anytime?",
              content: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll only pay the prorated difference."
            },
            {
              id: "3",
              title: "What integrations do you support?",
              content: "We support over 100 integrations including Slack, Google Workspace, Microsoft 365, Salesforce, Jira, GitHub, and many more. Our API also allows custom integrations."
            },
            {
              id: "4",
              title: "Is my data secure?",
              content: "Absolutely. We use enterprise-grade encryption, SOC 2 Type II compliance, and regular security audits. Your data is backed up daily and stored in secure, redundant data centers."
            },
            {
              id: "5",
              title: "Do you offer customer support?",
              content: "Yes! All plans include email support. Business plans get priority support with faster response times. We also have extensive documentation and video tutorials."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Started with CloudFlow Today"
          description="Ready to transform how your team works? Contact us to learn more or start your free trial."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Work Email",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "teamSize",
              type: "text",
              placeholder: "Team Size",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your needs...",
            rows: 4,
            required: false
          }}
          buttonText="Get Started"
          imageSrc="https://images.pexels.com/photos/8867231/pexels-photo-8867231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="CloudFlow customer success team"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="CloudFlow"
          columns={[
            {
              items: [
                {
                  label: "Features",
                  href: "https://cloudflow.com/features"
                },
                {
                  label: "Pricing",
                  href: "https://cloudflow.com/pricing"
                },
                {
                  label: "Integrations",
                  href: "https://cloudflow.com/integrations"
                },
                {
                  label: "API",
                  href: "https://cloudflow.com/api"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "https://cloudflow.com/about"
                },
                {
                  label: "Careers",
                  href: "https://cloudflow.com/careers"
                },
                {
                  label: "Press",
                  href: "https://cloudflow.com/press"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Help Center",
                  href: "https://support.cloudflow.com"
                },
                {
                  label: "Documentation",
                  href: "https://docs.cloudflow.com"
                },
                {
                  label: "Status",
                  href: "https://status.cloudflow.com"
                },
                {
                  label: "Security",
                  href: "https://cloudflow.com/security"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "https://cloudflow.com/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "https://cloudflow.com/terms"
                },
                {
                  label: "Cookie Policy",
                  href: "https://cloudflow.com/cookies"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}