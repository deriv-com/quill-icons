import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.29 3.914 5.335 7.06c.629-.957 1.613-1.668 2.789-1.887v-.547c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v.547c1.996.383 3.5 2.16 3.5 4.266v.71c0 1.23.41 2.434 1.176 3.418l.41.493c.137.191.191.437.11.629l2.406 1.914c.3.218.355.628.109.902a.604.604 0 0 1-.902.11L.496 4.925a.604.604 0 0 1-.11-.903.604.604 0 0 1 .903-.109M6.374 7.88l6.18 4.84a6.7 6.7 0 0 1-.492-2.57v-.711c0-1.668-1.395-3.063-3.063-3.063a3.02 3.02 0 0 0-2.625 1.504m4.977 7.246h-7.82a.65.65 0 0 1-.602-.355.68.68 0 0 1 .082-.711l.41-.493c.765-.984 1.203-2.187 1.203-3.418v-.3l1.258.984a6.7 6.7 0 0 1-1.04 2.98h4.84zM10.75 16c0 .465-.191.93-.52 1.258A1.71 1.71 0 0 1 9 17.75c-.465 0-.93-.164-1.258-.492S7.25 16.465 7.25 16h3.5' />
    </g>
    <defs>
      <clipPath id='12ff9680dc4c77c3cc7e231fc961668d__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashSmBoldIcon);
export default ForwardRef;
