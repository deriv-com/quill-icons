import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.5 3.75a.9.9 0 0 1 .875.875v.547c1.996.383 3.5 2.16 3.5 4.266v.71c0 1.23.41 2.434 1.176 3.418l.41.493a.68.68 0 0 1 .082.71.64.64 0 0 1-.574.356H1.03a.65.65 0 0 1-.601-.355.68.68 0 0 1 .082-.711l.41-.493c.766-.984 1.203-2.187 1.203-3.418v-.71c0-2.106 1.504-3.883 3.5-4.266v-.547c0-.465.383-.875.875-.875m0 2.625a3.075 3.075 0 0 0-3.062 3.063v.71c0 1.313-.383 2.57-1.094 3.665h8.285a6.67 6.67 0 0 1-1.066-3.665v-.71c0-1.668-1.395-3.063-3.063-3.063M8.25 16c0 .465-.191.93-.52 1.258a1.71 1.71 0 0 1-1.23.492c-.465 0-.93-.164-1.258-.492S4.75 16.465 4.75 16h3.5' />
    </g>
    <defs>
      <clipPath id='4d23efaf040c109cad5a3cf759c2e4ea__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSmBoldIcon);
export default ForwardRef;
