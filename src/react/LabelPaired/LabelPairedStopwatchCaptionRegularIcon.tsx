import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchCaptionRegularIcon = (
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
      <path d='M3.25 3.875q.023-.352.375-.375h3.75q.352.023.375.375-.023.352-.375.375h-1.5v1.523q1.782.165 3 1.336l.867-.867q.258-.234.516 0 .234.258 0 .516l-.89.89q.983 1.266 1.007 2.977-.047 2.062-1.43 3.445T5.5 15.5q-2.062-.047-3.445-1.43t-1.43-3.445q.047-1.969 1.313-3.328Q3.202 5.96 5.124 5.773V4.25h-1.5q-.352-.023-.375-.375m-1.875 6.75q0 1.125.563 2.063.539.936 1.5 1.5a4.1 4.1 0 0 0 2.062.562q1.078 0 2.063-.562a4.06 4.06 0 0 0 1.5-1.5 3.93 3.93 0 0 0 .562-2.063q0-1.125-.562-2.062a4.06 4.06 0 0 0-1.5-1.5A4.1 4.1 0 0 0 5.5 6.5q-1.078 0-2.062.563-.961.563-1.5 1.5a3.93 3.93 0 0 0-.563 2.062m4.5-2.25V11q-.023.352-.375.375-.352-.023-.375-.375V8.375Q5.148 8.023 5.5 8q.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='90a327664a1828577c5012aaf611b358__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchCaptionRegularIcon);
export default ForwardRef;
