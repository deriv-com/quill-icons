import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m13.844 8.375-3 3a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L12.281 8.5H.5A.494.494 0 0 1 0 8c0-.25.219-.5.5-.5h11.781l-2.156-2.125a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0l3 3a.53.53 0 0 1 0 .719m-10.719 11-3-3a.53.53 0 0 1 0-.719l3-3a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L1.688 15.5H13.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H1.688l2.156 2.156a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0' />
    </g>
    <defs>
      <clipPath id='bca106ad052100f9fd72d143cd81b19d__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftMdRegularIcon);
export default ForwardRef;
