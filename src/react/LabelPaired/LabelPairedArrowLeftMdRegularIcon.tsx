import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftMdRegularIcon = (
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
      <path d='m.125 11.656 5.5-5.5a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L1.688 11.5H13.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H1.688l4.656 4.656a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0l-5.5-5.5a.53.53 0 0 1 0-.719' />
    </g>
    <defs>
      <clipPath id='de97ab91535f4fc71717f0074888386f__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftMdRegularIcon);
export default ForwardRef;
