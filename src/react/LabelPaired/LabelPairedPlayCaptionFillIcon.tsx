import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayCaptionFillIcon = (
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
      <path d='M1.71 4.414 8.46 8.54c.33.211.54.586.54.961 0 .398-.21.773-.54.96l-6.75 4.126c-.35.21-.796.234-1.147.023C.21 14.422 0 14.047 0 13.625v-8.25c0-.398.21-.773.563-.96.351-.212.796-.212 1.148 0' />
    </g>
    <defs>
      <clipPath id='73f94a47ef3adaffe87483d989acd9ac__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayCaptionFillIcon);
export default ForwardRef;
