import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneCaptionBoldIcon = (
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
      <path d='M1.5 14.375h5.25q.352-.023.375-.375v-1.5H8.25V14a1.52 1.52 0 0 1-.445 1.055q-.423.421-1.055.445H1.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V8.75q.024-.633.445-1.055.423-.421 1.055-.445H3v1.125H1.5q-.352.023-.375.375V14q.023.352.375.375m3.75-3.75h5.25q.352-.023.375-.375V5q-.023-.352-.375-.375H5.25q-.352.023-.375.375v5.25q.023.352.375.375m-1.5-.375V5q.024-.632.445-1.055.423-.421 1.055-.445h5.25q.633.024 1.055.445.421.423.445 1.055v5.25a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H5.25a1.52 1.52 0 0 1-1.055-.445 1.52 1.52 0 0 1-.445-1.055' />
    </g>
    <defs>
      <clipPath id='5fa8ba6efa6a77ec3ceece32e5064fd9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneCaptionBoldIcon);
export default ForwardRef;
