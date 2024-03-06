import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderCaptionRegularIcon = (
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
      <path d='M1.125 3.5h2.25q.352.023.375.375-.023.352-.375.375h-2.25q-.352.023-.375.375v2.25q-.023.352-.375.375Q.023 7.227 0 6.875v-2.25q.024-.468.328-.797.329-.304.797-.328m9.75 0q.469.024.797.328.304.329.328.797v2.25q-.023.352-.375.375-.352-.023-.375-.375v-2.25q-.023-.352-.375-.375h-2.25q-.352-.023-.375-.375.023-.352.375-.375zM0 14.375v-2.25q.023-.352.375-.375.352.023.375.375v2.25q.023.352.375.375h2.25q.352.023.375.375-.023.352-.375.375h-2.25a1.22 1.22 0 0 1-.797-.328A1.22 1.22 0 0 1 0 14.375M10.875 15.5h-2.25q-.352-.023-.375-.375.023-.352.375-.375h2.25q.352-.023.375-.375v-2.25q.023-.352.375-.375.352.023.375.375v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328m-5.25-6.937q-.047.514-.562.562-.516-.047-.563-.562.047-.516.563-.563.514.047.562.563m1.313.562q-.516-.047-.563-.562.047-.516.563-.563.514.047.562.563-.047.514-.562.562M6 6.5q-.82 0-1.5.398A3.1 3.1 0 0 0 3.398 8 3 3 0 0 0 3 9.5q0 .797.398 1.5A3.1 3.1 0 0 0 4.5 12.102q.68.398 1.5.398t1.5-.398A3.1 3.1 0 0 0 8.602 11Q9 10.297 9 9.5T8.602 8A3.1 3.1 0 0 0 7.5 6.898 2.9 2.9 0 0 0 6 6.5m0 6.75a3.74 3.74 0 0 1-1.875-.492 3.9 3.9 0 0 1-1.383-1.383 3.82 3.82 0 0 1 0-3.75 3.9 3.9 0 0 1 1.383-1.383A3.74 3.74 0 0 1 6 5.75q1.008 0 1.875.492.868.516 1.383 1.383a3.82 3.82 0 0 1 0 3.75 3.9 3.9 0 0 1-1.383 1.383A3.74 3.74 0 0 1 6 13.25m-.984-3.187q.328.538.984.562.657-.024.984-.562.188-.282.516-.141.257.21.117.515-.516.891-1.617.938-1.101-.047-1.617-.937-.165-.306.14-.516.306-.14.493.14' />
    </g>
    <defs>
      <clipPath id='9a16527097085b661446c50a23456527__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderCaptionRegularIcon);
export default ForwardRef;