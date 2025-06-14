import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserSmBoldIcon = (
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
      <path d='M1.688 15.125c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438v-1.312H1.688zm7.82-2.625h1.805V6.375a.47.47 0 0 0-.438-.437h-8.75a.45.45 0 0 0-.437.437V12.5h1.804a1.76 1.76 0 0 1 1.696-1.312h2.625c.792 0 1.476.574 1.695 1.312m3.117-6.125v8.75c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75M4.75 8.563c0-.602.328-1.176.875-1.504.52-.301 1.203-.301 1.75 0 .52.328.875.902.875 1.503 0 .63-.355 1.204-.875 1.532-.547.3-1.23.3-1.75 0a1.78 1.78 0 0 1-.875-1.531' />
    </g>
    <defs>
      <clipPath id='4a4538e9fcf5e07841247884fc15f61f__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserSmBoldIcon);
export default ForwardRef;
