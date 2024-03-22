import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.285 10.285 5.25-5.222c.246-.274.656-.274.93 0a.644.644 0 0 1 0 .902L2.652 10.75l4.786 4.813a.6.6 0 0 1 0 .902.6.6 0 0 1-.903 0l-5.25-5.25c-.273-.246-.273-.656 0-.93m10.5-5.25v.027c.246-.273.656-.273.93 0a.644.644 0 0 1 0 .903l-4.813 4.812 4.786 4.786a.6.6 0 0 1 0 .902.6.6 0 0 1-.903 0l-5.25-5.25c-.273-.246-.273-.656 0-.93z' />
    </g>
    <defs>
      <clipPath id='d80d5be3c08a248c54e9075cd2473031__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftSmBoldIcon);
export default ForwardRef;
