import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.574 15.809q-.437.328-.957.109-.465-.246-.492-.793v-8.75q.027-.547.492-.793.52-.22.957.11l5.25 4.374.301.274V6.375q0-.383.246-.629A.85.85 0 0 1 8 5.5q.383 0 .629.246a.85.85 0 0 1 .246.629v8.75a.85.85 0 0 1-.246.629A.85.85 0 0 1 8 16a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V11.16l-.3.274z' />
    </g>
    <defs>
      <clipPath id='25ed1ba71e40da067ba0b1c34a860f8a__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepSmFillIcon);
export default ForwardRef;
