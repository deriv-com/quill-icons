import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.125 3.875q.023-.352.375-.375.352.023.375.375v.398q1.454.165 2.39 1.196.962 1.03.985 2.531v.68a3.9 3.9 0 0 0 1.125 2.742l.07.07a1 1 0 0 1 .305.727.94.94 0 0 1-.305.726.94.94 0 0 1-.726.305H1.28a.94.94 0 0 1-.726-.305.94.94 0 0 1-.305-.726q0-.421.305-.75l.07-.047A3.9 3.9 0 0 0 1.75 8.68V8q.024-1.5.984-2.531.938-1.032 2.391-1.196zM5.5 5q-1.266.024-2.133.867Q2.524 6.735 2.5 8v.68q-.024 1.898-1.36 3.258l-.046.07a.3.3 0 0 0-.094.21q.024.259.281.282H9.72q.258-.024.281-.281a.3.3 0 0 0-.094-.211l-.047-.07Q8.524 10.578 8.5 8.68V8q-.024-1.266-.89-2.133Q6.765 5.024 5.5 5m-.703 9.258q.188.468.703.492.516-.024.703-.492.141-.328.492-.235.305.14.211.47-.165.444-.539.726-.375.28-.867.281-.492 0-.867-.281t-.54-.727q-.093-.328.212-.469.351-.093.492.235' />
    </g>
    <defs>
      <clipPath id='3fcf478102c10b11bb0930fdc4c7f0d3__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellCaptionRegularIcon);
export default ForwardRef;
