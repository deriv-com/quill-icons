import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 5.75q-.352.023-.375.375v6.75q.023.352.375.375H2.5q.352-.023.375-.375v-6.75q-.023-.352-.375-.375zM.25 6.125q.024-.468.328-.797.329-.304.797-.328H2.5q.469.024.797.328.304.328.328.797v6.75a1.22 1.22 0 0 1-.328.797A1.22 1.22 0 0 1 2.5 14H1.375a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zM5.5 5.75q-.352.023-.375.375v6.75q.023.352.375.375h1.125q.352-.023.375-.375v-6.75q-.023-.352-.375-.375zm-1.125.375q.024-.468.328-.797.328-.304.797-.328h1.125q.469.024.797.328.304.328.328.797v6.75a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328H5.5a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797z' />
    </g>
    <defs>
      <clipPath id='aa866155b55d0be4ae2160351e1d2e26__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseCaptionRegularIcon);
export default ForwardRef;
