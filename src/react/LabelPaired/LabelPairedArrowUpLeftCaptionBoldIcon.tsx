import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.313 5.75v.023h5.625c.304 0 .562.235.562.563a.57.57 0 0 1-.562.562h-4.29l5.415 5.415a.513.513 0 0 1 0 .773.513.513 0 0 1-.774 0L1.875 7.672v4.266a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V6.312c0-.304.234-.562.563-.562' />
    </g>
    <defs>
      <clipPath id='f6bec52402fa6e94d8d8e39f01c90666__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftCaptionBoldIcon);
export default ForwardRef;
