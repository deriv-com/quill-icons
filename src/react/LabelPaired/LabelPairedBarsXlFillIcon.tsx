import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsXlFillIcon = (
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
      <path d='M0 10.5C0 9.703.656 9 1.5 9h18c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-18A1.48 1.48 0 0 1 0 10.5M0 18c0-.797.656-1.5 1.5-1.5h18c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-18A1.48 1.48 0 0 1 0 18m21 7.5c0 .844-.703 1.5-1.5 1.5h-18A1.48 1.48 0 0 1 0 25.5c0-.797.656-1.5 1.5-1.5h18c.797 0 1.5.703 1.5 1.5' />
    </g>
    <defs>
      <clipPath id='364944e5ba4ba785a0493200d702c78a__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsXlFillIcon);
export default ForwardRef;
