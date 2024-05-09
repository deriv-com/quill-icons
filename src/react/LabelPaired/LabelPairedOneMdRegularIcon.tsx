import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={24}
    viewBox='0 0 8 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 5.5V18h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-7a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h3V6.438l-2.25 1.5a.48.48 0 0 1-.687-.157.48.48 0 0 1 .156-.687l3-2a.57.57 0 0 1 .5-.032c.156.094.281.282.281.438' />
    </g>
    <defs>
      <clipPath id='2c6415b077080b9a5d7defd37361bf70__a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneMdRegularIcon);
export default ForwardRef;
