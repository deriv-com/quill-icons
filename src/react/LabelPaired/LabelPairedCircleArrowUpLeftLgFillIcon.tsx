import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpLeftLgFillIcon = (
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
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m2.5-14.375H6.563a.925.925 0 0 0-.938.938v6.25c0 .546.39.937.938.937.507 0 .937-.39.937-.937v-3.985l5.273 5.274c.352.39.938.39 1.329 0 .351-.352.351-.938 0-1.329L8.789 13H12.5c.508 0 .938-.39.938-.937a.95.95 0 0 0-.938-.938' />
    </g>
    <defs>
      <clipPath id='9cce9e3ca1f89446d78cebf298300d72__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpLeftLgFillIcon);
export default ForwardRef;
