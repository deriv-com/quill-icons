import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroCaptionRegularIcon = (
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
      <path d='M11.25 9.5a5.4 5.4 0 0 0-.703-2.625 5.4 5.4 0 0 0-1.922-1.922 5.25 5.25 0 0 0-5.25 0 5.4 5.4 0 0 0-1.922 1.922A5.4 5.4 0 0 0 .75 9.5q.024 1.43.703 2.625a5.4 5.4 0 0 0 1.922 1.922 5.25 5.25 0 0 0 5.25 0 5.4 5.4 0 0 0 1.922-1.922A5.4 5.4 0 0 0 11.25 9.5M0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5m3 .375h.563a3 3 0 0 1-.024-.352q0-.21.023-.398H3q-.352-.023-.375-.375.023-.352.375-.375h.797q.329-.68.96-1.078a2.5 2.5 0 0 1 1.43-.422h.961q.353.023.375.375-.022.352-.375.375h-.96q-.962.024-1.5.75H6.75q.352.023.375.375-.023.352-.375.375H4.336a1.6 1.6 0 0 0-.047.398q0 .188.047.352H6.75q.352.023.375.375-.023.352-.375.375H4.64q.563.75 1.548.797h.96q.353.023.375.375-.022.328-.375.375h-.96a2.7 2.7 0 0 1-1.454-.445 2.56 2.56 0 0 1-.937-1.102H3q-.352-.023-.375-.375.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='e098acff9da706e1__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroCaptionRegularIcon);
export default ForwardRef;
