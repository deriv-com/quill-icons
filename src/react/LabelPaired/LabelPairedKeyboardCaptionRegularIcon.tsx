import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardCaptionRegularIcon = (
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
      <path d='M1.75 5.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6q0 .328.21.54.212.21.54.21h10.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-6a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-1.5.75q.024-.632.445-1.055Q1.117 5.024 1.75 5h10.5q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 12.5zm2.063.188h.374q.352.022.376.375v.375q-.024.351-.376.375h-.374q-.352-.024-.376-.375v-.375q.024-.353.375-.375m-.376 2.625q.024-.352.375-.376h.376q.351.024.374.376v.374q-.023.352-.374.376h-.376q-.351-.024-.374-.376zm.375 1.874h.376q.351.024.374.376v.374q-.023.352-.374.376h-.376q-.351-.024-.374-.376v-.374q.022-.352.375-.376m1.876-4.124q.022-.353.375-.375h.375q.351.022.375.375v.375q-.024.351-.375.375h-.375q-.353-.024-.375-.375zm.375 1.875h.375q.351.023.375.374v.376q-.024.351-.375.374h-.375q-.353-.023-.375-.374v-.376q.022-.351.375-.374m1.875-1.876q.022-.351.375-.375h.375q.351.024.375.375v.375q-.024.353-.375.375h-.375q-.353-.022-.375-.375zm.375 1.875h.375q.351.024.375.376v.374q-.024.352-.375.376h-.375q-.353-.024-.375-.376v-.374q.022-.352.375-.376m1.875-1.874q.023-.353.374-.375h.376q.351.022.374.375v.375q-.023.351-.374.375h-.376q-.351-.024-.374-.375zm.374 1.875h.376q.351.023.374.374v.376q-.023.351-.374.374h-.376q-.351-.023-.374-.374v-.376q.023-.351.374-.374m1.876-1.876q.023-.351.374-.375h.376q.351.024.374.375v.375q-.023.353-.374.375h-.376q-.351-.022-.374-.375zm.374 1.875h.376q.351.024.374.376v.374q-.023.352-.374.376h-.376q-.351-.024-.374-.376v-.374q.023-.352.374-.376m-.374 2.626q.023-.352.374-.376h.376q.351.024.374.376v.374q-.023.352-.374.376h-.376q-.351-.024-.374-.376zm-6.563-.188h5.25q.352.023.375.375-.023.352-.375.375h-5.25q-.352-.023-.375-.375.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='dc9d710fc422275d5273dffe5fdb608d__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardCaptionRegularIcon);
export default ForwardRef;
