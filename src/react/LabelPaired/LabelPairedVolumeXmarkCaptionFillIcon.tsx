import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.305 4.32A.78.78 0 0 1 7.75 5v9c0 .305-.187.563-.445.703a.76.76 0 0 1-.82-.14L3.32 11.75H1.75a1.48 1.48 0 0 1-1.5-1.5v-1.5c0-.82.656-1.5 1.5-1.5h1.57l3.164-2.79a.76.76 0 0 1 .82-.14m2.906 3.094 1.289 1.29 1.29-1.29c.21-.21.562-.21.773 0 .234.234.234.586 0 .797L12.273 9.5l1.29 1.29c.234.233.234.585 0 .796a.513.513 0 0 1-.774 0l-1.289-1.29-1.29 1.29c-.233.234-.585.234-.796 0-.234-.211-.234-.563 0-.797l1.29-1.289-1.29-1.29c-.234-.21-.234-.562 0-.796.211-.21.563-.21.797 0' />
    </g>
    <defs>
      <clipPath id='569e2db4e4d6ff9ebac74dd7cf24a1d0__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkCaptionFillIcon);
export default ForwardRef;
