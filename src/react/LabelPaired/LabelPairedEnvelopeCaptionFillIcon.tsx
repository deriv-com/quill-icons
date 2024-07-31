import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 5h9.75C11.485 5 12 5.516 12 6.125c0 .375-.187.703-.469.914l-5.086 3.82a.74.74 0 0 1-.914 0L.445 7.04A1.12 1.12 0 0 1 0 6.125C0 5.515.492 5 1.125 5M0 7.625l5.086 3.844c.539.398 1.266.398 1.805 0L12 7.625V12.5c0 .844-.68 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 0 12.5z' />
    </g>
    <defs>
      <clipPath id='af32d133316cce62c40ff23ed84d680c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeCaptionFillIcon);
export default ForwardRef;
