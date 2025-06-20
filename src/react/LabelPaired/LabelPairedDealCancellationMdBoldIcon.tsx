import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.531 7.813h3.157q.843 0 1.5.28c.468.157.843.438 1.187.782.313.344.563.781.719 1.313.187.53.281 1.124.281 1.812 0 .719-.094 1.313-.281 1.844a3.3 3.3 0 0 1-.719 1.312 3.4 3.4 0 0 1-1.187.781q-.657.282-1.5.282H2.53zm3.157 6.78c.53 0 .968-.155 1.28-.468.313-.312.47-.781.47-1.469v-1.281c0-.687-.157-1.156-.47-1.469-.312-.312-.75-.469-1.28-.469H4.344v5.157zm8.593 1.75a4.6 4.6 0 0 1-1.531-.25 3.1 3.1 0 0 1-1.156-.812 3.3 3.3 0 0 1-.75-1.344q-.282-.796-.281-1.874c0-.688.093-1.313.28-1.844q.236-.844.75-1.406a2.85 2.85 0 0 1 1.157-.844c.438-.188.969-.282 1.531-.282.781 0 1.406.157 1.906.47q.797.468 1.22 1.5l-1.563.812c-.125-.344-.281-.625-.531-.844-.22-.219-.563-.312-1.032-.312-.531 0-.969.156-1.281.53-.344.345-.5.845-.5 1.5v1.345c0 .656.156 1.156.5 1.53.313.345.75.5 1.281.5.438 0 .813-.124 1.063-.343.281-.25.469-.562.594-.906l1.5.875c-.313.625-.72 1.125-1.25 1.5-.5.344-1.125.5-1.907.5' />
    </g>
    <defs>
      <clipPath id='687f460fa31494fd9bcdc9e392e92454__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationMdBoldIcon);
export default ForwardRef;
