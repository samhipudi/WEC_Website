import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

interface LeadershipMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
  linkedin?: string;
}

const leadershipData: Record<string, LeadershipMember> = {
  'jane-smith': {
    name: 'Jane Smith',
    title: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    bio: `Jane Smith is the visionary founder and CEO of Women Executives Circle (WEC). With over 25 years of executive leadership experience in Fortune 500 companies, Jane recognized the critical need for authentic peer connections among senior women executives.

Prior to founding WEC, Jane served as CEO of three major technology companies, where she consistently broke barriers as one of the few women in C-suite positions. Her leadership philosophy centers on collaborative empowerment and creating spaces where women can thrive authentically.

Jane holds an MBA from Harvard Business School and a BA in Economics from Stanford University. She is a frequent speaker at leadership conferences and has been recognized as one of Forbes' "Top 50 Women in Tech" for three consecutive years.

Under Jane's leadership, WEC has grown from a small local gathering to a nationwide network with chapters across the United States. Her commitment to fostering genuine connections and providing strategic support for women leaders continues to drive WEC's mission and expansion.`,
    email: 'jane.smith@womensexecutivescircle.org',
    linkedin: 'https://linkedin.com/in/janesmith'
  },
  'sarah-johnson': {
    name: 'Sarah Johnson',
    title: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    bio: `Sarah Johnson brings extensive operational expertise to her role as Chief Operating Officer at WEC. With 20 years of experience scaling organizations and optimizing complex systems, Sarah ensures that WEC's national network operates seamlessly and efficiently.

Before joining WEC, Sarah was COO at a global consulting firm where she managed operations across 15 countries. She is known for her ability to translate strategic vision into operational excellence while maintaining the human touch that makes organizations thrive.

Sarah holds an MBA from Wharton School of Business and a BS in Industrial Engineering from Georgia Tech. She is passionate about creating systems that support human connection and has pioneered several innovative approaches to virtual and hybrid community building.

At WEC, Sarah oversees all chapter operations, technology infrastructure, and member experience initiatives. Her data-driven approach combined with deep empathy for member needs has been instrumental in WEC's successful expansion.`,
    email: 'sarah.johnson@womensexecutivescircle.org',
    linkedin: 'https://linkedin.com/in/sarahjohnson'
  },
  'maria-garcia': {
    name: 'Maria Garcia',
    title: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    bio: `Maria Garcia serves as Chief Financial Officer at WEC, bringing over 18 years of financial leadership experience in both corporate and nonprofit sectors. Her expertise in financial strategy and sustainable growth models has been crucial to WEC's development.

Maria previously held CFO positions at two major nonprofit organizations where she successfully led financial turnarounds and implemented sustainable funding models. She is passionate about financial literacy and empowering women leaders with the financial acumen needed for executive success.

A certified public accountant, Maria holds an MBA from the University of Chicago Booth School of Business and a BS in Accounting from the University of Texas at Austin. She is also a certified financial planner and regularly conducts financial workshops for WEC members.

Maria's innovative approach to financial management has helped WEC maintain its commitment to accessibility while building a foundation for sustainable growth. Her work ensures that WEC can continue to serve its mission without compromising its values.`,
    email: 'maria.garcia@womensexecutivescircle.org'
  },
  'emily-chen': {
    name: 'Emily Chen',
    title: 'Chief Marketing Officer',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&fit=crop&crop=face',
    bio: `Emily Chen leads marketing and communications as Chief Marketing Officer at WEC. With 15 years of experience in brand strategy and digital marketing, Emily has been instrumental in building WEC's brand presence and expanding its reach to women executives nationwide.

Before joining WEC, Emily was VP of Marketing at a leading professional development company where she launched award-winning campaigns that reached over 2 million professionals. She specializes in community-driven marketing and has a deep understanding of how to build authentic brand connections.

Emily holds an MA in Communications from Stanford University and a BA in Marketing from UCLA. She is a frequent contributor to marketing publications and speaks regularly on building authentic communities through digital channels.

At WEC, Emily oversees all marketing initiatives, member communications, and brand strategy. Her innovative approach to community marketing has helped WEC grow organically while maintaining the authentic, peer-powered culture that makes it unique.`,
    email: 'emily.chen@womensexecutivescircle.org'
  },
  'lisa-williams': {
    name: 'Lisa Williams',
    title: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1594746769112-8455f8ccc663?w=400&h=400&fit=crop&crop=face',
    bio: `Lisa Williams serves as Chief Technology Officer at WEC, bringing over 20 years of technology leadership experience. Her expertise in building scalable platforms and fostering digital communities has been essential to WEC's growth and member experience.

Lisa previously led technology teams at three major tech startups, helping scale them from early-stage to enterprise-level operations. She is passionate about using technology to facilitate human connection rather than replace it.

A graduate of MIT with a degree in Computer Science, Lisa also holds an MBA from Stanford. She is a recognized expert in community technology and has spoken at numerous conferences about building digital platforms that support authentic human connections.

At WEC, Lisa oversees all technology infrastructure, platform development, and digital member experience. Her commitment to creating intuitive, human-centered technology has resulted in platforms that truly serve the needs of WEC's diverse membership.`,
    email: 'lisa.williams@womensexecutivescircle.org'
  },
  'amanda-thompson': {
    name: 'Amanda Thompson',
    title: 'Chief Human Resources Officer',
    image: 'https://images.unsplash.com/photo-1554156778-3007bcf53e43?w=400&h=400&fit=crop&crop=face',
    bio: `Amanda Thompson leads human resources and organizational development as Chief Human Resources Officer at WEC. With 22 years of HR leadership experience, Amanda has been crucial in developing the frameworks and culture that make WEC's chapters thrive.

Before joining WEC, Amanda was CHRO at a global professional services firm where she pioneered innovative approaches to distributed team management and virtual community building. She is known for her ability to create inclusive cultures that span geographical boundaries.

Amanda holds an MS in Organizational Psychology from Columbia University and a BA in Human Resources from Cornell. She is certified in executive coaching and regularly works with WEC members on leadership development and team dynamics.

At WEC, Amanda oversees chapter development, leadership training, and organizational culture initiatives. Her work ensures that WEC maintains its commitment to authentic connection while scaling across the country.`,
    email: 'amanda.thompson@womensexecutivescircle.org'
  },
  'rachel-davis': {
    name: 'Rachel Davis',
    title: 'Chief Legal Officer',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
    bio: `Rachel Davis serves as Chief Legal Officer at WEC, bringing extensive legal expertise in nonprofit governance and organizational law. With 18 years of experience, Rachel ensures that WEC operates with integrity while maintaining its innovative, peer-powered structure.

Rachel previously was General Counsel at a national nonprofit network where she navigated complex regulatory environments while preserving organizational autonomy. She specializes in nonprofit law and has helped numerous organizations balance compliance with flexibility.

A graduate of Yale Law School, Rachel also holds a BA in Political Science from Princeton. She is a frequent speaker on nonprofit governance and has published several articles on innovative legal structures for community organizations.

At WEC, Rachel oversees all legal matters, governance, and compliance. Her work ensures that WEC can maintain its unique structure while operating responsibly and transparently.`,
    email: 'rachel.davis@womensexecutivescircle.org'
  },
  'nicole-martinez': {
    name: 'Nicole Martinez',
    title: 'Chief Strategy Officer',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&crop=face',
    bio: `Nicole Martinez leads strategic planning and development as Chief Strategy Officer at WEC. With 20 years of experience in organizational strategy and growth consulting, Nicole has been instrumental in shaping WEC's expansion roadmap and long-term vision.

Before joining WEC, Nicole was a partner at a leading strategy consulting firm where she advised Fortune 500 companies on growth initiatives and organizational transformation. She brings a wealth of experience in scaling organizations while maintaining culture and authenticity.

Nicole holds an MBA from Northwestern Kellogg School of Management and a BA in Business Administration from USC. She is a recognized expert in community strategy and has helped numerous organizations develop sustainable growth models.

At WEC, Nicole oversees strategic planning, expansion initiatives, and partnership development. Her data-driven approach combined with deep understanding of community dynamics has been crucial to WEC's successful national expansion.`,
    email: 'nicole.martinez@womensexecutivescircle.org'
  }
};

export default function LeadershipBioPage() {
  const router = useRouter();
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const { slug } = router.query;
  
  const member = slug ? leadershipData[slug as string] : null;

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
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#2a2a2a' }}>Leadership Member Not Found</h2>
            <Button onClick={() => router.push('/leadership-circle')}>
              Back to Leadership Circle
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
          <a href="/" className="hover:text-primary">Home</a>
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
          <a href="/events" className="hover:text-primary">Events</a>
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
            onClick={() => router.push('/leadership-circle')}
            className="flex items-center gap-2 mb-8 text-lg font-medium hover:underline"
            style={{ color: '#c9a961' }}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Leadership Circle
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
