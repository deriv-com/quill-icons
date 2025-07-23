# Quill Icons - LabelPaired Icon Usage Guide for AI

## Overview

This guide provides instructions for AI on how to use LabelPaired icons from the Quill Icons library when building wireframes and applications. LabelPaired icons are designed to be used alongside labels and text elements.

## Icon Naming Convention

**Format:** `<LabelPaired{IconName}{Size}{Weight}Icon />`

**File Location:** `svg/LabelPaired/LabelPaired{IconName}{Size}{Weight}.svg`

### Example Usage

```jsx
<LabelPairedArrowUpFromBracketLgRegularIcon />
```

- **IconName:** `ArrowUpFromBracket`
- **Size:** `Lg` (Large)
- **Weight:** `Regular`

## Available Variants

### Sizes

- **Caption** - Smallest size, used for caption text
- **Sm** - Small size
- **Md** - Medium size (default)
- **Lg** - Large size
- **Xl** - Extra large size

### Weights

- **Bold** - Heavy/bold version of the icon
- **Fill** - Filled/solid version of the icon
- **Regular** - Default/outline version of the icon

**Important Notes:**

- Not all icons have all weight variants
- Some icons (especially brand icons) only come in one style and don't have weight variants
- All icons are available in all 5 sizes (Caption, Sm, Md, Lg, Xl)

## Icon Categories and Examples

Based on our analysis of 4,530 LabelPaired icons representing 322 unique icon names, here are the main categories:

### Navigation & Arrows

- `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`
- `ArrowDownAZ`, `ArrowUpAZ`, `ArrowDownOneNine`
- `ChevronUp`, `ChevronDown`, `ChevronLeft`, `ChevronRight`
- `ChevronsUp`, `ChevronsDown`

### Interface Elements

- `Bars`, `BarsStaggered` (menu icons)
- `Xmark`, `XmarkLarge` (close icons)
- `Plus`, `Minus`
- `Expand`, `Compress`
- `WindowMinimize`, `WindowMaximize`

### Actions & Controls

- `Play`, `Pause`, `Stop`
- `ForwardStep`, `BackwardStep`
- `VolumeHigh`, `VolumeXmark`
- `Sliders` (settings/controls)
- `Gear` (settings)

### Files & Documents

- `File`, `FileLines`, `FileCircleInfo`
- `FileCertificate`, `FileChartColumn`
- `Folder`, `FolderOpen`
- `Download`, `Upload`

### Communication

- `Envelope`, `EnvelopeOpen`
- `Phone`, `PhonePlus`
- `Message`, `MessageLines`
- `Bullhorn` (announcements)

### User & Account

- `User`, `UserGroup`, `UserGear`
- `CircleUser`
- `Key`, `KeySquare`
- `Shield`, `ShieldCheck`

### Technology & Devices

- `Computer`, `Desktop`, `Laptop`
- `MobileScreen`, `MobileScreenButton`
- `TabletScreen`
- `Wifi`, `Signal`

### E-commerce & Finance

- `CreditCard`, `Wallet`
- `ShoppingCart`, `ShoppingBag`
- `Receipt`, `CashRegister`
- `CircleDollar`, `EuroSign`

### Brand Icons (No Weight Variants)

These icons typically don't have Bold/Fill/Regular variants:

- `Android`, `Apple`, `ApplePay`
- `AppStore`, `AppStoreIos`
- `Google`, `GooglePay`
- `Microsoft`, `Youtube`
- `Facebook`, `Instagram`, `Twitter`

## Usage Guidelines

### 1. Choosing the Right Size

```jsx
// For captions and small text
<LabelPairedUserCaptionRegularIcon />

// For body text
<LabelPairedUserMdRegularIcon />

// For headings
<LabelPairedUserLgRegularIcon />

// For large UI elements
<LabelPairedUserXlRegularIcon />
```

### 2. Choosing the Right Weight

```jsx
// For subtle, outlined icons
<LabelPairedHeartMdRegularIcon />

// For emphasis or active states
<LabelPairedHeartMdBoldIcon />

// For filled/solid appearance
<LabelPairedHeartMdFillIcon />
```

### 3. Icon Availability Check

Before suggesting an icon, ensure it exists by checking:

1. The icon name exists in our 322 unique names
2. The size variant (Caption/Sm/Md/Lg/Xl) is available
3. The weight variant (Bold/Fill/Regular) exists for that icon

### 4. Common Patterns

- Use **Regular** weight for most interface elements
- Use **Bold** weight for emphasis or important actions
- Use **Fill** weight for active states or selected items
- Brand icons typically only have one variant (no weight)

## Complete Icon List

The library contains 322 unique icon names. Each icon is available in 5 sizes. Icons with weight variants come in 3 weights (Bold, Fill, Regular), while brand icons typically have only one style.

**Total Available Components:** 4,530 LabelPaired icon components

## Error Prevention

To avoid suggesting non-existent icons:

1. Always use exact icon names from the available list
2. Verify size and weight combinations exist
3. Remember that brand icons (Android, Apple, etc.) don't have weight variants
4. All icons have all size variants (Caption through Xl)

## Example Implementation

```jsx
// Navigation
<LabelPairedArrowLeftMdRegularIcon />
<LabelPairedChevronDownSmRegularIcon />

// Actions
<LabelPairedPlayLgFillIcon />
<LabelPairedPauseLgFillIcon />

// Interface
<LabelPairedBarsLgRegularIcon />
<LabelPairedXmarkMdRegularIcon />

// Files
<LabelPairedDownloadMdRegularIcon />
<LabelPairedFileLinesMdRegularIcon />

// Brand (no weight variants)
<LabelPairedAppleMdIcon />
<LabelPairedGoogleLgIcon />
```

This guide ensures AI assistants can confidently suggest appropriate LabelPaired icons that actually exist in the Quill Icons library.

---

## Complete List of Available LabelPaired Icon Names

Total: **322 unique icon names**

### A

- Android, AppStore, AppStoreIos
- Apple, ApplePay, ArrowDown
- ArrowDownAZ, ArrowDownLeft, ArrowDownOneNine
- ArrowDownRight, ArrowDownToBracket, ArrowDownToLine
- ArrowLeft, ArrowLeftToLine, ArrowRight
- ArrowRightArrowLeft, ArrowRightToLine, ArrowRotateLeft
- ArrowRotateRight, ArrowUp, ArrowUpAZ
- ArrowUpArrowDown, ArrowUpFromBracket, ArrowUpFromSquare
- ArrowUpLeft, ArrowUpOneNine, ArrowUpRight
- ArrowUpRightFromSquare, ArrowUpToLine, ArrowsRotate
- At

### B

- Backward, BackwardStep, BadgeCheck
- Bank, Barcode, Bars
- BarsFilter, BasketShopping, Bell
- BellOn, BellSlash, BookCircleQuestion
- Bookmark, BoxArchiveCircleArrowDown, BoxArchiveCircleArrowUp
- Briefcase, Bullhorn

### C

- Calendar, CalendarRange, Camera
- CaretDown, CaretUp, CashRegister
- ChartArea, ChartCandlestick, ChartLine
- ChartLineUpDown, ChartMixed, ChartOhlc
- ChartTradingview, ChartTrendDown, ChartTrendSideway
- ChartTrendUp, Check, ChevronDown
- ChevronLeft, ChevronRight, ChevronUp
- ChevronsDown, ChevronsLeft, ChevronsRight
- ChevronsUp, Circle, CircleArrowDown
- CircleArrowDownLeft, CircleArrowDownRight, CircleArrowLeft
- CircleArrowRight, CircleArrowUp, CircleArrowUpLeft
- CircleArrowUpRight, CircleBookmark, CircleCalendar
- CircleCaretDown, CircleCaretUp, CircleCheck
- CircleChevronDown, CircleChevronLeft, CircleChevronRight
- CircleChevronUp, CircleDollar, CircleDot
- CircleEight, CircleEllipsis, CircleEnvelope
- CircleEuro, CircleExclamation, CircleFive
- CircleFour, CircleInfo, CircleMinus
- CircleNine, CircleOne, CirclePlus
- CircleQuestion, CircleSeven, CircleSix
- CircleSort, CircleSortDown, CircleSortUp
- CircleStar, CircleSterling, CircleThree
- CircleTrash, CircleTwo, CircleUser
- CircleUserSlash, CircleXmark, CircleZero
- ClapperboardPlay, ClockThree, Clone
- Compress, Computer, ComputerMouseScrollwheel
- Copy, CreditCard

### D

- DealCancellation, DealProtection, Deriv
- DerivP2p, Desktop, DollarSign

### E

- Eight, Ellipsis, EllipsisVertical
- Envelope, EuroSign, Exclamation
- Expand, Eye, EyeSlash

### F

- FaceViewfinder, Facebook, FacebookMessenger
- FiatOfframp, FiatOnramp, FieldPassword
- File, FileArrowDown, FileCertificate
- FileChartColumn, FileCheck, FileCircleInfo
- FileCsv, FileDoc, FileExcel
- FileInvoiceDollar, FileLines, FilePdf
- FileShield, FileXml, Filter
- Fingerprint, Five, FlagCheckered
- FloppyDisk, FloppyDiskPen, FolderOpen
- Forward, ForwardStep, Four

### G

- GaugeMax, GaugeMin, Gear
- Globe, Google, GooglePlay
- GraduationCap, Grid, Grid2
- GripDotsVertical

### H

- HandGestureSwipeLeftRight, HandGestureTapLeft, HandGestureTapRight
- HandsHoldingDiamond, HarmonyOs, HorizontalRule
- HorizontalRuleDashed, HouseBlank, Huawei
- HuaweiAppGallery

### I

- Image, ImagePolaroidUser, Info
- Instagram, Ios, Ipados

### K

- Keyboard

### L

- Language, Laptop, LaptopMobile
- LifeRing, LightChartLineUpDownClock, LightUserTieCircleDollar
- Lightbulb, LinkSimple, Linkedin
- Linux, Loader, LocationCrosshairs
- LocationCrosshairsSlash, LocationDot, Lock
- LockPattern

### M

- Macos, MagnifyingGlassMinus, MagnifyingGlassPlus
- Map, MemoCircleCheck, MemoPad
- MessageLines, MessagesQuestion, Microphone
- Microsoft, MicrosoftStore, Minus
- MobileNotch, MobileNotchRotate, MobileScreenButton
- MoneyBill, Moon

### N

- Nine

### O

- ObjectsAlignLeft, ObjectsColumn, One

### P

- PageCircleArrowRight, PaperPlaneTop, Paperclip
- Passkey, Paste, Pause
- Pen, PenCircle, PenLine
- Percent, PersonChalkboard, Phone
- Placeholder, Play, PlaybackSpeed
- Plus, PresentationScreen, Puzzle
- PuzzlePieceTwo

### Q

- Qrcode, Question

### R

- RectangleAd, RectangleBarcode, Reddit
- RightFromBracket, RightToBracket, RotateDevice

### S

- Scissors, Search, Seven
- ShareFromSquare, ShareNodes, ShieldCheck
- Signal, Six, Sliders
- Sort, SortDown, SortUp
- Square, SquareCheck, SquareList
- SquareMinus, Star, SterlingSign
- StopLoss, Stopwatch, SunBright

### T

- TableLayout, Tablet, TabletScreen
- TakeProfit, Telegram, Three
- ThumbsDown, ThumbsUp, Tiktok
- Trash, TriangleExclamation, Trustpilot
- Two

### U

- Ubuntu, Unlock, User
- UserCheck, UserMinus, UserPlus
- UserSlash, Users

### V

- Video, VolumeHigh, VolumeXmark

### W

- Wallet, WalletCircleMinus, WalletCirclePlus
- WalletSignal, Whatsapp, Wifi
- WindowMaximize, WindowMinimize, Windows

### X

- XTwitter, Xmark

### Y

- Youtube

### Z

- Zero

## Usage Examples with All Available Names

```jsx
// Navigation Icons
<LabelPairedArrowDownMdRegularIcon />
<LabelPairedArrowUpLgBoldIcon />
<LabelPairedChevronRightSmFillIcon />
<LabelPairedChevronsUpXlRegularIcon />

// Action Icons
<LabelPairedPlayMdFillIcon />
<LabelPairedPauseLgRegularIcon />
<LabelPairedStopMdBoldIcon />
<LabelPairedForwardStepSmRegularIcon />

// Interface Icons
<LabelPairedBarsLgRegularIcon />
<LabelPairedXmarkMdRegularIcon />
<LabelPairedPlusCaptionBoldIcon />
<LabelPairedMinusSmFillIcon />

// File Icons
<LabelPairedFileMdRegularIcon />
<LabelPairedFolderOpenLgFillIcon />
<LabelPairedDownloadXlBoldIcon />
<LabelPairedUploadSmRegularIcon />

// Communication Icons
<LabelPairedEnvelopeMdRegularIcon />
<LabelPairedPhoneLgFillIcon />
<LabelPairedMessageLinesSmBoldIcon />

// User Icons
<LabelPairedUserMdRegularIcon />
<LabelPairedUserGroupLgFillIcon />
<LabelPairedCircleUserXlBoldIcon />

// Brand Icons (no weight variants)
<LabelPairedAppleMdIcon />
<LabelPairedGoogleLgIcon />
<LabelPairedMicrosoftSmIcon />
<LabelPairedInstagramXlIcon />

// Financial Icons
<LabelPairedCreditCardMdRegularIcon />
<LabelPairedWalletLgFillIcon />
<LabelPairedCircleDollarXlBoldIcon />

// Device Icons
<LabelPairedMobileScreenButtonMdRegularIcon />
<LabelPairedLaptopLgFillIcon />
<LabelPairedTabletScreenSmBoldIcon />
```

This comprehensive list ensures AI can reference any of the 322 available LabelPaired icon names with confidence.

---

# Standalone Icons Usage Guide

## Overview

Standalone icons work differently from LabelPaired icons. Instead of having size in the component name, they use an `iconSize` prop to control the size dynamically.

## Standalone Icon Naming Convention

**Format:** `<Standalone{IconName}{Weight}Icon fill='#000000' iconSize='lg' />`

**File Location:** `svg/Standalone/Standalone{IconName}{Weight}.svg`

### Example Usage

```jsx
<StandaloneCircleExclamationFillIcon fill='#000000' iconSize='lg' />
<StandaloneCircleExclamationRegularIcon fill='#000000' iconSize='md' />
<StandaloneAndroidIcon fill='#000000' iconSize='sm' />
```

## Available Variants

### Icon Sizes (via iconSize prop)

- **xs** - 16px
- **sm** - 24px
- **md** - 32px (default)
- **lg** - 48px
- **xl** - 64px
- **2xl** - 96px

### Weights (in component name)

- **Bold** - Heavy/bold version of the icon
- **Fill** - Filled/solid version of the icon
- **Regular** - Default/outline version of the icon

**Important Notes:**

- **All sizes** are controlled via `iconSize` prop, not component name
- **Weight** is part of the component name (Bold/Fill/Regular)
- **Brand icons** don't have weight variants (no Bold/Fill/Regular)
- **Fill color** is controlled via `fill` prop

## Standalone vs LabelPaired Comparison

| Feature             | LabelPaired                                   | Standalone                      |
| ------------------- | --------------------------------------------- | ------------------------------- |
| **Size Control**    | Component name<br/>`LabelPairedUserLgRegular` | Prop<br/>`iconSize='lg'`        |
| **Weight Control**  | Component name<br/>`...LgRegular`             | Component name<br/>`...Regular` |
| **Available Sizes** | Caption, Sm, Md, Lg, Xl                       | xs, sm, md, lg, xl, 2xl         |
| **Color Control**   | CSS/props                                     | `fill` prop                     |
| **Usage**           | Fixed size per component                      | Dynamic size with prop          |

## Complete List of Available Standalone Icon Names

Total: **322 unique icon names** (same icons as LabelPaired but different usage)

### A

- **Android** - (brand icon - no weight)
- **Apple** - (brand icon - no weight)
- **ApplePay** - (brand icon - no weight)
- **AppStore** - (brand icon - no weight)
- **AppStoreIos** - (brand icon - no weight)
- **ArrowDown** - [Bold, Fill, Regular]
- **ArrowDownAZ** - [Bold, Fill, Regular]
- **ArrowDownLeft** - [Bold, Fill, Regular]
- **ArrowDownOneNine** - [Bold, Fill, Regular]
- **ArrowDownRight** - [Bold, Fill, Regular]
- **ArrowDownToBracket** - [Bold, Fill, Regular]
- **ArrowDownToLine** - [Bold, Fill, Regular]
- **ArrowLeft** - [Bold, Fill, Regular]
- **ArrowLeftToLine** - [Bold, Fill, Regular]
- **ArrowRight** - [Bold, Fill, Regular]
- **ArrowRightArrowLeft** - [Bold, Fill, Regular]
- **ArrowRightToLine** - [Bold, Fill, Regular]
- **ArrowRotateLeft** - [Bold, Fill, Regular]
- **ArrowRotateRight** - [Bold, Fill, Regular]
- **ArrowsRotate** - [Bold, Fill, Regular]
- **ArrowUp** - [Bold, Fill, Regular]
- **ArrowUpArrowDown** - [Bold, Fill, Regular]
- **ArrowUpAZ** - [Bold, Fill, Regular]
- **ArrowUpFromBracket** - [Bold, Fill, Regular]
- **ArrowUpFromSquare** - [Bold, Fill, Regular]
- **ArrowUpLeft** - [Bold, Fill, Regular]
- **ArrowUpOneNine** - [Bold, Fill, Regular]
- **ArrowUpRight** - [Bold, Fill, Regular]
- **ArrowUpRightFromSquare** - [Bold, Fill, Regular]
- **ArrowUpToLine** - [Bold, Fill, Regular]
- **At** - [Bold, Fill, Regular]

### B

- **Backward** - [Bold, Fill, Regular]
- **BackwardStep** - [Bold, Fill, Regular]
- **BadgeCheck** - [Bold, Fill, Regular]
- **Bank** - [Bold, Fill, Regular]
- **Barcode** - [Bold, Fill, Regular]
- **Bars** - [Bold, Fill, Regular]
- **BarsFilter** - [Bold, Fill, Regular]
- **BasketShopping** - [Bold, Fill, Regular]
- **Bell** - [Bold, Fill, Regular]
- **BellOn** - [Bold, Fill, Regular]
- **BellSlash** - [Bold, Fill, Regular]
- **BookCircleQuestion** - [Bold, Fill, Regular]
- **Bookmark** - [Bold, Fill, Regular]
- **BoxArchiveCircleArrowDown** - [Bold, Fill, Regular]
- **BoxArchiveCircleArrowUp** - [Bold, Fill, Regular]
- **Briefcase** - [Bold, Fill, Regular]
- **Bullhorn** - [Bold, Fill, Regular]

### C

- **Calendar** - [Bold, Fill, Regular]
- **CalendarRange** - [Bold, Fill, Regular]
- **Camera** - [Bold, Fill, Regular]
- **CaretDown** - [Bold, Fill, Regular]
- **CaretUp** - [Bold, Fill, Regular]
- **CashRegister** - [Bold, Fill, Regular]
- **ChartArea** - [Bold, Fill, Regular]
- **ChartCandlestick** - [Bold, Fill, Regular]
- **ChartLine** - [Bold, Fill, Regular]
- **ChartLineUpDown** - [Bold, Fill, Regular]
- **ChartMixed** - [Bold, Fill, Regular]
- **ChartOhlc** - [Bold, Fill, Regular]
- **ChartTradingview** - [Bold, Fill, Regular]
- **ChartTrendDown** - [Bold, Fill, Regular]
- **ChartTrendSideway** - [Bold, Fill, Regular]
- **ChartTrendUp** - [Bold, Fill, Regular]
- **Check** - [Bold, Fill, Regular]
- **ChevronDown** - [Bold, Fill, Regular]
- **ChevronLeft** - [Bold, Fill, Regular]
- **ChevronRight** - [Bold, Fill, Regular]
- **ChevronsDown** - [Bold, Fill, Regular]
- **ChevronsLeft** - [Bold, Fill, Regular]
- **ChevronsRight** - [Bold, Fill, Regular]
- **ChevronsUp** - [Bold, Fill, Regular]
- **ChevronUp** - [Bold, Fill, Regular]
- **Circle** - [Bold, Fill, Regular]
- **CircleArrowDown** - [Bold, Fill, Regular]
- **CircleArrowDownLeft** - [Bold, Fill, Regular]
- **CircleArrowDownRight** - [Bold, Fill, Regular]
- **CircleArrowLeft** - [Bold, Fill, Regular]
- **CircleArrowRight** - [Bold, Fill, Regular]
- **CircleArrowUp** - [Bold, Fill, Regular]
- **CircleArrowUpLeft** - [Bold, Fill, Regular]
- **CircleArrowUpRight** - [Bold, Fill, Regular]
- **CircleBookmark** - [Bold, Fill, Regular]
- **CircleCalendar** - [Bold, Fill, Regular]
- **CircleCaretDown** - [Bold, Fill, Regular]
- **CircleCaretUp** - [Bold, Fill, Regular]
- **CircleCheck** - [Bold, Fill, Regular]
- **CircleChevronDown** - [Bold, Fill, Regular]
- **CircleChevronLeft** - [Bold, Fill, Regular]
- **CircleChevronRight** - [Bold, Fill, Regular]
- **CircleChevronUp** - [Bold, Fill, Regular]
- **CircleDollar** - [Bold, Fill, Regular]
- **CircleDot** - [Bold, Fill, Regular]
- **CircleEight** - [Bold, Fill, Regular]
- **CircleEllipsis** - [Bold, Fill, Regular]
- **CircleEnvelope** - [Bold, Fill, Regular]
- **CircleEuro** - [Bold, Fill, Regular]
- **CircleExclamation** - [Bold, Fill, Regular]
- **CircleFive** - [Bold, Fill, Regular]
- **CircleFour** - [Bold, Fill, Regular]
- **CircleInfo** - [Bold, Fill, Regular]
- **CircleMinus** - [Bold, Fill, Regular]
- **CircleNine** - [Bold, Fill, Regular]
- **CircleOne** - [Bold, Fill, Regular]
- **CirclePlus** - [Bold, Fill, Regular]
- **CircleQuestion** - [Bold, Fill, Regular]
- **CircleSeven** - [Bold, Fill, Regular]
- **CircleSix** - [Bold, Fill, Regular]
- **CircleSort** - [Bold, Fill, Regular]
- **CircleSortDown** - [Bold, Fill, Regular]
- **CircleSortUp** - [Bold, Fill, Regular]
- **CircleStar** - [Bold, Fill, Regular]
- **CircleSterling** - [Bold, Fill, Regular]
- **CircleThree** - [Bold, Fill, Regular]
- **CircleTrash** - [Bold, Fill, Regular]
- **CircleTwo** - [Bold, Fill, Regular]
- **CircleUser** - [Bold, Fill, Regular]
- **CircleUserSlash** - [Bold, Fill, Regular]
- **CircleXmark** - [Bold, Fill, Regular]
- **CircleZero** - [Bold, Fill, Regular]
- **ClapperboardPlay** - [Bold, Fill, Regular]
- **ClockThree** - [Bold, Fill, Regular]
- **Clone** - [Bold, Fill, Regular]
- **Compress** - [Bold, Fill, Regular]
- **Computer** - [Bold, Fill, Regular]
- **ComputerMouseScrollwheel** - [Bold, Fill, Regular]
- **Copy** - [Bold, Fill, Regular]
- **CreditCard** - [Bold, Fill, Regular]

### D

- **DealCancellation** - [Bold, Fill, Regular]
- **DealProtection** - [Bold, Fill, Regular]
- **Deriv** - (brand icon - no weight)
- **DerivP2p** - [Bold, Fill, Regular]
- **Desktop** - [Bold, Fill, Regular]
- **DollarSign** - [Bold, Fill, Regular]

### E

- **Eight** - [Bold, Fill, Regular]
- **Ellipsis** - [Bold, Fill, Regular]
- **EllipsisVertical** - [Bold, Fill, Regular]
- **Envelope** - [Bold, Fill, Regular]
- **EuroSign** - [Bold, Fill, Regular]
- **Exclamation** - [Bold, Fill, Regular]
- **Expand** - [Bold, Fill, Regular]
- **Eye** - [Bold, Fill, Regular]
- **EyeSlash** - [Bold, Fill, Regular]

### F

- **Facebook** - (brand icon - no weight)
- **FacebookMessenger** - (brand icon - no weight)
- **FaceViewfinder** - [Bold, Fill, Regular]
- **FiatOfframp** - [Bold, Fill, Regular]
- **FiatOnramp** - [Bold, Fill, Regular]
- **FieldPassword** - [Bold, Fill, Regular]
- **File** - [Bold, Fill, Regular]
- **FileArrowDown** - [Bold, Fill, Regular]
- **FileCertificate** - [Bold, Fill, Regular]
- **FileChartColumn** - [Bold, Fill, Regular]
- **FileCheck** - [Bold, Fill, Regular]
- **FileCircleInfo** - [Bold, Fill, Regular]
- **FileCsv** - [Bold, Fill, Regular]
- **FileDoc** - [Bold, Fill, Regular]
- **FileExcel** - [Bold, Fill, Regular]
- **FileInvoiceDollar** - [Bold, Fill, Regular]
- **FileLines** - [Bold, Fill, Regular]
- **FilePdf** - [Bold, Fill, Regular]
- **FileShield** - [Bold, Fill, Regular]
- **FileXml** - [Bold, Fill, Regular]
- **Filter** - [Bold, Fill, Regular]
- **Fingerprint** - [Bold, Fill, Regular]
- **Five** - [Bold, Fill, Regular]
- **FlagCheckered** - [Bold, Fill, Regular]
- **FloppyDisk** - [Bold, Fill, Regular]
- **FloppyDiskPen** - [Bold, Fill, Regular]
- **FolderOpen** - [Bold, Fill, Regular]
- **Forward** - [Bold, Fill, Regular]
- **ForwardStep** - [Bold, Fill, Regular]
- **Four** - [Bold, Fill, Regular]

### G

- **GaugeMax** - [Bold, Fill, Regular]
- **GaugeMin** - [Bold, Fill, Regular]
- **Gear** - [Bold, Fill, Regular]
- **Globe** - [Bold, Fill, Regular]
- **Google** - (brand icon - no weight)
- **GooglePlay** - (brand icon - no weight)
- **GraduationCap** - [Bold, Fill, Regular]
- **Grid** - [Bold, Fill, Regular]
- **Grid2** - [Bold, Fill, Regular]
- **GripDotsVertical** - [Bold, Fill, Regular]

### H

- **HandGestureSwipeLeftRight** - [Bold, Fill, Regular]
- **HandGestureTapLeft** - [Bold, Fill, Regular]
- **HandGestureTapRight** - [Bold, Fill, Regular]
- **HandsHoldingDiamond** - [Bold, Fill, Regular]
- **HarmonyOs** - (brand icon - no weight)
- **HorizontalRule** - [Bold, Fill, Regular]
- **HorizontalRuleDashed** - [Bold, Fill, Regular]
- **HouseBlank** - [Bold, Fill, Regular]
- **Huawei** - (brand icon - no weight)
- **HuaweiAppGallery** - (brand icon - no weight)

### I

- **Image** - [Bold, Fill, Regular]
- **ImagePolaroidUser** - [Bold, Fill, Regular]
- **Info** - [Bold, Fill, Regular]
- **Instagram** - (brand icon - no weight)
- **Ios** - (brand icon - no weight)
- **Ipados** - (brand icon - no weight)

### K

- **Keyboard** - [Bold, Fill, Regular]

### L

- **Language** - [Bold, Fill, Regular]
- **Laptop** - [Bold, Fill, Regular]
- **LaptopMobile** - [Bold, Fill, Regular]
- **LifeRing** - [Bold, Fill, Regular]
- **Lightbulb** - [Bold, Fill, Regular]
- **LightChartLineUpDownClock** - [Bold, Fill, Regular]
- **LightUserTieCircleDollar** - [Bold, Fill, Regular]
- **Linkedin** - (brand icon - no weight)
- **LinkSimple** - [Bold, Fill, Regular]
- **Linux** - (brand icon - no weight)
- **Loader** - [Bold, Fill, Regular]
- **LocationCrosshairs** - [Bold, Fill, Regular]
- **LocationCrosshairsSlash** - [Bold, Fill, Regular]
- **LocationDot** - [Bold, Fill, Regular]
- **Lock** - [Bold, Fill, Regular]
- **LockPattern** - [Bold, Fill, Regular]

### M

- **Macos** - (brand icon - no weight)
- **MagnifyingGlassMinus** - [Bold, Fill, Regular]
- **MagnifyingGlassPlus** - [Bold, Fill, Regular]
- **Map** - [Bold, Fill, Regular]
- **MemoCircleCheck** - [Bold, Fill, Regular]
- **MemoPad** - [Bold, Fill, Regular]
- **MessageLines** - [Bold, Fill, Regular]
- **MessagesQuestion** - [Bold, Fill, Regular]
- **Microphone** - [Bold, Fill, Regular]
- **Microsoft** - (brand icon - no weight)
- **MicrosoftStore** - (brand icon - no weight)
- **Minus** - [Bold, Fill, Regular]
- **MobileNotch** - [Bold, Fill, Regular]
- **MobileNotchRotate** - [Bold, Fill, Regular]
- **MobileScreenButton** - [Bold, Fill, Regular]
- **MoneyBill** - [Bold, Fill, Regular]
- **Moon** - [Bold, Fill, Regular]

### N

- **Nine** - [Bold, Fill, Regular]

### O

- **ObjectsAlignLeft** - [Bold, Fill, Regular]
- **ObjectsColumn** - [Bold, Fill, Regular]
- **One** - [Bold, Fill, Regular]

### P

- **PageCircleArrowRight** - [Bold, Fill, Regular]
- **Paperclip** - [Bold, Fill, Regular]
- **PaperPlaneTop** - [Bold, Fill, Regular]
- **Passkey** - [Bold, Fill, Regular]
- **Paste** - [Bold, Fill, Regular]
- **Pause** - [Bold, Fill, Regular]
- **Pen** - [Bold, Fill, Regular]
- **PenCircle** - [Bold, Fill, Regular]
- **PenLine** - [Bold, Fill, Regular]
- **Percent** - [Bold, Fill, Regular]
- **PersonChalkboard** - [Bold, Fill, Regular]
- **Phone** - [Bold, Fill, Regular]
- **Placeholder** - [Bold, Fill, Regular]
- **Play** - [Bold, Fill, Regular]
- **PlaybackSpeed** - [Bold, Fill, Regular]
- **Plus** - [Bold, Fill, Regular]
- **PresentationScreen** - [Bold, Fill, Regular]
- **Puzzle** - [Bold, Fill, Regular]
- **PuzzlePieceTwo** - [Bold, Fill, Regular]

### Q

- **Qrcode** - [Bold, Fill, Regular]
- **Question** - [Bold, Fill, Regular]

### R

- **RectangleAd** - [Bold, Fill, Regular]
- **RectangleBarcode** - [Bold, Fill, Regular]
- **Reddit** - (brand icon - no weight)
- **RightFromBracket** - [Bold, Fill, Regular]
- **RightToBracket** - [Bold, Fill, Regular]
- **RotateDevice** - [Bold, Fill, Regular]

### S

- **Scissors** - [Bold, Fill, Regular]
- **Search** - [Bold, Fill, Regular]
- **Seven** - [Bold, Fill, Regular]
- **ShareFromSquare** - [Bold, Fill, Regular]
- **ShareNodes** - [Bold, Fill, Regular]
- **ShieldCheck** - [Bold, Fill, Regular]
- **Signal** - [Bold, Fill, Regular]
- **Six** - [Bold, Fill, Regular]
- **Sliders** - [Bold, Fill, Regular]
- **Sort** - [Bold, Fill, Regular]
- **SortDown** - [Bold, Fill, Regular]
- **SortUp** - [Bold, Fill, Regular]
- **Square** - [Bold, Fill, Regular]
- **SquareCheck** - [Bold, Fill, Regular]
- **SquareList** - [Bold, Fill, Regular]
- **SquareMinus** - [Bold, Fill, Regular]
- **Star** - [Bold, Fill, Regular]
- **SterlingSign** - [Bold, Fill, Regular]
- **StopLoss** - [Bold, Fill, Regular]
- **Stopwatch** - [Bold, Fill, Regular]
- **SunBright** - [Bold, Fill, Regular]

### T

- **TableLayout** - [Bold, Fill, Regular]
- **Tablet** - [Bold, Fill, Regular]
- **TabletScreen** - [Bold, Fill, Regular]
- **TakeProfit** - [Bold, Fill, Regular]
- **Telegram** - (brand icon - no weight)
- **Three** - [Bold, Fill, Regular]
- **ThumbsDown** - [Bold, Fill, Regular]
- **ThumbsUp** - [Bold, Fill, Regular]
- **Tiktok** - (brand icon - no weight)
- **Trash** - [Bold, Fill, Regular]
- **TriangleExclamation** - [Bold, Fill, Regular]
- **Trustpilot** - (brand icon - no weight)
- **Two** - [Bold, Fill, Regular]

### U

- **Ubuntu** - (brand icon - no weight)
- **Unlock** - [Bold, Fill, Regular]
- **User** - [Bold, Fill, Regular]
- **UserCheck** - [Bold, Fill, Regular]
- **UserMinus** - [Bold, Fill, Regular]
- **UserPlus** - [Bold, Fill, Regular]
- **Users** - [Bold, Fill, Regular]
- **UserSlash** - [Bold, Fill, Regular]

### V

- **Video** - [Bold, Fill, Regular]
- **VolumeHigh** - [Bold, Fill, Regular]
- **VolumeXmark** - [Bold, Fill, Regular]

### W

- **Wallet** - [Bold, Fill, Regular]
- **WalletCircleMinus** - [Bold, Fill, Regular]
- **WalletCirclePlus** - [Bold, Fill, Regular]
- **WalletSignal** - [Bold, Fill, Regular]
- **Whatsapp** - (brand icon - no weight)
- **Wifi** - [Bold, Fill, Regular]
- **WindowMaximize** - [Bold, Fill, Regular]
- **WindowMinimize** - [Bold, Fill, Regular]
- **Windows** - (brand icon - no weight)

### X

- **Xmark** - [Bold, Fill, Regular]
- **XTwitter** - (brand icon - no weight)

### Y

- **Youtube** - (brand icon - no weight)

### Z

- **Zero** - [Bold, Fill, Regular]

## Usage Examples

```jsx
// Basic usage with different sizes
<StandalonePlayFillIcon fill='#1890ff' iconSize='xs' />    // 16px
<StandalonePlayFillIcon fill='#1890ff' iconSize='sm' />    // 24px
<StandalonePlayFillIcon fill='#1890ff' iconSize='md' />    // 32px (default)
<StandalonePlayFillIcon fill='#1890ff' iconSize='lg' />    // 48px
<StandalonePlayFillIcon fill='#1890ff' iconSize='xl' />    // 64px
<StandalonePlayFillIcon fill='#1890ff' iconSize='2xl' />   // 96px

// Different weights
<StandaloneHeartRegularIcon fill='#ff4d4f' iconSize='lg' />  // Outline
<StandaloneHeartBoldIcon fill='#ff4d4f' iconSize='lg' />     // Bold outline
<StandaloneHeartFillIcon fill='#ff4d4f' iconSize='lg' />     // Filled

// Brand icons (no weight variants)
<StandaloneAppleIcon fill='#000000' iconSize='md' />
<StandaloneGoogleIcon fill='#4285f4' iconSize='lg' />

// Navigation
<StandaloneArrowLeftRegularIcon fill='#595959' iconSize='sm' />
<StandaloneChevronDownBoldIcon fill='#262626' iconSize='xs' />

// Interface elements
<StandaloneBarsRegularIcon fill='#434343' iconSize='md' />
<StandaloneXmarkBoldIcon fill='#ff4d4f' iconSize='sm' />

// User actions
<StandaloneUserRegularIcon fill='#1890ff' iconSize='lg' />
<StandalonePlusCircleFillIcon fill='#52c41a' iconSize='xl' />
```

## Size Guidelines

- **xs (16px)** - Small UI elements, inline with text
- **sm (24px)** - Buttons, form controls, small cards
- **md (32px)** - Default size, general UI elements
- **lg (48px)** - Prominent buttons, card headers
- **xl (64px)** - Large UI sections, feature highlights
- **2xl (96px)** - Hero sections, main focal points

## Best Practices

1. **Use consistent sizes** within the same UI context
2. **Choose appropriate weights** - Regular for most cases, Bold for emphasis, Fill for active states
3. **Set proper colors** via the `fill` prop
4. **Consider accessibility** - larger sizes for touch targets
5. **Brand icons** only need size and fill (no weight variants)

This guide ensures AI can properly suggest Standalone icons with correct sizing and weight options.

---

# TradeTypes Icons Usage Guide

## Overview

TradeTypes icons are specialized icons for trading and financial operations. Like Standalone icons, they use an `iconSize` prop for dynamic sizing, but they focus specifically on trading-related functionality and don't have weight variants (Bold/Fill/Regular).

## TradeTypes Icon Naming Convention

**Format:** `<TradeTypes{Category}{Type}Icon iconSize='lg' />`

**File Location:** `svg/TradeTypes/TradeTypes{Category}{Type}.svg`

### Example Usage

```jsx
<TradeTypesAccumulatorBreakOutIcon iconSize='lg' />
<TradeTypesVanillaCallIcon iconSize='md' />
<TradeTypesDigitsEvenIcon iconSize='sm' />
```

## Available Variants

### Icon Sizes (via iconSize prop)

- **xs** - 16px
- **sm** - 24px
- **md** - 32px (default)
- **lg** - 48px
- **xl** - 64px
- **2xl** - 96px

### No Weight Variants

TradeTypes icons **do not have** Bold/Fill/Regular variants. Each trade type has a single, specific design optimized for trading interfaces.

**Important Notes:**

- **All sizes** are controlled via `iconSize` prop
- **No weight variants** - each icon has one specific design
- **Specialized for trading** - specific to financial operations
- **Predefined colors** - icons have built-in colors and don't accept `fill` prop

## TradeTypes vs Other Icon Types

| Feature             | LabelPaired            | Standalone            | TradeTypes                  |
| ------------------- | ---------------------- | --------------------- | --------------------------- |
| **Use Case**        | General UI with labels | General standalone UI | Trading-specific operations |
| **Size Control**    | Component name         | `iconSize` prop       | `iconSize` prop             |
| **Weight Variants** | Bold/Fill/Regular      | Bold/Fill/Regular     | None (single design)        |
| **Color Control**   | CSS/props              | `fill` prop           | Predefined (no prop)        |
| **Count**           | 322 unique names       | 322 unique names      | 37 trade-specific icons     |

## Complete List of Available TradeTypes Icons

Total: **37 trade-specific icons** organized in **10 trading categories**

### Accumulator

- **AccumulatorBreakOut** - Accumulator breakout trading option
- **AccumulatorStayIn** - Accumulator stay-in trading option

### Digits

- **DigitsDiffers** - Digit prediction differs
- **DigitsEven** - Even digit prediction
- **DigitsMatches** - Digit prediction matches
- **DigitsOdd** - Odd digit prediction
- **DigitsOver** - Digit over prediction
- **DigitsUnder** - Digit under prediction

### HighsAndLows

- **HighsAndLowsHigh** - High barrier option
- **HighsAndLowsHigher** - Higher prediction
- **HighsAndLowsLow** - Low barrier option
- **HighsAndLowsLower** - Lower prediction
- **HighsAndLowsNoTouch** - No-touch barrier option
- **HighsAndLowsTouch** - Touch barrier option

### InsAndOuts

- **InsAndOutsEndsIn** - Ends between barriers
- **InsAndOutsEndsOut** - Ends outside barriers
- **InsAndOutsGoesOut** - Goes outside barriers
- **InsAndOutsStaysIn** - Stays between barriers

### Lookbacks

- **LookbacksCloseLow** - Close-to-low lookback
- **LookbacksHighClose** - High-to-close lookback
- **LookbacksHighLow** - High-low lookback

### Multipliers

- **MultipliersDown** - Multiplier down position
- **MultipliersUp** - Multiplier up position

### Spreads

- **SpreadsCall** - Spread call option
- **SpreadsPut** - Spread put option

### Turbo

- **TurboLong** - Turbo long position
- **TurboShort** - Turbo short position

### UpsAndDowns

- **UpsAndDownsAsianDown** - Asian-style down option
- **UpsAndDownsAsianUp** - Asian-style up option
- **UpsAndDownsFall** - Fall prediction
- **UpsAndDownsOnlyDowns** - Only downs prediction
- **UpsAndDownsOnlyUps** - Only ups prediction
- **UpsAndDownsResetDown** - Reset call down
- **UpsAndDownsResetUp** - Reset call up
- **UpsAndDownsRise** - Rise prediction

### Vanilla

- **VanillaCall** - Vanilla call option
- **VanillaPut** - Vanilla put option

## Usage Examples

```jsx
// Basic accumulator icons
<TradeTypesAccumulatorBreakOutIcon iconSize='md' />
<TradeTypesAccumulatorStayInIcon iconSize='md' />

// Digit prediction icons
<TradeTypesDigitsEvenIcon iconSize='sm' />
<TradeTypesDigitsOddIcon iconSize='sm' />

// Barrier options
<TradeTypesHighsAndLowsTouchIcon iconSize='lg' />
<TradeTypesHighsAndLowsNoTouchIcon iconSize='lg' />

// Direction predictions
<TradeTypesUpsAndDownsRiseIcon iconSize='xl' />
<TradeTypesUpsAndDownsFallIcon iconSize='xl' />

// Vanilla options
<TradeTypesVanillaCallIcon iconSize='lg' />
<TradeTypesVanillaPutIcon iconSize='lg' />

// Different sizes for different contexts
<TradeTypesTurboLongIcon iconSize='xs' />   // 16px - Small indicators
<TradeTypesTurboShortIcon iconSize='2xl' /> // 96px - Main feature
```

## Built-in Color Design

TradeTypes icons come with predefined colors optimized for trading interfaces:

- **Green tones** - Typically used for positive/up movements (calls, rise, up)
- **Red tones** - Typically used for negative/down movements (puts, fall, down)
- **Blue/Neutral tones** - Used for even predictions and neutral states
- **Accent colors** - Used for special conditions and barriers
- **Colors are not customizable** - Each icon has a carefully designed color scheme

## Use Cases

TradeTypes icons are specifically designed for:

1. **Trading Platforms** - Binary options, forex, CFDs
2. **Financial Dashboards** - Position indicators, option types
3. **Educational Content** - Trading tutorials, option explanations
4. **Mobile Trading Apps** - Compact trade selection interfaces
5. **Analytics Tools** - Trade type categorization and reporting

## Best Practices

1. **Use appropriate sizes** - xs/sm for indicators, lg/xl for primary actions
2. **No color customization needed** - icons have optimized built-in colors
3. **Group related icons** - keep similar trade types visually connected
4. **Consider accessibility** - built-in colors are designed with contrast in mind
5. **Pair with labels** - trading terminology can be complex for users

This specialized set ensures AI can suggest appropriate trading-specific icons for financial applications.
