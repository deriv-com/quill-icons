import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M28.969 6.516c.562.28.797.937.515 1.5l-4.5 9c-.187.375-.562.609-1.03.609h-6.798l-5.672 11.39c-.28.563-.937.797-1.5.516l-9-4.5c-.562-.281-.796-.937-.515-1.5s.937-.797 1.5-.515L9.984 27l5.485-10.969a1.15 1.15 0 0 1 1.031-.656h6.797l4.172-8.344c.281-.562.937-.797 1.5-.515' />
    </g>
    <defs>
      <clipPath id='712f8aeb1f584e9037d72c1f680e206e__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpXlBoldIcon);
export default ForwardRef;
