import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckSmFillIcon = (
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
      <path d='m7.355 3.832 5.141 2.188c.602.273 1.066.847 1.066 1.558-.027 2.734-1.148 7.684-5.851 9.953a1.68 1.68 0 0 1-1.45 0C1.56 15.261.439 10.313.439 7.578.41 6.868.875 6.293 1.477 6.02l5.14-2.188a.87.87 0 0 1 .738 0m1.176 5.606c0-.82-.71-1.532-1.531-1.532-.848 0-1.531.711-1.531 1.532 0 .628.355 1.148.875 1.394v1.887c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656v-1.887c.492-.246.875-.766.875-1.395' />
    </g>
    <defs>
      <clipPath id='fb79ba2a0b9f702314e591511e771581__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckSmFillIcon);
export default ForwardRef;
