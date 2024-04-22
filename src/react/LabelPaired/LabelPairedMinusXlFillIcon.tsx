import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMinusXlFillIcon = (
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
      <path d='M20.25 18c0 .844-.703 1.5-1.5 1.5H2.25A1.48 1.48 0 0 1 .75 18c0-.797.656-1.5 1.5-1.5h16.5c.797 0 1.5.703 1.5 1.5' />
    </g>
    <defs>
      <clipPath id='9babb8234bb8aa5fd4519bc1aa25ca8b__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusXlFillIcon);
export default ForwardRef;
