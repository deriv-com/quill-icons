import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 5q.687.063.75.75v12.5q-.063.687-.75.75-.687-.063-.75-.75V5.75Q.063 5.063.75 5M3.5 5q.47.031.5.5v13q-.03.47-.5.5-.469-.03-.5-.5v-13q.031-.469.5-.5m2.25 0q.687.063.75.75v12.5q-.063.687-.75.75-.687-.063-.75-.75V5.75q.063-.687.75-.75m3.5 0q.687.063.75.75v12.5q-.063.687-.75.75-.687-.063-.75-.75V5.75q.063-.687.75-.75m5.25.75q.063-.687.75-.75.687.063.75.75v12.5q-.063.687-.75.75-.687-.063-.75-.75zm-2-.25q.031-.469.5-.5.47.031.5.5v13q-.03.47-.5.5-.469-.03-.5-.5z' />
    </g>
    <defs>
      <clipPath id='f8daa2341ffd74bcd4a3cef842398666__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeMdBoldIcon);
export default ForwardRef;
