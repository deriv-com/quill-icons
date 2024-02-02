import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.875 3.875v11.25q-.023.352-.375.375-.352-.023-.375-.375V3.875q.023-.352.375-.375.352.023.375.375M10.5 5.75q.352.023.375.375v9q-.023.352-.375.375-.352-.023-.375-.375v-9q.023-.352.375-.375M7.875 8.375v6.75q-.023.352-.375.375-.352-.023-.375-.375v-6.75Q7.148 8.023 7.5 8q.352.023.375.375M4.5 10.25q.352.023.375.375v4.5q-.023.352-.375.375-.352-.023-.375-.375v-4.5q.023-.352.375-.375m-3 2.25q.352.023.375.375v2.25q-.023.352-.375.375-.352-.023-.375-.375v-2.25q.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='d19afceeff0a6c8b__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalCaptionRegularIcon);
export default ForwardRef;
