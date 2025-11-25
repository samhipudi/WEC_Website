/**
 * Home page template.
 */

import { Home, Heart, Plus, MapPin, Search, Bot, Send, Bookmark } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';
import { createSupabaseComponentClient } from '@/utils/supabase/clients/component';
import { useRouter } from 'next/router';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Profile } from '@/server/models/profile';


export default function HomePage() {
  const router = useRouter();
  const supabase = createSupabaseComponentClient();
  const [profile, setProfile] = React.useState<Profile | null>(null);

  React.useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
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

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        fetchProfile();
      } else if (event === 'SIGNED_OUT') {
        setProfile(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase, router]);

  // fill later with actual database posts
  const posts = [
    { id: 1, title: "Trip Title", location: "City, Country", likes: 0 },
    { id: 2, title: "Trip Title", location: "City, Country", likes: 0 },
    { id: 3, title: "Trip Title", location: "City, Country", likes: 0 },
    { id: 4, title: "Trip Title", location: "City, Country", likes: 0 },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* nav sidebar */}
      <Sidebar />

      {/* posts section */}
      <section className="flex flex-1 flex-col border-r bg-opacity-40 bg-card">
        <header className="flex items-center justify-between border-b px-6 py-4">
          <div className="text-sm text-muted-foreground">Home</div>
          {profile ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{profile.handle}</span>
              <Avatar>
                <AvatarImage src={profile.avatar_url} />
                <AvatarFallback>{profile.handle.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          ) : (
            <Button onClick={() => router.push('/login')}>
              Log In / Sign Up
            </Button>
          )}
        </header>
        
        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-8 pb-8 pt-4">
          {/* search bar */}
          <div className="flex items-center gap-2 rounded-md border bg-background px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search for itineraries"
              className="flex-1 bg-transparent text-sm outline-none"
            />
          </div>
          
          {/* posts grid */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Popular</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                location={post.location}
                likes={post.likes}
              />
            ))}
          </div>
        </div>
      </section>

      <Chatbot />
    </div>
  );
}

// nav sidebar component
function Sidebar() {
  return (
    <div className="flex h-full w-28 flex-col items-center border-r bg-opacity-80 bg-muted py-6">
      <div className="flex flex-col items-center gap-3">
        <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          Explore
        </div>
        <NavBubble icon={Home} label="Home" active />
        <NavBubble icon={Heart} label="Liked" />
        <NavBubble icon={Plus} label="Create" />
      </div>

      {/*Not implementing this functionality yet */}
      <div className="flex flex-col items-center gap-3 pt-6">
        <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          My Trips
        </div>
        <NavBubble icon={MapPin} label="Trip 1" />
        <NavBubble icon={MapPin} label="Trip 2" />
      </div>

      <div className="flex-1" />
    </div>
  );
}

type NavBubbleProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
};

function NavBubble({ icon: Icon, label, active = false }: NavBubbleProps) {
  return (
    <button
      type="button"
      title={label}
      className="flex flex-col items-center gap-1"
    >
      {/* nav button*/}
      <div className={`flex h-10 w-10 items-center justify-center rounded-full border transition 
        ${active ? "bg-primary text-primary-foreground border-transparent shadow-md" : "bg-background/80 text-muted-foreground border-border hover:bg-background"}`}>
        <Icon className="h-5 w-5" />
      </div>
      
      {/* label */}
      <span className={`text-[11px] ${active ? "text-foreground" : "text-muted-foreground"}`}>
        {label}
      </span>
    </button>
  );
}

// post card component
type PostCardProps = {
  title: string;
  location: string;
  likes: number;
};

function PostCard({ title, location, likes = 0 }: PostCardProps) {
  return (
    <Card className="bg-muted/60 shadow-sm">
      <CardHeader className="pb-3">
        <div className="relative h-28 rounded-md bg-muted/80">
          <button className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-opacity-80 bg-background shadow-sm">
            <Bookmark className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </CardHeader>

      <CardContent className="flex items-end justify-between">
        <div>
          <CardTitle className="text-base">{title}</CardTitle>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Heart className="h-4 w-4" />
          <span>{likes}</span>
        </div>
      </CardContent>
    </Card>
  );
}

// ai chatbot component
function Chatbot() {
  return (
    <div className="flex h-full w-80 flex-col bg-opacity-80 bg-muted">
      <header className="flex items-center gap-2 border-b px-6 py-4">
        <Bot className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Chat</h2>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <p className="text-sm text-muted-foreground">Messages will appear here</p>
      </div>

      <footer className="border-t px-4 py-3">
        <div className="flex items-center gap-2">
          <Input placeholder="Ask me anything!" className="flex-1" />
          <Button size="icon" className="rounded-full">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}