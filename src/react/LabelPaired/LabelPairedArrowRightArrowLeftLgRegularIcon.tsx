import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m17.555 10.969-3.75 3.75a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l2.696-2.695H.875A.617.617 0 0 1 .25 10.5c0-.312.273-.625.625-.625h14.727l-2.696-2.656a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l3.75 3.75a.66.66 0 0 1 0 .899M4.156 24.719l-3.75-3.75a.66.66 0 0 1 0-.899l3.75-3.75a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-2.696 2.656h14.766c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H2.359l2.696 2.695a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0' />
    </g>
    <defs>
      <clipPath id='dd72c4fcc70bb885aec357cd55f76248__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftLgRegularIcon);
export default ForwardRef;
