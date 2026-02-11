import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LiveChatButton() {
  // Placeholder WhatsApp number - replace with actual number when available
  const whatsappNumber = '919999999999'; // Format: country code + number without + or spaces
  const greeting = encodeURIComponent('Welcome to GARUDAYA! How can we help you grow today?');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${greeting}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-accent shadow-premium transition-all hover:bg-accent/90 hover:shadow-premium-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
}
