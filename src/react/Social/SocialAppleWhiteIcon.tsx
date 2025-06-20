import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SocialAppleWhiteIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#fff' clipPath='url(#1fe23c53cdce8d6502e9de7346ccc525__a)'>
      <path d='M22.248 0c.195 1.894-.542 3.749-1.627 5.129-1.125 1.34-2.907 2.405-4.69 2.248-.233-1.815.66-3.746 1.667-4.93C18.721 1.066 20.66.08 22.248 0M18.064 8.672c1.158-.464 2.59-1.038 4.165-.943 1.006.08 3.904.395 5.76 3.185l-.06.041c-.476.317-3.378 2.248-3.342 6.057.036 4.537 3.678 6.238 4.16 6.463l.053.026-.01.032c-.092.3-.72 2.36-2.153 4.49-1.315 1.97-2.668 3.896-4.833 3.935-1.02.02-1.706-.28-2.422-.592-.75-.326-1.53-.667-2.757-.667-1.286 0-2.104.351-2.891.69-.68.29-1.336.572-2.25.61-2.087.077-3.67-2.087-4.985-4.053-2.707-3.973-4.755-11.21-1.971-16.088C5.88 9.42 8.354 7.887 11.02 7.847c1.164-.022 2.278.426 3.25.816.739.297 1.396.562 1.93.562.485 0 1.118-.254 1.864-.553' />
    </g>
    <defs>
      <clipPath id='1fe23c53cdce8d6502e9de7346ccc525__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialAppleWhiteIcon);
export default ForwardRef;
