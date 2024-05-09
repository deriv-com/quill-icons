import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpLeftCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m1.5-8.625H3.938a.555.555 0 0 0-.563.563v3.75c0 .328.234.562.563.562a.555.555 0 0 0 .562-.562V8.797l3.164 3.164c.211.234.563.234.797 0 .21-.211.21-.563 0-.797L5.273 8H7.5a.555.555 0 0 0 .563-.562.57.57 0 0 0-.563-.563' />
    </g>
    <defs>
      <clipPath id='6acb284b8fdb8e47e3f219aa6d0e614a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpLeftCaptionFillIcon);
export default ForwardRef;
