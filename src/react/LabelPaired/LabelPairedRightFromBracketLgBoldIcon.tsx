import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketLgBoldIcon = (
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
      <path d='M13.75 11.242v2.07c0 .547-.43.938-.937.938H8.125v2.5h4.688a.95.95 0 0 1 .937.938v2.109l4.297-4.297zM20 15.5c0 .469-.195.898-.508 1.21l-4.531 4.532c-.352.352-.82.508-1.29.508a1.77 1.77 0 0 1-1.796-1.797v-1.328h-3.75A1.85 1.85 0 0 1 6.25 16.75v-2.5c0-1.016.82-1.875 1.875-1.875h3.75v-1.29c0-1.015.781-1.835 1.797-1.835.469 0 .937.195 1.289.547l4.531 4.531c.313.313.508.742.508 1.172M6.563 8.625H3.438c-.899 0-1.563.703-1.563 1.563v10.625c0 .898.664 1.562 1.563 1.562h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H3.438A3.42 3.42 0 0 1 0 20.813V10.188A3.443 3.443 0 0 1 3.438 6.75h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937' />
    </g>
    <defs>
      <clipPath id='eed8b29b01795c7583c4f968e30ceaa1__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketLgBoldIcon);
export default ForwardRef;
