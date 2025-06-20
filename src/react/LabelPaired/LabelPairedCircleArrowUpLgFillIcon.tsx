import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpLgFillIcon = (
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
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m5.04-10.977-4.415-4.375a.92.92 0 0 0-1.29 0l-4.374 4.375c-.39.391-.39.977 0 1.329.351.39.937.39 1.328 0l2.774-2.774v7.11c0 .546.39.937.937.937.508 0 .938-.39.938-.937v-7.11l2.773 2.774c.351.39.937.39 1.328 0 .352-.352.352-.938 0-1.329' />
    </g>
    <defs>
      <clipPath id='a36298239e01517dc512dbb8fab69a3f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpLgFillIcon);
export default ForwardRef;
