import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.5 19.797 4.297-4.297L7.5 11.242v2.07c0 .547-.43.938-.937.938H1.875v2.5h4.688a.95.95 0 0 1 .937.938zm6.25-4.297c0 .469-.195.898-.508 1.21l-4.531 4.532c-.352.352-.82.508-1.29.508a1.77 1.77 0 0 1-1.796-1.797v-1.328h-3.75A1.85 1.85 0 0 1 0 16.75v-2.5c0-1.016.82-1.875 1.875-1.875h3.75v-1.29c0-1.015.781-1.835 1.797-1.835.469 0 .937.195 1.289.547l4.531 4.531c.313.313.508.742.508 1.172m-.312 6.875h3.124c.86 0 1.563-.664 1.563-1.562V10.188c0-.86-.703-1.563-1.562-1.563h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.124C18.438 6.75 20 8.313 20 10.188v10.625a3.443 3.443 0 0 1-3.437 3.437h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938' />
    </g>
    <defs>
      <clipPath id='579e0d2b99fffd111b01a04c843d465d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketLgBoldIcon);
export default ForwardRef;
