import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownCaptionFillIcon = (
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
      <path d='M6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3 5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5m-3.023 6.586 2.625 2.625c.21.234.562.234.796 0L9 10.086a.513.513 0 0 0 0-.774.513.513 0 0 0-.773 0l-1.665 1.665v-4.29A.57.57 0 0 0 6 6.126a.555.555 0 0 0-.562.563l-.024 4.289L3.75 9.312a.513.513 0 0 0-.773 0 .513.513 0 0 0 0 .774' />
    </g>
    <defs>
      <clipPath id='e6278a13cf371a43d372b83369966574__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownCaptionFillIcon);
export default ForwardRef;
