import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 6.125a.385.385 0 0 0-.375.375v6c0 .21.164.375.375.375h6a.385.385 0 0 0 .375-.375v-6a.4.4 0 0 0-.375-.375zM.25 6.5c0-.82.656-1.5 1.5-1.5h6c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-6a1.48 1.48 0 0 1-1.5-1.5zm12.375 5.531V6.992L10 8.164V6.945l2.438-1.101c.117-.047.234-.094.374-.094a.94.94 0 0 1 .938.938v5.648a.92.92 0 0 1-.937.914 1 1 0 0 1-.376-.07L10 12.078v-1.242z' />
    </g>
    <defs>
      <clipPath id='2ad70262cf9806a012f1f74db84e67ff__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoCaptionBoldIcon);
export default ForwardRef;
