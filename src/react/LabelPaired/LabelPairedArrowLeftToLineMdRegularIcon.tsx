import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineMdRegularIcon = (
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
      <path d='M0 17.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5v11c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5m3.125-5.844 4-4a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L4.687 11.5H13.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H4.688l3.156 3.156a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0l-4-4a.53.53 0 0 1 0-.719' />
    </g>
    <defs>
      <clipPath id='83ec78e6ac53f385106dd6d7126196d4__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineMdRegularIcon);
export default ForwardRef;
