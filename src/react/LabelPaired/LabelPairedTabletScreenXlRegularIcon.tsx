import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18 7.5H3c-.844 0-1.5.703-1.5 1.5v12h18V9c0-.797-.703-1.5-1.5-1.5m1.5 15h-18V27c0 .844.656 1.5 1.5 1.5h15c.797 0 1.5-.656 1.5-1.5zM3 6h15c1.64 0 3 1.36 3 3v18c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m5.25 19.5c0-.375.328-.75.75-.75h3c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H9a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='e8e101eb7d95647633812a65fab5c1ee__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenXlRegularIcon);
export default ForwardRef;
