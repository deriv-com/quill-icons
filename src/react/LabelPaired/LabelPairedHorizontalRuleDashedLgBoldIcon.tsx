import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 15.5c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5C.39 16.438 0 16.047 0 15.5m6.875 0c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938m6.875 0c0-.508.39-.937.938-.937h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938m6.875 0c0-.508.39-.937.938-.937h2.5A.95.95 0 0 1 25 15.5c0 .547-.43.938-.937.938h-2.5c-.547 0-.938-.391-.938-.938' />
    </g>
    <defs>
      <clipPath id='b0e5001a8a73b92ee7ddd5c5eb8c996b__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedLgBoldIcon);
export default ForwardRef;
