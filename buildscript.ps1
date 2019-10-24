param(
[Parameter(Mandatory=$false, HelpMessage="Run with deploy option")]
[ValidateSet('debug','build')]
[string]$action = "debug"
)

$ScriptPath = $MyInvocation.MyCommand.Path
$scriptFolder = Split-Path $ScriptPath
Push-Location $scriptFolder

$nodever = "8.11.4"
#$npmPath = "$env:programfiles\nodejs\$nodever"
$npmPath = "C:\Program Files\nodejs"

if($action -eq "debug")
{
#& "$npmPath\npm.cmd" install --scripts-prepend-node-path=true --no-optional --no-shrinkwrap --no-package-lock -ErrorAction:SilentlyContinue | out-null #2>&1
& install --scripts-prepend-node-path=true --no-optional --no-shrinkwrap --no-package-lock -ErrorAction:SilentlyContinue | out-null #2>&1
}
Write-Host "***Done Installing Dependencies***"
Write-Host "***Now run npm start***"

& npm start
Write-Host "***Please Headover to http://localhost:1337/ ***"