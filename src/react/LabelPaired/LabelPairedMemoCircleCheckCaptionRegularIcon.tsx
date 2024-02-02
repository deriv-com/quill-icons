import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckCaptionRegularIcon = (
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
      <path d='M7.75 4.25h-6a.73.73 0 0 0-.54.21A.73.73 0 0 0 1 5v9q0 .328.21.54.212.21.54.21h5.438q.351.421.796.727a1.2 1.2 0 0 1-.234.023h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14V5q.024-.632.445-1.055.422-.421 1.055-.445h6q.633.024 1.055.445.421.423.445 1.055v3.164a3 3 0 0 0-.75.281V5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21m-6 2.625q.023-.352.375-.375h5.25q.352.023.375.375-.023.352-.375.375h-5.25q-.352-.023-.375-.375m.375 1.875h4.5q.352.023.375.375-.023.352-.375.375h-4.5q-.352-.023-.375-.375.023-.352.375-.375m0 2.25h3q.352.023.375.375-.023.352-.375.375h-3q-.352-.023-.375-.375.023-.352.375-.375m8.25 3.75q.703 0 1.313-.352.609-.351.96-.96.352-.61.352-1.313t-.352-1.312a2.6 2.6 0 0 0-.96-.961 2.6 2.6 0 0 0-1.313-.352q-.703 0-1.312.352a2.6 2.6 0 0 0-.961.96 2.6 2.6 0 0 0-.352 1.313q0 .703.352 1.313.351.609.96.96.61.352 1.313.352m0-6q.915 0 1.688.445.773.446 1.242 1.242.445.797.445 1.688t-.445 1.688a3.4 3.4 0 0 1-1.242 1.242 3.3 3.3 0 0 1-1.688.445q-.915 0-1.687-.445a3.4 3.4 0 0 1-1.243-1.242A3.4 3.4 0 0 1 7 12.125q0-.89.445-1.687a3.4 3.4 0 0 1 1.242-1.243 3.3 3.3 0 0 1 1.688-.445m1.055 2.367q.258-.234.515 0 .236.258 0 .516l-1.687 1.687q-.258.236-.516 0l-.937-.937q-.236-.258 0-.516.258-.234.515 0l.68.656z' />
    </g>
    <defs>
      <clipPath id='34d4b199e50c607de54270b476162419__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckCaptionRegularIcon);
export default ForwardRef;
