import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardCaptionBoldIcon = (
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
      <path d='M1.75 6.125q-.352.023-.375.375v6q.023.352.375.375h10.5q.352-.023.375-.375v-6q-.023-.352-.375-.375zM.25 6.5q.024-.632.445-1.055Q1.117 5.024 1.75 5h10.5q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 12.5zM4.375 11h5.25q.352.023.375.375v.375q-.023.352-.375.375h-5.25q-.352-.023-.375-.375v-.375q.023-.352.375-.375M2.688 9.313q.023-.352.374-.376h.376q.351.024.374.376v.374q-.023.352-.374.376h-.376q-.351-.024-.374-.376zm.374-2.25h.376q.351.022.374.375v.375q-.023.351-.374.375h-.376q-.351-.024-.374-.376v-.375q.023-.351.374-.375m1.5 2.25q.024-.352.375-.376h.375q.353.024.375.376v.374q-.022.352-.375.376h-.375q-.351-.024-.375-.376zm.375-2.25h.375q.353.022.375.375v.375q-.022.351-.375.375h-.375q-.351-.024-.375-.376v-.375q.024-.351.375-.375m1.5 2.25q.024-.352.375-.376h.375q.353.024.375.376v.374q-.022.352-.375.376h-.375q-.351-.024-.375-.376zm.375-2.25h.375q.353.022.375.375v.375q-.022.351-.375.375h-.375q-.351-.024-.375-.376v-.375q.024-.351.375-.375m1.5 2.25q.024-.352.376-.376h.374q.352.024.376.376v.374q-.024.352-.376.376h-.374q-.352-.024-.376-.376zm.376-2.25h.374q.352.022.376.375v.375q-.024.351-.376.375h-.374q-.352-.024-.376-.376v-.375q.024-.351.376-.375m1.5 2.25q.023-.352.374-.376h.376q.351.024.374.376v.374q-.023.352-.374.376h-.376q-.351-.024-.374-.376zm.374-2.25h.376q.351.022.374.375v.375q-.023.351-.374.375h-.376q-.351-.024-.374-.376v-.375q.023-.351.374-.375' />
    </g>
    <defs>
      <clipPath id='554956ef415ba03ab6d768862531faf4__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardCaptionBoldIcon);
export default ForwardRef;
