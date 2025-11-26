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

export default function AdvisorsCirclePage() {
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
          <h2 className="text-5xl font-bold font-serif mb-8 text-center" style={{ color: '#2a2a2a' }}>Advisors Circle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Advisor 1 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/advisors/patricia-anderson')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face"
                  alt="Patricia Anderson"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Patricia Anderson</h3>
              <p className="text-gray-600 mb-2">Strategic Advisor</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Advisor 2 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/advisors/robert-chen')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Robert Chen"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Robert Chen</h3>
              <p className="text-gray-600 mb-2">Technology Advisor</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Advisor 3 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/advisors/susan-mitchell')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
                  alt="Susan Mitchell"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Susan Mitchell</h3>
              <p className="text-gray-600 mb-2">Financial Advisor</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Advisor 4 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/advisors/jennifer-taylor')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                  alt="Jennifer Taylor"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Jennifer Taylor</h3>
              <p className="text-gray-600 mb-2">Marketing Advisor</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Advisor 5 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/advisors/david-wilson')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                  alt="David Wilson"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>David Wilson</h3>
              <p className="text-gray-600 mb-2">Legal Advisor</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Advisor 6 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/advisors/linda-brown')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1554156778-3007bcf53e43?w=400&h=400&fit=crop&crop=face"
                  alt="Linda Brown"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Linda Brown</h3>
              <p className="text-gray-600 mb-2">HR Advisor</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Advisor 7 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/advisors/michael-jackson')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                  alt="Michael Jackson"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Michael Jackson</h3>
              <p className="text-gray-600 mb-2">Operations Advisor</p>
              <button className="text-sm font-medium hover:underline" style={{ color: '#c9a961' }}>
                Read More →
              </button>
            </div>

            {/* Advisor 8 */}
            <div className="text-center group cursor-pointer" onClick={() => router.push('/advisors/karen-white')}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face"
                  alt="Karen White"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#2a2a2a' }}>Karen White</h3>
              <p className="text-gray-600 mb-2">Education Advisor</p>
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
