import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.883 12.5.937.75H3.281a.94.94 0 0 1-.726-.305.94.94 0 0 1-.305-.726q0-.421.305-.75l.07-.047A3.9 3.9 0 0 0 3.75 8.68v-.235l.75.586a4.7 4.7 0 0 1-1.36 2.906l-.046.07A.3.3 0 0 0 3 12.22q.024.258.281.281zM7.125 4.273v-.398q.023-.352.375-.375.352.023.375.375v.398q1.454.165 2.39 1.196.962 1.03.985 2.531v.68a3.9 3.9 0 0 0 1.125 2.742l.07.047a.3.3 0 0 0 .047.07l-1.758-1.383A4.8 4.8 0 0 1 10.5 8.68V8q-.024-1.266-.867-2.133Q8.765 5.024 7.5 5q-1.29.024-2.133.89l-.61-.468q.939-.985 2.368-1.149m-.328 9.985q.188.468.703.492.516-.024.703-.492.141-.328.492-.235.305.14.211.47-.164.444-.539.726-.375.28-.867.281-.492 0-.867-.281t-.54-.727q-.093-.328.212-.469.351-.093.492.235M.609 3.57l14.25 11.274q.258.234.07.515-.256.258-.538.07L.14 4.18q-.258-.256-.07-.538.256-.235.538-.07' />
    </g>
    <defs>
      <clipPath id='2ddd74d4aa0f538c520f9d972ead59b3__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashCaptionRegularIcon);
export default ForwardRef;
