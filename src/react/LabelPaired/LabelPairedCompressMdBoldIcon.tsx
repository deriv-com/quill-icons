import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 5.75v3.5q-.063.687-.75.75H.75Q.063 9.937 0 9.25q.063-.687.75-.75H3.5V5.75q.063-.687.75-.75.687.063.75.75M.75 14h3.5q.687.063.75.75v3.5q-.063.687-.75.75-.687-.063-.75-.75V15.5H.75q-.687-.063-.75-.75.063-.687.75-.75m9.75-8.25V8.5h2.75q.687.063.75.75-.063.687-.75.75h-3.5q-.687-.063-.75-.75v-3.5q.063-.687.75-.75.687.063.75.75M9.75 14h3.5q.687.063.75.75-.063.687-.75.75H10.5v2.75q-.063.687-.75.75-.687-.063-.75-.75v-3.5q.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='1604d2c805ebce5033cdbce834886962__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressMdBoldIcon);
export default ForwardRef;
