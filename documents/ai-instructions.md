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

## Common Standalone Icons and Examples

Based on our analysis of 906 Standalone icons representing 322 unique icon names (same as LabelPaired), here are the most commonly used categories:

### Navigation & Arrows

- `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`
- `ArrowDownAZ`, `ArrowUpAZ`, `ArrowDownOneNine`
- `ChevronUp`, `ChevronDown`, `ChevronLeft`, `ChevronRight`
- `ChevronsUp`, `ChevronsDown`

### Interface Elements

- `Bars`, `BarsFilter` (menu icons)
- `Xmark` (close icons)
- `Plus`, `Minus`
- `Expand`, `Compress`
- `WindowMinimize`, `WindowMaximize`

### Actions & Controls

- `Play`, `Pause`
- `ForwardStep`, `BackwardStep`
- `VolumeHigh`, `VolumeXmark`
- `Sliders` (settings/controls)
- `Gear` (settings)

### Files & Documents

- `File`, `FileLines`, `FileCircleInfo`
- `FileCertificate`, `FileChartColumn`
- `FolderOpen`
- `Upload`, `ArrowUpFromBracket`

### Communication

- `Envelope`
- `Phone`
- `MessageLines`
- `Bullhorn` (announcements)

### User & Account

- `User`, `Users`, `UserCheck`
- `CircleUser`
- `Lock`, `Unlock`
- `Shield`, `ShieldCheck`

### Technology & Devices

- `Computer`, `Desktop`, `Laptop`
- `MobileScreenButton`
- `TabletScreen`
- `Wifi`, `Signal`

### E-commerce & Finance

- `CreditCard`, `Wallet`
- `CircleDollar`, `EuroSign`
- `MoneyBill`

### Brand Icons (No Weight Variants)

These icons typically don't have Bold/Fill/Regular variants:

- `Android`, `Apple`, `ApplePay`
- `Google`, `GooglePlay`
- `Microsoft`, `MicrosoftStore`
- `Facebook`, `Instagram`, `XTwitter`
- `Youtube`, `Linkedin`

## Usage Examples with Common Icons

```jsx
// Navigation
<StandaloneArrowLeftRegularIcon fill='#595959' iconSize='sm' />
<StandaloneChevronDownBoldIcon fill='#262626' iconSize='xs' />

// Actions
<StandalonePlayFillIcon fill='#1890ff' iconSize='lg' />
<StandalonePauseFillIcon fill='#1890ff' iconSize='lg' />

// Interface elements
<StandaloneBarsRegularIcon fill='#434343' iconSize='md' />
<StandaloneXmarkBoldIcon fill='#ff4d4f' iconSize='sm' />

// User actions
<StandaloneUserRegularIcon fill='#1890ff' iconSize='lg' />
<StandalonePlusRegularIcon fill='#52c41a' iconSize='md' />

// Files
<StandaloneFileRegularIcon fill='#1890ff' iconSize='md' />
<StandaloneUploadBoldIcon fill='#52c41a' iconSize='lg' />

// Brand icons (no weight variants)
<StandaloneAppleIcon fill='#000000' iconSize='md' />
<StandaloneGoogleIcon fill='#4285f4' iconSize='lg' />
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

---

# HTML Wireframe Usage Guide

## Wireframe with Fallback Icons + Quill Mapping

**Important:** The `@deriv/quill-icons` npm package does NOT include raw SVG files, only React components.

For HTML wireframes, use fallback icons (like Font Awesome) with data attributes that map to Quill Icons components for development implementation.

### Wireframe Strategy

```html
<i
  class="fa fa-user"
  data-component="StandaloneUserRegularIcon"
  data-prop-iconSize="lg"
  data-prop-fill="#333"
></i>
```

**Data Attributes:**

- `data-component` - Exact Quill Icons component name
- `data-prop-{propName}` - Component props (iconSize, fill, etc.)

### HTML Examples with Mapping

```html
<!-- LabelPaired Icons (size in component name) -->
<i class="fa fa-user" data-component="LabelPairedUserMdRegularIcon"></i>

<i class="fa fa-bars" data-component="LabelPairedBarsLgRegularIcon"></i>

<i class="fa fa-play" data-component="LabelPairedPlayLgFillIcon"></i>

<!-- Standalone Icons (size via iconSize prop) -->
<i
  class="fa fa-user"
  data-component="StandaloneUserRegularIcon"
  data-prop-iconSize="md"
  data-prop-fill="#1890ff"
></i>

<i
  class="fa fa-play"
  data-component="StandalonePlayFillIcon"
  data-prop-iconSize="lg"
  data-prop-fill="#52c41a"
></i>

<i
  class="fa fa-arrow-left"
  data-component="StandaloneArrowLeftRegularIcon"
  data-prop-iconSize="sm"
  data-prop-fill="#595959"
></i>

<!-- TradeTypes Icons (no weight, size via iconSize) -->
<i class="fa fa-chart-line" data-component="TradeTypesVanillaCallIcon" data-prop-iconSize="lg"></i>

<i
  class="fa fa-chart-bar"
  data-component="TradeTypesAccumulatorBreakOutIcon"
  data-prop-iconSize="md"
></i>

<i class="fa fa-calculator" data-component="TradeTypesDigitsEvenIcon" data-prop-iconSize="sm"></i>
```

### Component Mapping Patterns

**LabelPaired Components:**

```html
<!-- Pattern: LabelPaired{IconName}{Size}{Weight}Icon -->
<i class="fa fa-user" data-component="LabelPairedUserMdRegularIcon"></i>
<i class="fa fa-user" data-component="LabelPairedUserLgBoldIcon"></i>
<i class="fa fa-heart" data-component="LabelPairedHeartSmFillIcon"></i>
```

**Standalone Components:**

```html
<!-- Pattern: Standalone{IconName}{Weight}Icon + iconSize prop -->
<i
  class="fa fa-user"
  data-component="StandaloneUserRegularIcon"
  data-prop-iconSize="md"
  data-prop-fill="#333"
></i>

<i
  class="fa fa-heart"
  data-component="StandaloneHeartFillIcon"
  data-prop-iconSize="lg"
  data-prop-fill="#ff4d4f"
></i>
```

**TradeTypes Components:**

```html
<!-- Pattern: TradeTypes{Category}{Type}Icon + iconSize prop (no weight) -->
<i class="fa fa-chart-line" data-component="TradeTypesVanillaCallIcon" data-prop-iconSize="lg"></i>

<i class="fa fa-calculator" data-component="TradeTypesDigitsEvenIcon" data-prop-iconSize="md"></i>
```

### Development Conversion Guide

When converting wireframes to React components, use the data attributes:

```javascript
// Read wireframe data attributes
const element = document.querySelector('[data-component]');
const componentName = element.getAttribute('data-component');
const iconSize = element.getAttribute('data-prop-iconSize');
const fill = element.getAttribute('data-prop-fill');

// Convert to Quill Icons import
import { StandaloneUserRegularIcon } from '@deriv/quill-icons/Standalone';

// Use with props
<StandaloneUserRegularIcon iconSize={iconSize} fill={fill} />;
```

### Common Fallback Icon Mappings

**Navigation:**

- `fa-arrow-left` → `StandaloneArrowLeftRegularIcon` / `LabelPairedArrowLeftMdRegularIcon`
- `fa-arrow-right` → `StandaloneArrowRightRegularIcon` / `LabelPairedArrowRightMdRegularIcon`
- `fa-chevron-down` → `StandaloneChevronDownRegularIcon` / `LabelPairedChevronDownMdRegularIcon`
- `fa-bars` → `StandaloneBarsRegularIcon` / `LabelPairedBarsLgRegularIcon`

**Actions:**

- `fa-play` → `StandalonePlayFillIcon` / `LabelPairedPlayLgFillIcon`
- `fa-pause` → `StandalonePauseFillIcon` / `LabelPairedPauseLgFillIcon`
- `fa-plus` → `StandalonePlusRegularIcon` / `LabelPairedPlusLgRegularIcon`
- `fa-times` → `StandaloneXmarkRegularIcon` / `LabelPairedXmarkLgRegularIcon`

**User & Account:**

- `fa-user` → `StandaloneUserRegularIcon` / `LabelPairedUserMdRegularIcon`
- `fa-users` → `StandaloneUsersRegularIcon` / `LabelPairedUsersLgRegularIcon`
- `fa-lock` → `StandaloneLockRegularIcon` / `LabelPairedLockMdRegularIcon`

**Files & Documents:**

- `fa-file` → `StandaloneFileRegularIcon` / `LabelPairedFileMdRegularIcon`
- `fa-download` → `StandaloneArrowDownToBracketRegularIcon` / `LabelPairedArrowDownToBracketMdRegularIcon`
- `fa-upload` → `StandaloneArrowUpFromBracketRegularIcon` / `LabelPairedArrowUpFromBracketMdRegularIcon`

**Trading (TradeTypes):**

- `fa-chart-line` → `TradeTypesVanillaCallIcon`
- `fa-chart-bar` → `TradeTypesAccumulatorBreakOutIcon`
- `fa-calculator` → `TradeTypesDigitsEvenIcon`
- `fa-trending-up` → `TradeTypesUpsAndDownsRiseIcon`
- `fa-trending-down` → `TradeTypesUpsAndDownsFallIcon`

### Wireframe Best Practices

1. **Always include `data-component`** - Exact Quill Icons component name
2. **Use `data-prop-iconSize`** for Standalone and TradeTypes icons
3. **Use `data-prop-fill`** for color specifications when needed
4. **Choose appropriate fallback icons** that visually represent the intended Quill icon
5. **Keep consistent sizing** - use iconSize values (xs, sm, md, lg, xl, 2xl)
6. **Document mappings** when using custom/uncommon fallback icons
