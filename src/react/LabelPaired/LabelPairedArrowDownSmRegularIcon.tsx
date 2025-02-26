import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownSmRegularIcon = (
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
      <path d='M5.172 16.766.359 11.953a.463.463 0 0 1 0-.629.463.463 0 0 1 .63 0l4.074 4.074V5.063a.45.45 0 0 1 .437-.438.47.47 0 0 1 .438.438v10.335l4.046-4.074a.463.463 0 0 1 .63 0 .463.463 0 0 1 0 .63L5.8 16.765a.463.463 0 0 1-.63 0' />
    </g>
    <defs>
      <clipPath id='2fd20013158075c0e298fb02500b69b4__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownSmRegularIcon);
export default ForwardRef;
