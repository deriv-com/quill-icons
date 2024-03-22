import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCheckMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 18.5h8c.25 0 .5-.219.5-.5V9H8c-.562 0-1-.437-1-1V5.5H2c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5M2 4h5.156c.532 0 1.032.219 1.407.594l2.843 2.843c.375.375.594.875.594 1.407V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m7.031 8.375-3.344 3.344a.775.775 0 0 1-1.062 0L2.969 14.03c-.313-.281-.313-.75 0-1.062.281-.281.75-.281 1.062 0l1.125 1.156 2.813-2.812c.281-.282.75-.282 1.062 0a.774.774 0 0 1 0 1.062' />
    </g>
    <defs>
      <clipPath id='98753d0f8f2ee711484ffbfbd8b35387__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCheckMdBoldIcon);
export default ForwardRef;
