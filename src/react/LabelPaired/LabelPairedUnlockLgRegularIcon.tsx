import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.25 10.5V13h9.375a3.134 3.134 0 0 1 3.125 3.125v6.25a3.11 3.11 0 0 1-3.125 3.125H3.375C1.617 25.5.25 24.133.25 22.375v-6.25A3.11 3.11 0 0 1 3.375 13H4v-2.5c0-2.734 2.227-5 5-5a4.956 4.956 0 0 1 4.766 3.594c.117.312-.079.664-.43.781-.313.078-.664-.078-.742-.43C12.125 7.883 10.68 6.75 9 6.75c-2.07 0-3.75 1.68-3.75 3.75M1.5 16.125v6.25c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-6.25c0-1.016-.86-1.875-1.875-1.875H3.375c-1.055 0-1.875.86-1.875 1.875' />
    </g>
    <defs>
      <clipPath id='a27794efb0545d217461163dcd695ac9__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockLgRegularIcon);
export default ForwardRef;
