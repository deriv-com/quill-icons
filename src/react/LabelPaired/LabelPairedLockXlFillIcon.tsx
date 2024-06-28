import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockXlFillIcon = (
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
      <path d='M6.75 12.75V15h7.5v-2.25A3.76 3.76 0 0 0 10.5 9a3.73 3.73 0 0 0-3.75 3.75m-3 2.25v-2.25c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75V15H18c1.64 0 3 1.36 3 3v9c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-9c0-1.64 1.313-3 3-3z' />
    </g>
    <defs>
      <clipPath id='4d4c78a768d16852eebeb31d8df6b302__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockXlFillIcon);
export default ForwardRef;
