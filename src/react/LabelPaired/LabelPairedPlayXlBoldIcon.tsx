import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayXlBoldIcon = (
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
      <path d='M2.25 26.25 15.75 18 2.25 9.75zM1.172 7.781q1.125-.609 2.25.047l13.5 8.25Q17.953 16.735 18 18q-.046 1.266-1.078 1.922l-13.5 8.25q-1.125.656-2.25.047Q.048 27.562 0 26.25V9.75q.047-1.312 1.172-1.969' />
    </g>
    <defs>
      <clipPath id='3d335431c457136347f2db49a4a6e07d__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayXlBoldIcon);
export default ForwardRef;
