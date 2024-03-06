import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardMdFillIcon = (
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
      <path d='M14.375 17.781 9 13.313v-2.625l5.375-4.47q.47-.374 1.063-.124.53.281.562.906v10q-.03.626-.562.906-.594.25-1.063-.125M8 15v2q-.03.626-.562.906-.594.25-1.063-.125l-6-5A.98.98 0 0 1 0 12q0-.469.375-.781l6-5q.47-.375 1.063-.125.53.281.562.906v8' />
    </g>
    <defs>
      <clipPath id='a765ce328a228e847dafe824571318b4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardMdFillIcon);
export default ForwardRef;
