import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpSmBoldIcon = (
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
      <path d='m7.465 5.035 5.223 5.278a.6.6 0 0 1 0 .902.6.6 0 0 1-.903 0L6.973 6.43l-4.785 4.785a.6.6 0 0 1-.903 0c-.273-.246-.273-.656 0-.93l5.25-5.25c.246-.246.656-.246.93 0m5.25 10.5-.027.027a.6.6 0 0 1 0 .903.6.6 0 0 1-.903 0L6.973 11.68l-4.785 4.785a.6.6 0 0 1-.903 0c-.273-.246-.273-.656 0-.93l5.25-5.25c.246-.246.656-.246.93 0z' />
    </g>
    <defs>
      <clipPath id='541bcabad93d0408c9f3b15bae9e2b84__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpSmBoldIcon);
export default ForwardRef;
