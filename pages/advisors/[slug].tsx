import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

interface AdvisorMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
  linkedin?: string;
}

const advisorsData: Record<string, AdvisorMember> = {
  'patricia-anderson': {
    name: 'Patricia Anderson',
    title: 'Strategic Advisor',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face',
    bio: `Patricia Anderson brings over 30 years of strategic consulting experience to her role as Strategic Advisor at WEC. As a former managing partner at a top-tier consulting firm, Patricia has advised Fortune 500 companies on organizational transformation and leadership development.

Her expertise in strategic planning and organizational design has been invaluable to WEC's growth and development. Patricia specializes in helping organizations scale while maintaining their core values and culture, a skill that has directly contributed to WEC's successful national expansion.

Patricia holds an MBA from Harvard Business School and a BA in Economics from Dartmouth College. She is a published author on strategic leadership and regularly contributes to business journals on topics of organizational growth and women's leadership.

As a strategic advisor to WEC, Patricia provides guidance on long-term planning, partnership development, and organizational structure. Her insights have helped shape WEC's approach to sustainable growth while maintaining the authentic, peer-powered culture that makes it unique.`,
    email: 'patricia.anderson@womensexecutivescircle.org',
    linkedin: 'https://linkedin.com/in/patriciaanderson'
  },
  'robert-chen': {
    name: 'Robert Chen',
    title: 'Technology Advisor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: `Robert Chen serves as Technology Advisor at WEC, bringing extensive experience in digital transformation and community technology platforms. As former CTO of a major social networking platform, Robert has deep expertise in building scalable digital communities.

His technical guidance has been crucial in developing WEC's digital infrastructure and ensuring that technology serves to enhance rather than replace human connection. Robert is passionate about creating technology that facilitates authentic relationships and community building.

Robert holds a PhD in Computer Science from MIT and an MS in Electrical Engineering from Stanford. He is a recognized expert in community technology and has spoken at numerous conferences about building digital platforms that support human connection.

As technology advisor, Robert helps WEC navigate the complex landscape of digital tools and platforms, ensuring that the organization leverages technology in ways that enhance the member experience while maintaining the personal touch that defines WEC's culture.`,
    email: 'robert.chen@womensexecutivescircle.org'
  },
  'susan-mitchell': {
    name: 'Susan Mitchell',
    title: 'Financial Advisor',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    bio: `Susan Mitchell provides financial advisory services to WEC, bringing over 25 years of experience in nonprofit finance and sustainable business models. As former CFO of a national foundation, Susan has deep expertise in financial strategy for mission-driven organizations.

Her guidance has been instrumental in helping WEC develop financial frameworks that support growth while maintaining accessibility and sustainability. Susan specializes in innovative funding models and financial planning for organizations transitioning from volunteer-based to structured operations.

Susan holds an MBA from the University of Chicago Booth School of Business and is a certified public accountant. She has served on the boards of several nonprofit organizations and is a recognized expert in nonprofit financial management.

As financial advisor, Susan helps WEC navigate complex financial decisions, plan for sustainable growth, and develop models that ensure long-term viability while staying true to the organization's mission of accessibility and inclusivity.`,
    email: 'susan.mitchell@womensexecutivescircle.org'
  },
  'jennifer-taylor': {
    name: 'Jennifer Taylor',
    title: 'Marketing Advisor',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    bio: `Jennifer Taylor serves as Marketing Advisor at WEC, bringing over 20 years of experience in brand strategy and community marketing. As former CMO of a major professional development company, Jennifer has deep expertise in building authentic brands that resonate with executive audiences.

Her strategic guidance has helped WEC develop its brand identity and expand its reach to women executives across the country. Jennifer specializes in community-driven marketing and has a proven track record of building brands through authentic engagement rather than traditional advertising.

Jennifer holds an MA in Marketing from Northwestern University and a BA in Communications from UCLA. She is a frequent speaker on community marketing and has published numerous articles on building authentic brands in the digital age.

As marketing advisor, Jennifer helps WEC develop strategies for organic growth, member engagement, and brand positioning. Her insights have been crucial in helping WEC expand its reach while maintaining the authentic, peer-powered culture that makes it unique.`,
    email: 'jennifer.taylor@womensexecutivescircle.org',
    linkedin: 'https://linkedin.com/in/jennifertaylor'
  },
  'david-wilson': {
    name: 'David Wilson',
    title: 'Legal Advisor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: `David Wilson provides legal advisory services to WEC, bringing extensive experience in nonprofit law and organizational governance. As former General Counsel of a national nonprofit network, David has deep expertise in the legal frameworks that support community-based organizations.

His guidance has been crucial in helping WEC navigate the complex legal landscape of operating as a volunteer-based, unincorporated community while ensuring compliance and good governance. David specializes in innovative legal structures that support community organizations.

David holds a JD from Yale Law School and a BA in Political Science from Princeton. He has advised numerous community organizations on legal matters and is a recognized expert in nonprofit governance and organizational law.

As legal advisor, David helps WEC ensure that its innovative structure operates within appropriate legal frameworks while maintaining the flexibility and autonomy that make it effective. His work helps protect both the organization and its members while enabling WEC to fulfill its mission.`,
    email: 'david.wilson@womensexecutivescircle.org'
  },
  'linda-brown': {
    name: 'Linda Brown',
    title: 'HR Advisor',
    image: 'https://images.unsplash.com/photo-1554156778-3007bcf53e43?w=400&h=400&fit=crop&crop=face',
    bio: `Linda Brown serves as HR Advisor at WEC, bringing over 22 years of experience in human resources and organizational development. As former CHRO of a global professional services firm, Linda has deep expertise in building inclusive cultures and developing leadership frameworks.

Her guidance has been instrumental in developing the frameworks and processes that support WEC's distributed leadership model. Linda specializes in creating systems that support authentic connection while ensuring effective operations across geographical boundaries.

Linda holds an MS in Organizational Psychology from Columbia University and a BA in Human Resources from Cornell. She is certified in executive coaching and has worked with numerous organizations on leadership development and team dynamics.

As HR advisor, Linda helps WEC develop leadership training programs, establish effective chapter operations, and create frameworks that support the organization's growth while maintaining its culture of authentic connection and mutual support.`,
    email: 'linda.brown@womensexecutivescircle.org'
  },
  'michael-jackson': {
    name: 'Michael Jackson',
    title: 'Operations Advisor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    bio: `Michael Jackson provides operations advisory services to WEC, bringing extensive experience in scaling operations for community-based organizations. As former COO of a national membership organization, Michael has deep expertise in building operational systems that support growth while maintaining community culture.

His guidance has been crucial in developing the operational frameworks that enable WEC to function effectively across multiple states while maintaining its volunteer-based, peer-powered culture. Michael specializes in creating systems that enhance rather than complicate community operations.

Michael holds an MBA from Stanford Graduate School of Business and a BS in Operations Management from MIT. He has helped numerous organizations scale their operations while maintaining their core values and community focus.

As operations advisor, Michael helps WEC develop efficient systems for chapter management, member onboarding, and organizational coordination. His work ensures that WEC can grow and operate effectively without losing the authentic, personal touch that defines its culture.`,
    email: 'michael.jackson@womensexecutivescircle.org'
  },
  'karen-white': {
    name: 'Karen White',
    title: 'Education Advisor',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
    bio: `Karen White serves as Education Advisor at WEC, bringing over 25 years of experience in educational program design and executive development. As former Dean of Executive Education at a major business school, Karen has deep expertise in creating learning experiences for senior executives.

Her guidance has been instrumental in developing WEC's frameworks for peer learning and knowledge sharing. Karen specializes in creating educational experiences that leverage collective wisdom and foster authentic learning communities.

Karen holds a PhD in Education from Harvard University and an MA in Organizational Learning from Stanford. She is a recognized expert in executive education and has developed numerous innovative programs for senior leaders.

As education advisor, Karen helps WEC design and refine its peer learning frameworks, develop leadership development resources, and create structures that facilitate knowledge sharing among members. Her work ensures that WEC provides meaningful opportunities for professional growth and learning while maintaining its peer-powered culture.`,
    email: 'karen.white@womensexecutivescircle.org',
    linkedin: 'https://linkedin.com/in/karenwhite'
  }
};

export default function AdvisorBioPage() {
  const router = useRouter();
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const { slug } = router.query;
  
  const member = slug ? advisorsData[slug as string] : null;

  if (!member) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <header className="border-b border-border flex items-center justify-between px-12 py-6" style={{ backgroundColor: '#eee1c4' }}>
          <div className="flex items-center gap-3">
            <Image src="/images/Blank Logo.png?v=4" alt="WEC Logo" width={100} height={100} className="object-contain" />
            <h1 className="text-2xl font-bold font-serif tracking-wide" style={{ color: '#2a2a2a' }}>Women Executives Circle</h1>
          </div>
        </header>
        <main className="container mx-auto px-12 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#2a2a2a' }}>Advisor Not Found</h2>
            <Button onClick={() => router.push('/advisors-circle')}>
              Back to Advisors Circle
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-border flex items-center justify-between px-12 py-6" style={{ backgroundColor: '#eee1c4' }}>
        <div className="flex items-center gap-3">
          <Image src="/images/Blank Logo.png?v=4" alt="WEC Logo" width={100} height={100} className="object-contain" />
          <h1 className="text-2xl font-bold font-serif tracking-wide" style={{ color: '#2a2a2a' }}>Women Executives Circle</h1>
        </div>
        <nav className="flex items-center gap-8 text-2xl font-medium" style={{ color: '#2a2a2a' }}>
          <Link href="/" className="hover:text-primary">Home</Link>
          <DropdownMenu open={aboutOpen} onOpenChange={setAboutOpen}>
            <DropdownMenuTrigger className="cursor-pointer flex items-center gap-1 font-bold" style={{ color: '#2a2a2a' }} onMouseEnter={(e) => e.currentTarget.style.color = '#8b7355'} onMouseLeave={(e) => e.currentTarget.style.color = '#2a2a2a'}>
              About Us
              <ChevronDown className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="min-w-[250px] p-2"
              style={{ backgroundColor: '#eee1c4', border: '2px solid #c9a961' }}
            >
              <DropdownMenuItem 
                onClick={() => router.push('/mission')}
                className="text-xl py-3 px-4 cursor-pointer hover:bg-[#d9c9a8] focus:bg-[#d9c9a8]"
                style={{ color: '#2a2a2a' }}
              >
                Mission
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => router.push('/leadership-circle')}
                className="text-xl py-3 px-4 cursor-pointer hover:bg-[#d9c9a8] focus:bg-[#d9c9a8]"
                style={{ color: '#2a2a2a' }}
              >
                Leadership Circle
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => router.push('/advisors-circle')}
                className="text-xl py-3 px-4 cursor-pointer hover:bg-[#d9c9a8] focus:bg-[#d9c9a8]"
                style={{ color: '#2a2a2a' }}
              >
                Advisors Circle
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/events" className="hover:text-primary">Events</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button onClick={() => router.push('/auth/login')} size="lg" className="px-12 py-7 text-xl" style={{ backgroundColor: 'transparent', color: '#2a2a2a', border: '2px solid #c9a961' }}>
            Log In
          </Button>
          <Button onClick={() => router.push('/auth/signup')} size="lg" className="px-12 py-7 text-xl">
            Apply
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-12 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => router.push('/advisors-circle')}
            className="flex items-center gap-2 mb-8 text-lg font-medium hover:underline"
            style={{ color: '#c9a961' }}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Advisors Circle
          </button>

          {/* Member Profile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <Image 
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full rounded-lg shadow-lg object-cover"
                />
                <div className="mt-6 text-center">
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#2a2a2a' }}>{member.name}</h2>
                  <p className="text-lg text-gray-600 mb-4">{member.title}</p>
                  <div className="space-y-2">
                    <a 
                      href={`mailto:${member.email}`}
                      className="block text-sm hover:underline"
                      style={{ color: '#c9a961' }}
                    >
                      {member.email}
                    </a>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm hover:underline"
                        style={{ color: '#c9a961' }}
                      >
                        LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-lg leading-relaxed" style={{ color: '#2a2a2a' }}>
                  {member.bio}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
