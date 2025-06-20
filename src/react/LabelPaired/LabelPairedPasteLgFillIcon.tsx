import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteLgFillIcon = (
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
      <path d='M6.25 5.5c.898 0 1.719.508 2.148 1.25h2.227c1.016 0 1.875.86 1.875 1.875v.625h-1.875A3.11 3.11 0 0 0 7.5 12.375V23H1.875A1.85 1.85 0 0 1 0 21.125v-12.5C0 7.609.82 6.75 1.875 6.75h2.188A2.53 2.53 0 0 1 6.25 5.5m4.375 5h4.844c.469 0 .976.234 1.328.586l2.617 2.617c.352.352.586.86.586 1.328v8.594c0 1.055-.86 1.875-1.875 1.875h-7.5a1.85 1.85 0 0 1-1.875-1.875v-11.25c0-1.016.82-1.875 1.875-1.875M6.25 7.063A.925.925 0 0 0 5.313 8c0 .547.39.938.937.938.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937' />
    </g>
    <defs>
      <clipPath id='6a797e825dd66c4a19f277005b218098__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteLgFillIcon);
export default ForwardRef;
