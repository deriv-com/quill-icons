import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletXlRegularIcon = (
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
      <path d='M3 7.5c-.844 0-1.5.703-1.5 1.5v18c0 .844.656 1.5 1.5 1.5h15c.797 0 1.5-.656 1.5-1.5V9c0-.797-.703-1.5-1.5-1.5zM0 9c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v18c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm9 15.75h3c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H9a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='754e102448dd8248cbf00154af4165c9__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletXlRegularIcon);
export default ForwardRef;
