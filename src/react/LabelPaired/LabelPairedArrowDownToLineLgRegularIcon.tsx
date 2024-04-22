import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.625 24.25A.617.617 0 0 1 0 23.625C0 23.313.273 23 .625 23h13.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625zm7.305-3.906a.66.66 0 0 1-.899 0l-5-5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l3.945 3.946V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625V18.39l3.906-3.945a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899z' />
    </g>
    <defs>
      <clipPath id='fc31f7ed1c3f3692446eb62217ebe69a__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineLgRegularIcon);
export default ForwardRef;
