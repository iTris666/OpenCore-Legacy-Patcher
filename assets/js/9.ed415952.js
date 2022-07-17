(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{321:function(e,t,o){e.exports=o.p+"assets/img/OCLP-GUI-Settings-SIP-Enabled.53d6d837.png"},322:function(e,t,o){e.exports=o.p+"assets/img/OCLP-GUI-Settings-SIP-Root-Patch.23121f6d.png"},323:function(e,t,o){e.exports=o.p+"assets/img/OCLP-GUI-Settings-SIP-Disabled.d9346b10.png"},409:function(e,t,o){e.exports=o.p+"assets/img/OCLP-GUI-SMBIOS-Minimal.1e3c25a2.png"},410:function(e,t,o){e.exports=o.p+"assets/img/Hash-Mismatch.add9f660.png"},453:function(e,t,o){"use strict";o.r(t);var a=o(25),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("Here are some common errors users may experience while using this patcher:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#opencore-legacy-patcher-not-launching"}},[e._v("OpenCore Legacy Patcher not launching")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#stuck-on-this-version-of-mac-os-x-is-not-supported-on-this-platform"}},[e._v("Stuck on "),a("code",[e._v("This version of Mac OS X is not supported on this platform")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#cannot-boot-macos-without-the-usb"}},[e._v("Cannot boot macOS without the USB")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#infinite-recovery-os-reboot"}},[e._v("Infinite Recovery OS Booting")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#reboot-when-entering-hibernation-sleep-wake-failure"}},[e._v("Reboot when entering Hibernation ("),a("code",[e._v("Sleep Wake Failure")]),e._v(")")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#booting-with-a-non-flashed-gpu"}},[e._v("Booting with a non-flashed GPU")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#how-to-boot-big-sur-recovery"}},[e._v("How to Boot Big Sur Recovery")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#stuck-on-your-mac-needs-a-firmware-update"}},[e._v('Stuck on "Your Mac needs a firmware update"')])]),e._v(" "),a("li",[a("a",{attrs:{href:"#no-brightness-control"}},[e._v("No Brightness Control")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#cannot-connect-Wi-Fi-on-Monterey-with-legacy-cards"}},[e._v("Cannot connect Wi-Fi on Monterey with legacy cards")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#no-graphics-acceleration"}},[e._v("No Graphics Acceleration")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#black-screen-on-macbookpro113-in-macos-monterey"}},[e._v("Black Screen on MacBookPro11,3 in macOS Monterey")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#no-displayport-output-on-mac-pros-with-NVIDIA-kepler"}},[e._v("No DisplayPort Output on Mac Pros with NVIDIA Kepler")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#volume-hash-mismatch-error-in-macos-monterey"}},[e._v("Volume Hash Mismatch Error in macOS Monterey")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#cannot-disable-sip-in-recoveryos"}},[e._v("Cannot Disable SIP in recoveryOS")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#stuck-on-less-than-a-minute-remaining"}},[e._v('Stuck on "Less than a minute remaining..."')])]),e._v(" "),a("li",[a("a",{attrs:{href:"#no-acceleration-after-a-metal-gpu-swap-on-mac-pro"}},[e._v("No acceleration after a Metal GPU swap on Mac Pro")])])]),e._v(" "),a("h2",{attrs:{id:"opencore-legacy-patcher-not-launching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opencore-legacy-patcher-not-launching"}},[e._v("#")]),e._v(" OpenCore Legacy Patcher not launching")]),e._v(" "),a("p",[e._v("If the application won't launch (e.g. icon will bounce in the Dock), try launching OCLP via Terminal by typing the following command, make sure you've moved the app to "),a("code",[e._v("/Applications")]),e._v(" before this.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("/Applications/OpenCore-Patcher.app/Contents/MacOS/OpenCore-Patcher\n")])])]),a("h2",{attrs:{id:"stuck-on-this-version-of-mac-os-x-is-not-supported-on-this-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-this-version-of-mac-os-x-is-not-supported-on-this-platform"}},[e._v("#")]),e._v(" Stuck on "),a("code",[e._v("This version of Mac OS X is not supported on this platform")])]),e._v(" "),a("p",[e._v("This means macOS has detected an SMBIOS it does not support. To resolve this, ensure you're booting OpenCore "),a("strong",[e._v("before")]),e._v(" the macOS installer in the boot picker. Reminder that the option will be called "),a("code",[e._v("EFI Boot")]),e._v(".")]),e._v(" "),a("p",[e._v("Once you've booted OpenCore at least once, your hardware should now auto-boot it until either an NVRAM reset occurs, or you remove the drive with OpenCore installed.")]),e._v(" "),a("h2",{attrs:{id:"cannot-boot-macos-without-the-usb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cannot-boot-macos-without-the-usb"}},[e._v("#")]),e._v(" Cannot boot macOS without the USB")]),e._v(" "),a("p",[e._v("By default, the OpenCore Patcher won't install OpenCore onto the internal drive itself during installs. Instead, you'll need to either "),a("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/oc2hdd.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("manually transfer"),a("OutboundLink")],1),e._v(" OpenCore to the internal drive's EFI or run this patcher's Option 2 again and select your internal drive.")]),e._v(" "),a("p",[e._v("Reminder that once this is done, you'll need to select OpenCore in the boot picker again for your hardware to remember this entry and auto boot from then on.")]),e._v(" "),a("h2",{attrs:{id:"infinite-recovery-os-booting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#infinite-recovery-os-booting"}},[e._v("#")]),e._v(" Infinite Recovery OS Booting")]),e._v(" "),a("p",[e._v("With OpenCore Legacy Patcher, we rely on Apple Secure Boot to ensure OS updates work correctly and reliably with Big Sur. However this installs NVRAM variables that will confuse your Mac if not running with OpenCore. To resolve this, simply uninstall OpenCore and "),a("a",{attrs:{href:"https://support.apple.com/en-mide/HT201255",target:"_blank",rel:"noopener noreferrer"}},[e._v("reset NVRAM"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Note: Machines with modded root volumes will also result in an infinite recovery loop until integrity is restored.")])]),e._v(" "),a("h2",{attrs:{id:"reboot-when-entering-hibernation-sleep-wake-failure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reboot-when-entering-hibernation-sleep-wake-failure"}},[e._v("#")]),e._v(" Reboot when entering Hibernation ("),a("code",[e._v("Sleep Wake Failure")]),e._v(")")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dortania/Opencore-Legacy-Patcher/issues/72",target:"_blank",rel:"noopener noreferrer"}},[e._v("Known issue on some models"),a("OutboundLink")],1),e._v(", a temporary fix is to disable Hibernation by executing the following command in the terminal:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo pmset -a hibernatemode 0\n")])])]),a("h2",{attrs:{id:"booting-with-a-non-flashed-gpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#booting-with-a-non-flashed-gpu"}},[e._v("#")]),e._v(" Booting with a non-flashed GPU")]),e._v(" "),a("p",[e._v("For Mac Pro, Xserve and iMac users with non-flashed GPUs, you can still easily boot OpenCore and view the entire boot process. To do so, make sure SIP is disabled (to allow NVRAM write access) and run the following:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" bless --verbose --file /Volumes/VOLNAME/EFI/OC/OpenCore.efi --folder /Volumes/VOLNAME/EFI/OC --setBoot\n")])])]),a("ul",[a("li",[e._v("Note 1: You will need to replace "),a("code",[e._v("VOLNAME")]),e._v(" with the Volume name of your USB or hard drive with OpenCore.")]),e._v(" "),a("li",[e._v("Note 2: Once done, you can re-enable SIP.")]),e._v(" "),a("li",[e._v('Note 3: The EFI partition OpenCore was installed on must be mounted. If it\'s unmounted, simply rerun "Install OpenCore to drive."')])]),e._v(" "),a("p",[e._v("Once you boot OpenCore for the first time, LauncherOption will install itself as the top boot priority, making OpenCore always launch. Combined with "),a("code",[e._v("RequestBootVar")]),e._v(", all boot options must go through OpenCore, ensuring seamless usage even with OS installation and updates.")]),e._v(" "),a("h2",{attrs:{id:"how-to-boot-big-sur-recovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-boot-big-sur-recovery"}},[e._v("#")]),e._v(" How to Boot Big Sur Recovery")]),e._v(" "),a("p",[e._v("By default, the patcher will try to hide extra boot options such as recovery from the user. To make them appear, simply press the "),a("code",[e._v("Spacebar")]),e._v(" key while inside OpenCore's Picker to list all boot options.")]),e._v(" "),a("h2",{attrs:{id:"stuck-on-your-mac-needs-a-firmware-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-your-mac-needs-a-firmware-update"}},[e._v("#")]),e._v(' Stuck on "Your Mac needs a firmware update"')]),e._v(" "),a("p",[e._v('Full error: "Your Mac needs a firmware update in order to install to this Volume. Please select a Mac OS Extended (Journaled) volume instead."')]),e._v(" "),a("p",[e._v('This error occurs when macOS determines that the current firmware does not have full APFS support. To resolve this, when installing OpenCore, head to "Patcher Settings" and enable "Moderate SMBIOS Patching" or higher. This will ensure that the firmware reported will show support for full APFS capabilities.')]),e._v(" "),a("h2",{attrs:{id:"no-brightness-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-brightness-control"}},[e._v("#")]),e._v(" No Brightness Control")]),e._v(" "),a("p",[e._v("With OCLP v0.0.22, we've added support for brightness control on many models. However, some users may have noticed that their brightness keys do not work.")]),e._v(" "),a("p",[e._v("As a work-around, we recommend users try out the below app:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://actproductions.net/free-apps/brightness-slider/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brightness Slider"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"cannot-connect-wi-fi-on-monterey-with-legacy-cards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cannot-connect-wi-fi-on-monterey-with-legacy-cards"}},[e._v("#")]),e._v(" Cannot connect Wi-Fi on Monterey with legacy cards")]),e._v(" "),a("p",[e._v("With OCLP v0.2.5, we've added support for legacy Wi-Fi on Monterey. However, some users may have noticed that they can't connect to wireless networks.")]),e._v(" "),a("p",[e._v('To work-around this, we recommend that users manually connect using the "other" option in the Wi-Fi menu bar or manually adding the network in the "Network" preference pane.')]),e._v(" "),a("h2",{attrs:{id:"no-graphics-acceleration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-graphics-acceleration"}},[e._v("#")]),e._v(" No Graphics Acceleration")]),e._v(" "),a("p",[e._v("In macOS, GPU drivers are often dropped from the OS with each major release of it. With macOS Big Sur, currently all non-Metal GPUs require additional patches to gain acceleration. In addition, macOS Monterey removed Graphics Drivers for both Intel Ivy Bridge and NVIDIA Kepler graphics processors.")]),e._v(" "),a("p",[e._v("If you're using OCLP v0.4.4, you should have been prompted to install Root Volume patches after the first boot from installation of macOS. If you need to do this manually, you can do so within the patcher app. Once rebooted, acceleration will be re-enabled as well as brightness control for laptops.")]),e._v(" "),a("h2",{attrs:{id:"black-screen-on-macbookpro11-3-in-macos-monterey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#black-screen-on-macbookpro11-3-in-macos-monterey"}},[e._v("#")]),e._v(" Black Screen on MacBookPro11,3 in macOS Monterey")]),e._v(" "),a("p",[e._v("Due to Apple dropping NVIDIA Kepler support in macOS Monterey, "),a("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/issues/522",target:"_blank",rel:"noopener noreferrer"}},[e._v("MacBookPro11,3's GMUX has difficulties switching back to the iGPU to display macOS correctly."),a("OutboundLink")],1),e._v(" To work-around this issue, boot the MacBookPro11,3 in Safe Mode and once macOS is installed, run OCLP's Post Install Root Patches to enable GPU Acceleration for the NVIDIA dGPU.")]),e._v(" "),a("ul",[a("li",[e._v("Safe Mode can be started by holding "),a("code",[e._v("Shift")]),e._v(" + "),a("code",[e._v("Enter")]),e._v(" when selecting macOS Monterey in OCLP's Boot Menu.")])]),e._v(" "),a("h2",{attrs:{id:"no-displayport-output-on-mac-pros-with-nvidia-kepler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-displayport-output-on-mac-pros-with-nvidia-kepler"}},[e._v("#")]),e._v(" No DisplayPort Output on Mac Pros with NVIDIA Kepler")]),e._v(" "),a("p",[e._v("If you're having trouble with DisplayPort output on Mac Pros, try enabling Minimal Spoofing in Settings -> SMBIOS Settings and rebuild/install OpenCore. This will trick macOS drivers into thinking you have a newer MacPro7,1 and resolve the issue.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(409),alt:""}})]),e._v(" "),a("h2",{attrs:{id:"volume-hash-mismatch-error-in-macos-monterey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume-hash-mismatch-error-in-macos-monterey"}},[e._v("#")]),e._v(" Volume Hash Mismatch Error in macOS Monterey")]),e._v(" "),a("p",[e._v('A semi-common popup some users face is the "Volume Hash Mismatch" error:')]),e._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:o(410)}})]),e._v(" "),a("p",[e._v("What this error signifies is that the OS detects that the boot volume's hash does not match what the OS is expecting, this error is generally cosmetic and can be ignored. However if your system starts to crash spontaneously shortly after, you'll want to reinstall macOS fresh without importing any data at first.")]),e._v(" "),a("ul",[a("li",[e._v("Note that this bug affects native Macs as well and is not due to issues with unsupported Macs: "),a("a",{attrs:{href:"https://osxdaily.com/2021/11/10/volume-hash-mismatch-error-in-macos-monterey/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSX Daily: “Volume Hash Mismatch” Error in MacOS Monterey"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Additionally, it can help to disable FeatureUnlock in Settings -> Misc Settings as this tool can be strenuous on systems with weaker memory stability.")]),e._v(" "),a("h2",{attrs:{id:"cannot-disable-sip-in-recoveryos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cannot-disable-sip-in-recoveryos"}},[e._v("#")]),e._v(" Cannot Disable SIP in recoveryOS")]),e._v(" "),a("p",[e._v("With OCLP, the patcher will always overwrite the current SIP value on boot to ensure that users don't brick an installation after an NVRAM reset. However, for users wanting to disable SIP entirely, this can be done easily.")]),e._v(" "),a("p",[e._v("Head into the GUI, go to Patcher Settings, and toggle the bits you need disabled from SIP:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("SIP Enabled")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("SIP Lowered (Root Patching)")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("SIP Disabled")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("img",{attrs:{src:o(321),alt:""}})]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("img",{attrs:{src:o(322),alt:""}})]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("img",{attrs:{src:o(323),alt:""}})])])])]),e._v(" "),a("h2",{attrs:{id:"intermediate-issues-with-usb-1-1-and-bluetooth-on-macpro3-1-macpro5-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intermediate-issues-with-usb-1-1-and-bluetooth-on-macpro3-1-macpro5-1"}},[e._v("#")]),e._v(" Intermediate issues with USB 1.1 and Bluetooth on MacPro3,1 - MacPro5,1")]),e._v(" "),a("p",[e._v("For those experiencing issues with USB 1.1 devices (such as mice, keyboards and bluetooth chipsets), macOS Big Sur and newer have weakened OS-side reliability for the UHCI controller in older Mac Pros.")]),e._v(" "),a("ul",[a("li",[e._v("UHCI is a USB 1.1 controller that is hooked together with the USB 2.0 ports in your system. Whenever a USB 1.1 device is detected, the UHCI controller is given ownership of the device at a hardware/firmware level.\n"),a("ul",[a("li",[e._v("EHCI is the USB 2.0 controller in older Mac Pros")])])])]),e._v(" "),a("p",[e._v("Because of this, we recommend placing a USB 2.0/3.0 hub between your devices and the port on the Mac Pro. UHCI and EHCI cannot both be used at once, so using a USB hub will always force the EHCI controller on.")]),e._v(" "),a("ul",[a("li",[e._v("Alternatively, you can try cold-starting the hardware and see if macOS recognizes the UHCI controller properly.")])]),e._v(" "),a("h2",{attrs:{id:"stuck-on-less-than-a-minute-remaining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-less-than-a-minute-remaining"}},[e._v("#")]),e._v(' Stuck on "Less than a minute remaining..."')]),e._v(" "),a("p",[e._v('A common area for systems to get "stuck", namely for units that are missing the '),a("code",[e._v("AES")]),e._v(" CPU instruction/older mobile hardware. During this stage, a lot of heavy cryptography is performed, which can make systems appear to be stuck. In reality they are working quite hard to finish up the installation.")]),e._v(" "),a("p",[e._v("Because this step can take a few hours or more depending on drive speeds, be patient at this stage and do not manually power off or reboot your machine as this will break the installation and require you to reinstall. If you think your system has stalled, press the Caps Lock key. If the light turns on, your system is busy.")]),e._v(" "),a("h2",{attrs:{id:"no-acceleration-after-a-metal-gpu-swap-on-mac-pro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-acceleration-after-a-metal-gpu-swap-on-mac-pro"}},[e._v("#")]),e._v(" No acceleration after a Metal GPU swap on Mac Pro")]),e._v(" "),a("p",[e._v("If you finished installing Monterey with the original card installed (to see bootpicker for example) and swapped your GPU to a Metal supported one, you may notice that you're missing acceleration. To fix this, open OCLP and revert root patches to get your Metal-supported GPU work again.")]),e._v(" "),a("p",[e._v('Alternatively, you can remove "AutoPkg-Assets.pkg" from /Library/Packages on the USB drive before proceeding with the installation. To see the folder, enable hidden files with '),a("code",[e._v("Command")]),e._v(" + "),a("code",[e._v("Shift")]),e._v(" + "),a("code",[e._v(".")])]),e._v(" "),a("p",[e._v("The reason for this is that the autopatcher will assume that you will be using the original graphics card and therefore does non-metal patching, which includes removing some drivers for other cards. This causes Metal cards to not accelerate after swapping.")])])}),[],!1,null,null,null);t.default=r.exports}}]);