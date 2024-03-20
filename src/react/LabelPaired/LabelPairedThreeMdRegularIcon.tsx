import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.5c0-.25.219-.5.5-.5H9a.46.46 0 0 1 .438.344.434.434 0 0 1-.126.531L3.75 11H6c2.188 0 4 1.813 4 4 0 2.219-1.812 4-4 4H2.781c-1.125 0-2.187-.625-2.687-1.656L.03 17.25a.513.513 0 0 1 .219-.687.513.513 0 0 1 .688.218l.062.125A1.97 1.97 0 0 0 2.781 18H6a3 3 0 0 0 0-6H2.5a.48.48 0 0 1-.469-.312.434.434 0 0 1 .125-.532L7.72 6H.5a.494.494 0 0 1-.5-.5' />
    </g>
    <defs>
      <clipPath id='e00c84346be3724d3f09dc440d7d9bd9__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeMdRegularIcon);
export default ForwardRef;
