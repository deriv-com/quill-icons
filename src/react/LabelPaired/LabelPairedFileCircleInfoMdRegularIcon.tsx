import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 19h7.25c.313.375.656.719 1.031 1H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h4.875c.375 0 .781.188 1.063.469l3.593 3.593c.281.282.469.688.469 1.063v1.094a3.5 3.5 0 0 0-1 .406V10H7.5A1.48 1.48 0 0 1 6 8.5V5H2c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1m8.969-10c-.031-.062-.063-.156-.125-.219L7.219 5.156c-.063-.062-.157-.093-.219-.125V8.5c0 .281.219.5.5.5zM17 15.5c0-1.25-.687-2.375-1.75-3-1.094-.656-2.437-.656-3.5 0a3.43 3.43 0 0 0-1.75 3c0 1.281.656 2.406 1.75 3.031 1.063.657 2.406.657 3.5 0A3.5 3.5 0 0 0 17 15.5m-8 0c0-1.594.844-3.062 2.25-3.875a4.46 4.46 0 0 1 4.5 0c1.375.813 2.25 2.281 2.25 3.875a4.54 4.54 0 0 1-2.25 3.906 4.46 4.46 0 0 1-4.5 0A4.47 4.47 0 0 1 9 15.5m4.5-1a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75m-1 3c0-.25.219-.5.5-.5v-1a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5V17c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1a.494.494 0 0 1-.5-.5' />
    </g>
    <defs>
      <clipPath id='49979e98308bc705917f9130caacc5a2__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoMdRegularIcon);
export default ForwardRef;
