function Add-SerialNumber {
    param ($path, $regex, $replacement)
    $content = Get-Content -Raw $path
    $content = [regex]::Replace($content, $regex, $replacement)
    Set-Content -Path $path -Value $content -NoNewline
    Write-Host "Updated $path"
}

# 1. claims/page.tsx
Add-SerialNumber "src\app\(dashboard)\claims\page.tsx" <td style=\{\{ fontWeight: 500 \}\}>\{claim\.claimNumber\}</td> '<td><div style={{fontWeight: 500}}>{claim.claimNumber}</div><div style={{fontSize: "0.8rem", color: "var(--secondary-foreground)"}}>SN: {claim.oldSerialNumber || "N/A"}</div></td>'

# 2. page.tsx (Dashboard)
Add-SerialNumber "src\app\(dashboard)\page.tsx" <td style=\{\{ fontWeight: 500 \}\}>\{claim\.claimNumber\}</td> '<td><div style={{fontWeight: 500}}>{claim.claimNumber}</div><div style={{fontSize: "0.8rem", color: "var(--secondary-foreground)"}}>SN: {claim.oldSerialNumber || "N/A"}</div></td>'

# 3. batches/BatchForm.tsx
Add-SerialNumber "src\components\batches\BatchForm.tsx" <td style=\{\{ fontWeight: 500 \}\}>\{claim\.claimNumber\}</td> '<td><div style={{fontWeight: 500}}>{claim.claimNumber}</div><div style={{fontSize: "0.8rem", color: "var(--secondary-foreground)"}}>SN: {claim.oldSerialNumber || "N/A"}</div></td>'

# 4. deliveries/DeliveryForm.tsx
Add-SerialNumber "src\components\deliveries\DeliveryForm.tsx" <td style=\{\{ fontWeight: 500 \}\}>\{claim\.claimNumber\}</td> '<td><div style={{fontWeight: 500}}>{claim.claimNumber}</div><div style={{fontSize: "0.8rem", color: "var(--secondary-foreground)"}}>SN: {claim.oldSerialNumber || "N/A"}</div></td>'

# 5. deliveries/[id]/page.tsx
Add-SerialNumber "src\app\(dashboard)\deliveries\[id]\page.tsx" <td style=\{\{ padding: "0\.5rem 0" \}\}>\{item\.claim\.claimNumber\}</td> '<td style={{ padding: "0.5rem 0" }}><div style={{fontWeight: 500}}>{item.claim.claimNumber}</div><div style={{fontSize: "0.8rem", color: "var(--secondary-foreground)"}}>SN: {item.claim.oldSerialNumber || "N/A"}</div></td>'

