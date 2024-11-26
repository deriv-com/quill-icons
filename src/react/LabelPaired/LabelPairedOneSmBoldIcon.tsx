import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={7}
    height={22}
    viewBox='0 0 7 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.156 5.281v10.282h2.188c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H.656A.63.63 0 0 1 0 16.219c0-.356.273-.657.656-.657h2.188V6.458L.984 7.605c-.3.192-.71.082-.902-.218-.191-.301-.082-.711.219-.903l2.844-1.75a.63.63 0 0 1 .656-.027c.219.137.355.356.355.574' />
    </g>
    <defs>
      <clipPath id='6408b533164204a79c955fd15632c10b__a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneSmBoldIcon);
export default ForwardRef;
