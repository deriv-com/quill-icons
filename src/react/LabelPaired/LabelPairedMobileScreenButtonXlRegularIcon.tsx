import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 7.5h-9C3.656 7.5 3 8.203 3 9v12h12V9c0-.797-.703-1.5-1.5-1.5m1.5 15H3V27c0 .844.656 1.5 1.5 1.5h9c.797 0 1.5-.656 1.5-1.5zM4.5 6h9c1.64 0 3 1.36 3 3v18c0 1.688-1.36 3-3 3h-9c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m2.25 19.5c0-.375.328-.75.75-.75h3c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-3a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='59b6d7a1d8d5ac423c77b05fbd5370c1__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonXlRegularIcon);
export default ForwardRef;
