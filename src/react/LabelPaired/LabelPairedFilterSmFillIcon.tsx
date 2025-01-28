import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterSmFillIcon = (
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
      <path d='M.082 5.254a1.13 1.13 0 0 1 1.012-.629h11.812c.41 0 .793.246.985.629.164.383.109.848-.164 1.176L8.75 12.527V16a.85.85 0 0 1-.492.793.94.94 0 0 1-.93-.082l-1.75-1.313c-.219-.164-.328-.41-.328-.71v-2.16L.246 6.43a1.15 1.15 0 0 1-.164-1.176' />
    </g>
    <defs>
      <clipPath id='dd1c4b7361b2ef09d443059273f8b033__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterSmFillIcon);
export default ForwardRef;
