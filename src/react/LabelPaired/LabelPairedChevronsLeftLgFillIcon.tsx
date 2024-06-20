import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftLgFillIcon = (
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
      <path d='m1.602 14.64 7.5-7.5a1.205 1.205 0 0 1 1.757 0c.508.47.508 1.29 0 1.758L4.258 15.5l6.601 6.64c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0l-7.5-7.5a1.205 1.205 0 0 1 0-1.757m15-7.5a1.205 1.205 0 0 1 1.757 0c.508.47.508 1.29 0 1.758L11.758 15.5l6.601 6.64c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0l-7.5-7.5a1.205 1.205 0 0 1 0-1.757z' />
    </g>
    <defs>
      <clipPath id='4ee7f6284eb449c0696ed2dc3d170544__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftLgFillIcon);
export default ForwardRef;
