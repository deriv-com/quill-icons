import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderMdBoldIcon = (
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
      <path d='M2.75 5h.5q.687.063.75.75-.063.687-.75.75h-.5q-.531 0-.875.375-.375.344-.375.875v.5q-.063.687-.75.75-.687-.063-.75-.75v-.5q.03-1.156.813-1.937.78-.781 1.937-.813m-2 5q.687.063.75.75v2.5q-.063.687-.75.75-.687-.063-.75-.75v-2.5q.063-.687.75-.75m12.5 0q.687.063.75.75v2.5q-.063.687-.75.75-.687-.063-.75-.75v-2.5q.063-.687.75-.75m0-1q-.687-.063-.75-.75v-.5q0-.531-.375-.875-.344-.375-.875-.375h-.5q-.687-.063-.75-.75.063-.687.75-.75h.5q1.156.03 1.938.813.78.78.812 1.937v.5q-.063.687-.75.75m.75 6.75v.5q-.031 1.156-.812 1.938-.781.78-1.938.812h-.5q-.687-.063-.75-.75.063-.687.75-.75h.5q.531 0 .875-.375.375-.344.375-.875v-.5q.063-.687.75-.75.687.063.75.75m-12.5 0v.5q0 .531.375.875.344.375.875.375h.5q.687.063.75.75-.063.687-.75.75h-.5q-1.156-.031-1.937-.812Q.03 17.406 0 16.25v-.5q.063-.687.75-.75.687.063.75.75M5.75 19q-.687-.063-.75-.75.063-.687.75-.75h2.5q.687.063.75.75-.063.687-.75.75zM5 5.75q.063-.687.75-.75h2.5q.687.063.75.75-.063.687-.75.75h-2.5q-.687-.063-.75-.75' />
    </g>
    <defs>
      <clipPath id='6d0afb55b9f74aa708a84d25da2a37b8__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderMdBoldIcon);
export default ForwardRef;
