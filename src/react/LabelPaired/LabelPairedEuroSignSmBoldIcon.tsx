import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignSmBoldIcon = (
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
      <path d='M1.438 10.313H.78a.63.63 0 0 1-.656-.657C.125 9.301.398 9 .781 9h.903a6.13 6.13 0 0 1 5.879-4.375h.656c.355 0 .656.3.656.656 0 .383-.3.657-.656.657h-.656A4.81 4.81 0 0 0 3.077 9h4.266c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H2.75v.876h4.594c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H3.078a4.77 4.77 0 0 0 4.485 3.063h.656c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-.656c-2.79 0-5.141-1.832-5.88-4.375H.782a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h.657v-.875' />
    </g>
    <defs>
      <clipPath id='de1aa5d5e9da4afe34f9df4489b24df9__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignSmBoldIcon);
export default ForwardRef;
