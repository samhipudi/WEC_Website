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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

export default function MissionPage() {
  const router = useRouter();
  const [aboutOpen, setAboutOpen] = React.useState(false);

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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold font-serif mb-8 text-center" style={{ color: '#2a2a2a' }}>
            WEC Overview: Mission, Vision, Values, and Distinction
          </h2>
          
          {/* Overview Section */}
          <div className="mb-16 text-center">
            <p className="text-xl mb-6" style={{ color: '#2a2a2a' }}>
              Women Executives Circle (WEC), phonetically read as &ldquo;We-See,&rdquo; is a peer-powered community built by women, for women, designed for senior executive leaders seeking trusted relationships and authentic connections.
            </p>
            <p className="text-xl mb-6" style={{ color: '#2a2a2a' }}>
              WEC brings together C-suite and executive-level leaders through State Chapters and Circles, each organized by cities or metros, as well as a national network — offering the best of both worlds: deep local connection and expansive national reach.
            </p>
            <p className="text-xl" style={{ color: '#2a2a2a' }}>
              Rooted in the spirit of &ldquo;We See,&rdquo; WEC is where women truly see, support, and uplift one another.
            </p>
          </div>

          {/* Vision Section */}
          <Card className="mb-12" style={{ backgroundColor: '#eee1c4', border: '2px solid #c9a961' }}>
            <CardHeader>
              <CardTitle className="text-3xl font-serif" style={{ color: '#2a2a2a' }}>Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg" style={{ color: '#2a2a2a' }}>
                To transform leadership for women at the top by redefining what community looks like. WEC envisions authentic circles across all 50 states, interwoven into a powerful national network where senior women executives are never isolated but always seen, supported, and uplifted.
              </p>
            </CardContent>
          </Card>

          {/* Mission Section */}
          <Card className="mb-12" style={{ backgroundColor: '#eee1c4', border: '2px solid #c9a961' }}>
            <CardHeader>
              <CardTitle className="text-3xl font-serif" style={{ color: '#2a2a2a' }}>Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg" style={{ color: '#2a2a2a' }}>
                To unite senior women executives in trusted circles rooted in Wisdom, Empowerment, and Connection. WEC fosters authentic, peer-powered relationships that provide support, advice, and inspiration, enabling women leaders to thrive personally and professionally while strengthening their collective impact.
              </p>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold font-serif mb-8 text-center" style={{ color: '#2a2a2a' }}>Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif" style={{ color: '#2a2a2a' }}>Wisdom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    We share experience and perspective to strengthen collective insight and better decision-making.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif" style={{ color: '#2a2a2a' }}>Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    We elevate one another through trust, accountability, and shared purpose.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif" style={{ color: '#2a2a2a' }}>Connection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    We build authentic relationships across industries and experiences so every woman feels seen, heard, and valued.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif" style={{ color: '#2a2a2a' }}>Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    We act with purpose and transparency, ensuring every interaction reflects respect and professionalism.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif" style={{ color: '#2a2a2a' }}>Reciprocity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    We give and receive in equal measure, sustaining the circle through mutual generosity.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif" style={{ color: '#2a2a2a' }}>Belonging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    We cultivate spaces where women can lead as their full selves — confident, imperfect, and whole.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center mt-8 text-lg" style={{ color: '#2a2a2a' }}>
              Together, these values guide how WEC members lead, listen, and support one another.
            </p>
          </div>

          {/* What Makes WEC Different Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold font-serif mb-8 text-center" style={{ color: '#2a2a2a' }}>What Makes WEC Different</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-serif" style={{ color: '#2a2a2a' }}>Grassroots and Peer-Powered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    Built locally and scaled nationally, WEC grows organically through authentic interest rather than top-down mandates.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-serif" style={{ color: '#2a2a2a' }}>Senior Leaders Only</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    Exclusive to C-suite and executive women, ensuring conversations remain strategic, relevant, and grounded in lived leadership experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-serif" style={{ color: '#2a2a2a' }}>Authentic Over Transactional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    No dues, sponsors, or hidden agendas.* Relationships are built on trust, not transactions.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-serif" style={{ color: '#2a2a2a' }}>Whole-Leader Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    A safe space to address both professional and personal dimensions of leadership, recognizing the whole person behind the title.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-serif" style={{ color: '#2a2a2a' }}>Visibility and Voice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    WEC amplifies the presence and influence of senior women leaders, ensuring they are seen, heard, and valued in every circle they enter.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-serif" style={{ color: '#2a2a2a' }}>Connection with Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    Structured frameworks such as Wins/Rose, Evolving/Bud, and Challenges/Thorns spark honest dialogue, while Give-Get fosters reciprocity so every member both contributes and benefits.
                  </p>
                </CardContent>
              </Card>
              
              <Card style={{ backgroundColor: '#e8dcc4', border: '1px solid #c9a961' }} className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl font-serif" style={{ color: '#2a2a2a' }}>Unified Yet Flexible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#2a2a2a' }}>
                    WEC is an informal, unincorporated, volunteer-based community. State Chapters and Circles operate under the shared WEC identity with light coordination and no financial activities, guided by collective trust and purpose.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-sm italic" style={{ color: '#2a2a2a' }}>
              *WEC currently operates without financial transactions. This may evolve in the future to support community needs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
