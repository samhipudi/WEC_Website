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

export default function LeadershipCirclePage() {
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
          <h2 className="text-5xl font-bold font-serif mb-8 text-center" style={{ color: '#2a2a2a' }}>Leadership Circle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Leadership Team Member 1 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/leadership/jane-smith')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                  alt="Jane Smith"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Jane Smith</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Leadership Team Member 2 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/leadership/sarah-johnson')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
                  alt="Sarah Johnson"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">Chief Operating Officer</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Leadership Team Member 3 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/leadership/maria-garcia')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
                  alt="Maria Garcia"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Maria Garcia</h3>
              <p className="text-gray-600 mb-2">Chief Financial Officer</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Leadership Team Member 4 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/leadership/emily-chen')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&fit=crop&crop=face"
                  alt="Emily Chen"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Emily Chen</h3>
              <p className="text-gray-600 mb-2">Chief Marketing Officer</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Leadership Team Member 5 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/leadership/lisa-williams')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1594746769112-8455f8ccc663?w=400&h=400&fit=crop&crop=face"
                  alt="Lisa Williams"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Lisa Williams</h3>
              <p className="text-gray-600 mb-2">Chief Technology Officer</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Leadership Team Member 6 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/leadership/amanda-thompson')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1554156778-3007bcf53e43?w=400&h=400&fit=crop&crop=face"
                  alt="Amanda Thompson"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Amanda Thompson</h3>
              <p className="text-gray-600 mb-2">Chief Human Resources Officer</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Leadership Team Member 7 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/leadership/rachel-davis')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face"
                  alt="Rachel Davis"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Rachel Davis</h3>
              <p className="text-gray-600 mb-2">Chief Legal Officer</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Leadership Team Member 8 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/leadership/nicole-martinez')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&crop=face"
                  alt="Nicole Martinez"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Nicole Martinez</h3>
              <p className="text-gray-600 mb-2">Chief Strategy Officer</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
