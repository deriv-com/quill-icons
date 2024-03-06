import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={22}
    viewBox='0 0 2 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.656 5.281v7.875q-.054.602-.656.656-.602-.054-.656-.656V5.281Q.398 4.68 1 4.625q.602.054.656.656M1 16.875a.85.85 0 0 1-.629-.246A.85.85 0 0 1 .125 16q0-.383.246-.629A.85.85 0 0 1 1 15.125q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246' />
    </g>
    <defs>
      <clipPath id='e63e2035f9338c3a759566b4ace4d38c__a'>
        <path d='M0 0h2v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationSmBoldIcon);
export default ForwardRef;
