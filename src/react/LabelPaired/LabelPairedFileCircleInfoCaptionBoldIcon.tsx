import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoCaptionBoldIcon = (
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
      <path d='M1.75 14.375h5.18q.421.657 1.054 1.102a1.2 1.2 0 0 1-.234.023h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14V5q.024-.632.445-1.055.422-.421 1.055-.445h3.89q.61 0 1.055.445l2.11 2.11q.445.445.445 1.078v1.031q-.609.165-1.125.492V7.25H6.25a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.75q-.352.023-.375.375v9q.023.352.375.375m8.625-5.625q.915 0 1.688.445.773.446 1.242 1.242.445.797.445 1.688t-.445 1.688a3.4 3.4 0 0 1-1.242 1.242 3.3 3.3 0 0 1-1.688.445q-.915 0-1.687-.445a3.4 3.4 0 0 1-1.243-1.242A3.4 3.4 0 0 1 7 12.125q0-.89.445-1.687a3.4 3.4 0 0 1 1.242-1.243 3.3 3.3 0 0 1 1.688-.445m0 2.25q.515-.047.563-.562-.048-.516-.563-.563-.516.047-.562.563.045.514.562.562m-.75 1.125q.023.352.375.375v1.125q-.352.023-.375.375.023.352.375.375h.75q.352-.023.375-.375-.023-.352-.375-.375v-1.5q-.023-.352-.375-.375H10q-.352.023-.375.375' />
    </g>
    <defs>
      <clipPath id='b007394595d8087e95accc26651b1205__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoCaptionBoldIcon);
export default ForwardRef;
