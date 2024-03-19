import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownRightCaptionFillIcon = (
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
      <path d='M6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3 5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5m-1.5 8.625h3.54a.54.54 0 0 0 .562-.562v-3.75a.555.555 0 0 0-.563-.563.57.57 0 0 0-.562.563v2.414L4.312 7.062a.513.513 0 0 0-.773 0 .513.513 0 0 0 0 .774L6.703 11H4.5a.555.555 0 0 0-.562.563c0 .328.234.562.562.562' />
    </g>
    <defs>
      <clipPath id='4b598c51bc9108370aaaa0a4e7573d3f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownRightCaptionFillIcon);
export default ForwardRef;
