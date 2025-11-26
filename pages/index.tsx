import { Button } from '@/components/ui/button';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { createSupabaseComponentClient } from '@/utils/supabase/clients/component';
import { Profile } from '@/server/models/profile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import USMap from '@/components/USMap';

export default function HomePage() {
  const router = useRouter();
  const supabase = createSupabaseComponentClient();
  const [profile, setProfile] = React.useState<Profile | null>(null);
  const [aboutOpen, setAboutOpen] = React.useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  React.useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(profileData);
      }
    };

    fetchProfile();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          fetchProfile();
        } else if (event === 'SIGNED_OUT') {
          setProfile(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase, router]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-border flex items-center justify-between px-12 py-6" style={{ backgroundColor: '#eee1c4' }}>
        <div className="flex items-center gap-3">
          <Image src="/images/Blank Logo.png?v=4" alt="WEC Logo" width={100} height={100} className="object-contain" />
          <h1 className="text-2xl font-bold font-serif tracking-wide" style={{ color: '#2a2a2a' }}>Women Executives Circle</h1>
        </div>
        <nav className="flex items-center gap-8 text-2xl font-medium" style={{ color: '#2a2a2a' }}>
          <DropdownMenu open={aboutOpen} onOpenChange={setAboutOpen}>
            <DropdownMenuTrigger className="cursor-pointer flex items-center gap-1" style={{ color: '#2a2a2a' }} onMouseEnter={(e) => e.currentTarget.style.color = '#8b7355'} onMouseLeave={(e) => e.currentTarget.style.color = '#2a2a2a'}>
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
        <div>
          {profile ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{profile.full_name}</span>
              <Avatar>
                {profile.avatar_url && <AvatarImage src={profile.avatar_url} />}
                <AvatarFallback>{profile.full_name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button onClick={handleSignOut} variant="outline">
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button onClick={() => router.push('/auth/login')} size="lg" className="px-12 py-7 text-xl" style={{ backgroundColor: 'transparent', color: '#2a2a2a', border: '2px solid #c9a961' }}>
                Log In
              </Button>
              <Button onClick={() => router.push('/auth/signup')} size="lg" className="px-12 py-7 text-xl">
                Apply
              </Button>
            </div>
          )}
        </div>
      </header>

      <main>
        <section
          className="relative flex items-center justify-center h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
          <div className="absolute inset-0 bg-background opacity-50"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-7xl font-bold font-serif leading-tight">WEC</h2>
            <p className="mt-6 max-w-3xl text-3xl text-foreground/90">
              To unite senior women executives in trusted circles rooted in Wisdom, Empowerment, and Connection.
            </p>
            <Button size="lg" className="mt-12 px-16 py-8 text-2xl font-bold">
              Become a Member
            </Button>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-12">
            <h3 className="text-4xl font-bold font-serif text-center mb-12" style={{ color: '#f5f5f5' }}>
              Our Chapters Across the Nation
            </h3>
            <USMap
              pins={[
                { city: 'New York', state: 'NY', coordinates: [-74.006, 40.7128] },
                { city: 'Los Angeles', state: 'CA', coordinates: [-118.2437, 34.0522] },
                { city: 'Chicago', state: 'IL', coordinates: [-87.6298, 41.8781] },
                { city: 'Houston', state: 'TX', coordinates: [-95.3698, 29.7604] },
                { city: 'Miami', state: 'FL', coordinates: [-80.1918, 25.7617] },
                { city: 'Seattle', state: 'WA', coordinates: [-122.3321, 47.6062] },
                { city: 'Boston', state: 'MA', coordinates: [-71.0589, 42.3601] },
                { city: 'Atlanta', state: 'GA', coordinates: [-84.388, 33.749] },
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}