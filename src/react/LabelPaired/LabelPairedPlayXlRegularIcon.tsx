import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayXlRegularIcon = (
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
      <path d='M2.625 9.094a.8.8 0 0 0-.75 0q-.375.234-.375.656v16.5q0 .422.375.656.375.188.75 0l13.5-8.25q.375-.234.375-.656t-.375-.656zM1.172 7.78q1.125-.609 2.25.047l13.5 8.25Q17.953 16.735 18 18q-.046 1.266-1.078 1.922l-13.5 8.25q-1.125.656-2.25.047Q.048 27.562 0 26.25V9.75q.047-1.312 1.172-1.969' />
    </g>
    <defs>
      <clipPath id='5c7a1401be8934f791275251d1244cb9__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayXlRegularIcon);
export default ForwardRef;
