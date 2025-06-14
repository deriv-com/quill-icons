import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.844 5.188c.187.187.187.5-.031.687l-5.5 5a.49.49 0 0 1-.688 0L5.938 7.156.78 10.906a.467.467 0 0 1-.687-.094c-.188-.218-.125-.53.094-.718l5.5-4c.187-.125.468-.094.656.062L10 9.813l5.156-4.657a.465.465 0 0 1 .688.032M2.5 17.5v-2c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v2c0 .281.219.5.5.5.25 0 .5-.219.5-.5M2 14c.813 0 1.5.688 1.5 1.5v2A1.5 1.5 0 0 1 2 19a1.48 1.48 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 2 14m4.5-1.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v5c0 .281.219.5.5.5.25 0 .5-.219.5-.5zm-2 0A1.5 1.5 0 0 1 6 11c.813 0 1.5.688 1.5 1.5v5A1.5 1.5 0 0 1 6 19a1.48 1.48 0 0 1-1.5-1.5zm6 5v-3c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5.25 0 .5-.219.5-.5M10 13c.813 0 1.5.688 1.5 1.5v3A1.5 1.5 0 0 1 10 19a1.48 1.48 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 10 13m4.5-.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v5c0 .281.219.5.5.5.25 0 .5-.219.5-.5zm-2 0A1.5 1.5 0 0 1 14 11c.813 0 1.5.688 1.5 1.5v5A1.5 1.5 0 0 1 14 19a1.48 1.48 0 0 1-1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='6214927de8abb17237e1a65cf40769f1__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedMdRegularIcon);
export default ForwardRef;
