import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.684 7.496-3.282 3.281 3.254 3.254a.6.6 0 0 1 0 .903.6.6 0 0 1-.902 0L5.473 11.68l-3.254 3.254a.6.6 0 0 1-.903 0c-.273-.246-.273-.657 0-.93L4.57 10.75 1.316 7.496c-.273-.246-.273-.656 0-.93.246-.246.657-.246.93 0L5.5 9.848l3.254-3.254c.246-.274.656-.274.93 0a.644.644 0 0 1 0 .902' />
    </g>
    <defs>
      <clipPath id='e135cb80f8f45f0701f7e230d395ad2c__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkSmBoldIcon);
export default ForwardRef;
