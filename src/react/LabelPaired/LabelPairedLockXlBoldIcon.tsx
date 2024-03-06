import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockXlBoldIcon = (
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
      <path d='M6.75 12v3h7.5v-3q-.046-1.593-1.078-2.672Q12.093 8.297 10.5 8.25q-1.593.046-2.672 1.078Q6.797 10.407 6.75 12M4.5 15v-3q.047-2.531 1.734-4.266Q7.97 6.047 10.5 6q2.532.047 4.266 1.734Q16.454 9.47 16.5 12v3H18q1.266.047 2.11.89.843.844.89 2.11v9q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27v-9q.047-1.266.89-2.11.844-.843 2.11-.89zm-2.25 3v9q.046.704.75.75h15q.704-.046.75-.75v-9q-.046-.704-.75-.75H3q-.703.046-.75.75' />
    </g>
    <defs>
      <clipPath id='cc2f122e512741b17307e63d89da2c8e__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockXlBoldIcon);
export default ForwardRef;
