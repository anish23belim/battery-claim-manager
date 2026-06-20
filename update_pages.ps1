function Update-Page {
    param ($path, $actionImport, $actionName, $entityName)
    $content = Get-Content -Raw $path
    if ($content -notmatch "import DeleteButton") {
        $content = $content -replace 'import \{\s*([^}]+)\s*\}\s*from\s*"lucide-react";', "import { $1 } from "lucide-react";
import DeleteButton from "@/components/common/DeleteButton";
import { $actionName } from "$actionImport";"
        
        # We need to inject <DeleteButton /> next to the Link tag inside the td with textAlign: "center"
        # The td currently contains:
        # <td style={{ textAlign: "center" }}>
        #   <Link ...> ... </Link>
        # </td>
        
        $pattern = '(<td style=\{\{ textAlign: "center" \}\}>\s*<Link[^>]+>[\s\S]*?</Link>)\s*</td>'
        $replacement = "$1
                      <DeleteButton id={$().id} action={} entityName="" />
                    </td>"
        
        $content = [regex]::Replace($content, $pattern, $replacement)
        
        # Also wrap them in a flex div if not already
        $pattern2 = '<td style=\{\{ textAlign: "center" \}\}>\s*(<Link[^>]+>[\s\S]*?</Link>)\s*<DeleteButton([^>]+)/>\s*</td>'
        $replacement2 = '<td style={{ textAlign: "center" }}>
                      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                        
                        <DeleteButton/>
                      </div>
                    </td>'
        $content = [regex]::Replace($content, $pattern2, $replacement2)
        
        Set-Content -Path $path -Value $content -NoNewline
        Write-Host "Updated $path"
    }
}

Update-Page "src\app\(dashboard)\claims\page.tsx" "@/actions/claimActions" "deleteClaim" "claim"
Update-Page "src\app\(dashboard)\companies\page.tsx" "@/actions/companyActions" "deleteCompany" "company"
Update-Page "src\app\(dashboard)\dealers\page.tsx" "@/actions/dealerActions" "deleteDealer" "dealer"
Update-Page "src\app\(dashboard)\batches\page.tsx" "@/actions/batchActions" "deleteBatch" "batch"
Update-Page "src\app\(dashboard)\deliveries\page.tsx" "@/actions/deliveryActions" "deleteDelivery" "delivery"
