import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftCaptionBoldIcon = (
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
      <path d='M0 4.063C0 3.758.234 3.5.563 3.5a.57.57 0 0 1 .562.563v10.875a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562zm4.125 3.562h6.75v-1.5h-6.75zM3 6.125C3 5.515 3.492 5 4.125 5h6.75C11.485 5 12 5.516 12 6.125v1.5c0 .633-.516 1.125-1.125 1.125h-6.75A1.11 1.11 0 0 1 3 7.625zm1.125 6.75h3.75v-1.5h-3.75zM3 11.375c0-.61.492-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125v1.5C9 13.508 8.484 14 7.875 14h-3.75A1.11 1.11 0 0 1 3 12.875z' />
    </g>
    <defs>
      <clipPath id='124a69d95f69af2d762e7d3f3e8fe4af__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftCaptionBoldIcon);
export default ForwardRef;
