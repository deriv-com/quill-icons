import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 7.5c-.281 0-.5.25-.5.5v.719l5.375 4.406a1.744 1.744 0 0 0 2.219 0L14.5 8.719V8c0-.25-.25-.5-.5-.5zm-.5 3.156V16c0 .281.219.5.5.5h12c.25 0 .5-.219.5-.5v-5.344l-4.437 3.625c-1.22 1-2.938 1-4.126 0zM0 8c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2z' />
    </g>
    <defs>
      <clipPath id='01325f7404b18b71b735b1ac87b90aac__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeMdBoldIcon);
export default ForwardRef;
