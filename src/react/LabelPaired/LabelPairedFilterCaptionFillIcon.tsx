import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.07 4.79a.96.96 0 0 1 .867-.54h10.126c.351 0 .68.21.843.54a.98.98 0 0 1-.14 1.007L7.5 11.023V14a.73.73 0 0 1-.422.68.81.81 0 0 1-.797-.07l-1.5-1.126c-.187-.14-.281-.351-.281-.609v-1.852L.21 5.797a.98.98 0 0 1-.14-1.008' />
    </g>
    <defs>
      <clipPath id='10e091d0b4ed231bd9517474faa8bc53__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterCaptionFillIcon);
export default ForwardRef;
