export default function Loading () {
    return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        <p className="text-muted-foreground mt-4">Loading...</p>
    </div>

    );
}