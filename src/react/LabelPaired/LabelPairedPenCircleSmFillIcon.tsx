import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M9.762 7.578a1.107 1.107 0 0 0-1.532 0l-.601.602L9.57 10.12l.602-.601c.41-.438.41-1.122 0-1.532zm-5.633 4.074a.86.86 0 0 0-.219.41l-.41 1.641c-.027.164 0 .328.11.438.109.109.273.136.41.109l1.668-.41c.136-.055.273-.137.382-.246l2.899-2.871L7.027 8.78z' />
    </g>
    <defs>
      <clipPath id='c3749b84f26d13a56456e132b10382ae__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleSmFillIcon);
export default ForwardRef;
