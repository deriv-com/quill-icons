import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownMdRegularIcon = (
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
      <path d='M1 5.5v11c0 .844.656 1.5 1.5 1.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-13A2.47 2.47 0 0 1 0 16.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5M11.5 7a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h3c.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V7.719l-4.656 4.656a.53.53 0 0 1-.719 0L6.5 10.219l-2.656 2.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l3-3A.52.52 0 0 1 6.5 9c.125 0 .25.063.344.156L9 11.312 13.281 7zm0 9a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1.781l-2.156-2.125.719-.719L14 14.312V12.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5z' />
    </g>
    <defs>
      <clipPath id='0734c931b591420207823043d7ebcb9e__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownMdRegularIcon);
export default ForwardRef;
