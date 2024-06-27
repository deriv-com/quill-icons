import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m3.023-6.586L6.375 6.29a.55.55 0 0 0-.773 0L2.977 8.914c-.235.234-.235.586 0 .797.21.234.562.234.796 0l1.664-1.664v4.265c0 .329.235.563.563.563a.555.555 0 0 0 .563-.562V8.047L8.227 9.71c.21.234.562.234.796 0 .211-.211.211-.563 0-.797' />
    </g>
    <defs>
      <clipPath id='9adb66fafbe2e6473eb67dd440511171__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpCaptionFillIcon);
export default ForwardRef;
