function Fix-SearchParams {
    param ($path)
    $content = Get-Content -Raw $path
    # Replace synchronous access with awaited access
    $content = $content -replace '(?s)export default async function \w+Page\(\{ searchParams \}: \{ searchParams: \{ q\?: string \} \}\) \{\s*const q = searchParams\.q \|\| "";', 'export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const q = params.q || "";'
    
    # Actually wait, we need to extract the component name.
    $content = [regex]::Replace($content, 'export default async function (\w+)Page\(\{ searchParams \}: \{ searchParams: \{ q\?: string \} \}\) \{', 'export default async function ({ searchParams }: { searchParams: Promise<{ q?: string }> }) {')
    $content = [regex]::Replace($content, '  const q = searchParams\.q \|\| "";', '  const params = await searchParams;
  const q = params.q || "";')
    
    Set-Content -Path $path -Value $content -NoNewline
    Write-Host "Fixed $path"
}

Fix-SearchParams "src\app\(dashboard)\claims\page.tsx"
Fix-SearchParams "src\app\(dashboard)\dealers\page.tsx"
Fix-SearchParams "src\app\(dashboard)\companies\page.tsx"
Fix-SearchParams "src\app\(dashboard)\batches\page.tsx"
Fix-SearchParams "src\app\(dashboard)\deliveries\page.tsx"
