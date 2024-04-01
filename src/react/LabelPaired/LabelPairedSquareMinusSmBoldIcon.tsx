import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareMinusSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 5.938a.45.45 0 0 0-.437.437v8.75c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438v-8.75a.47.47 0 0 0-.438-.437zm-1.75.437c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zm4.156 3.719H8.47c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H4.53a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656' />
    </g>
    <defs>
      <clipPath id='48f8327b28d4f112a6a29c9996a2ed89__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareMinusSmBoldIcon);
export default ForwardRef;
