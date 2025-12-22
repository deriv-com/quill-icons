import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkResetIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#333'
      d='M2.857 7.125c.474 0 .857.392.857.875 0 2.416 1.92 4.375 4.286 4.375.946 0 1.841-.314 2.57-.873L8.857 11.5A.866.866 0 0 1 8 10.625c0-.483.384-.875.857-.875h3.429c.473 0 .857.392.857.875v3.5a.866.866 0 0 1-.857.875.866.866 0 0 1-.857-.875v-1.098A5.9 5.9 0 0 1 8 14.125c-3.314 0-6-2.742-6-6.125 0-.483.384-.875.857-.875M3.714 1c.474 0 .857.392.857.875v1.098A5.9 5.9 0 0 1 8 1.875c3.314 0 6 2.742 6 6.125a.866.866 0 0 1-.857.875.866.866 0 0 1-.857-.875c0-2.416-1.92-4.375-4.286-4.375a4.2 4.2 0 0 0-2.571.874l1.714.001c.473 0 .857.392.857.875a.866.866 0 0 1-.857.875H3.714a.866.866 0 0 1-.857-.875v-3.5c0-.483.384-.875.857-.875'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivDarkResetIcon);
export default ForwardRef;
