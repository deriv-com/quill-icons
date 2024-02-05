import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoCaptionRegularIcon = (
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
      <path d='M1.75 14.75h5.438q.351.421.796.727a1.2 1.2 0 0 1-.234.023h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14V5q.024-.632.445-1.055.422-.421 1.055-.445h3.656q.469 0 .797.328l2.719 2.719q.328.328.328.797v.797q-.399.117-.75.304V8H5.875a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797V4.25h-3a.73.73 0 0 0-.54.21A.73.73 0 0 0 1 5v9q0 .328.21.54.212.21.54.21m6.75-7.5a.6.6 0 0 0-.117-.164L5.664 4.367a.35.35 0 0 0-.164-.094v2.602q.023.352.375.375zm4.5 4.875q0-.703-.352-1.312a2.6 2.6 0 0 0-.96-.961 2.6 2.6 0 0 0-1.313-.352q-.703 0-1.312.352a2.6 2.6 0 0 0-.961.96 2.6 2.6 0 0 0-.352 1.313q0 .703.352 1.313.351.609.96.96.61.352 1.313.352t1.313-.352.96-.96q.352-.61.352-1.313m-6 0q0-.915.445-1.687.446-.774 1.242-1.243a3.4 3.4 0 0 1 1.688-.445q.89 0 1.688.445.796.47 1.242 1.242.445.774.445 1.688 0 .915-.445 1.688t-1.242 1.242a3.4 3.4 0 0 1-1.688.445 3.4 3.4 0 0 1-1.687-.445 3.4 3.4 0 0 1-1.243-1.242A3.3 3.3 0 0 1 7 12.125m3.375-.75q-.516-.047-.562-.562.045-.516.562-.563.515.047.563.563-.048.514-.563.562m-.75 2.25q.023-.352.375-.375v-.75q-.352-.023-.375-.375.023-.352.375-.375h.375q.352.023.375.375v1.125q.352.023.375.375-.023.352-.375.375H10q-.352-.023-.375-.375' />
    </g>
    <defs>
      <clipPath id='bcb71dda980d048a1b5af1f9595568da__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoCaptionRegularIcon);
export default ForwardRef;
