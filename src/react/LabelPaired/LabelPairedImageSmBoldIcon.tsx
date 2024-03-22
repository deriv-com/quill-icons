import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageSmBoldIcon = (
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
      <path d='M12.25 5.938H1.75a.45.45 0 0 0-.437.437v8.777l.109-.164 2.187-3.062a.67.67 0 0 1 .547-.301c.192 0 .41.11.52.273l.847 1.176 2.27-2.926c.11-.164.3-.273.52-.273.19 0 .382.11.519.273l3.719 4.813.136.164v-8.75a.47.47 0 0 0-.437-.437M1.75 4.625h10.5c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75m2.188 5.25a1.31 1.31 0 0 1-1.149-.656c-.246-.383-.246-.903 0-1.313.246-.383.656-.656 1.148-.656.465 0 .876.273 1.122.656.246.41.246.93 0 1.313-.247.41-.657.656-1.122.656' />
    </g>
    <defs>
      <clipPath id='210f8c6dfd251b32203d7667711f5e39__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageSmBoldIcon);
export default ForwardRef;
