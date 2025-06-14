import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockMdFillIcon = (
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
      <path d='M0 6c0-.531.438-1 1-1 .531 0 1 .469 1 1v10.5c0 .281.219.5.5.5h7.688c.218.75.562 1.438 1.062 2H2.5A2.47 2.47 0 0 1 0 16.5zm3.281 5.313 2.5-2.5a.964.964 0 0 1 1.407 0L9 10.593l2.781-2.78-.594-.594a.7.7 0 0 1-.187-.5c0-.375.313-.719.688-.719H14.5c.25 0 .5.25.5.5v2.813c0 .374-.344.687-.719.687a.7.7 0 0 1-.5-.187l-.594-.594-3.5 3.5a.964.964 0 0 1-1.406 0L6.5 10.938l-1.812 1.78a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405M11 15.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m4-2v2c0 .281.219.5.5.5H17c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-1v-1.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='bdf7d2fb5051143e6cd38b45e92d9b2c__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockMdFillIcon);
export default ForwardRef;
