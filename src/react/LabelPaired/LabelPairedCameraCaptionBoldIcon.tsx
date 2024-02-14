import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraCaptionBoldIcon = (
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
      <path d='M4.664 4.25h2.672q.422 0 .773.258.329.234.47.633l.21.609H10.5q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 13.25v-6q.024-.632.445-1.055.423-.421 1.055-.445h1.71l.212-.61.539.188-.54-.187a1.28 1.28 0 0 1 .47-.633q.351-.258.773-.258M4.5 5.516l-.328.984a.6.6 0 0 1-.54.375H1.5q-.352.023-.375.375v6q.023.352.375.375h9q.352-.023.375-.375v-6q-.023-.352-.375-.375H8.367a.55.55 0 0 1-.515-.375l-.329-.984q-.07-.141-.187-.141H4.664q-.117 0-.164.14M6 12.875q-.703 0-1.312-.352a2.6 2.6 0 0 1-.961-.96 2.6 2.6 0 0 1-.352-1.313q0-.703.352-1.312.351-.61.96-.961A2.6 2.6 0 0 1 6 7.625q.703 0 1.313.352.609.351.96.96.352.61.352 1.313t-.352 1.313a2.6 2.6 0 0 1-.96.96A2.6 2.6 0 0 1 6 12.875M4.5 10.25q.024.844.75 1.29.75.42 1.5 0 .726-.446.75-1.29-.024-.843-.75-1.29-.75-.42-1.5 0-.726.446-.75 1.29' />
    </g>
    <defs>
      <clipPath id='cb7d9dc05db06b4173699e37aeef5dc1__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraCaptionBoldIcon);
export default ForwardRef;
