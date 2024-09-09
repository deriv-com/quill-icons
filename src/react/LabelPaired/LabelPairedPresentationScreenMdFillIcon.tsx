import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 4h16c.531 0 1 .469 1 1 0 .563-.469 1-1 1v7c0 1.125-.906 2-2 2h-5v1.094l2.188 2.218a.964.964 0 0 1 0 1.407.964.964 0 0 1-1.407 0L9 17.937 7.188 19.72a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407L8 16.095V15H3c-1.125 0-2-.875-2-2V6c-.562 0-1-.437-1-1 0-.531.438-1 1-1m2 2v7h12V6z' />
    </g>
    <defs>
      <clipPath id='f9e2d6d3c1f10caef4ff39adbf955bc2__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenMdFillIcon);
export default ForwardRef;
