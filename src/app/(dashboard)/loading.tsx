import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%', 
      minHeight: '50vh', 
      width: '100%',
      flexDirection: 'column',
      gap: '1rem',
      color: 'var(--secondary-foreground)'
    }}>
      <Loader2 className="spinner" size={40} color="var(--primary)" />
      <p style={{ fontWeight: 500 }}>Loading...</p>
    </div>
  );
}
