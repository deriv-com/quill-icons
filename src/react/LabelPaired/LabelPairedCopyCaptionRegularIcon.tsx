import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.25 11.75c.398 0 .75-.328.75-.75V6.219a.38.38 0 0 0-.117-.258L8.289 4.367a.38.38 0 0 0-.258-.117H5.5a.755.755 0 0 0-.75.75v6c0 .422.328.75.75.75zm1.148-6.328c.211.21.352.516.352.797V11c0 .844-.68 1.5-1.5 1.5H5.5A1.48 1.48 0 0 1 4 11V5c0-.82.656-1.5 1.5-1.5h2.531c.281 0 .586.14.797.352zM1.75 6.5h1.5v.75h-1.5A.755.755 0 0 0 1 8v6c0 .422.328.75.75.75H5.5c.398 0 .75-.328.75-.75v-.75H7V14c0 .844-.68 1.5-1.5 1.5H1.75A1.48 1.48 0 0 1 .25 14V8c0-.82.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='692fd7ad686c0d2d8499bd39e996bc7c__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyCaptionRegularIcon);
export default ForwardRef;
