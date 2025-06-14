import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.148 12.844a.56.56 0 0 1-.39.156h-3.32a.925.925 0 0 0-.938.938v3.124c0 .547.39.938.938.938h3.32c.117 0 .273.078.39.156l5.352 4.766V8.117zm5.43-6.094c.625 0 1.172.547 1.172 1.172v15.195c0 .625-.547 1.133-1.172 1.133-.312 0-.586-.078-.781-.273l.43-.47-.43.47-5.313-4.727H2.438A2.184 2.184 0 0 1 .25 17.063v-3.125c0-1.172.977-2.188 2.188-2.188h3.046l5.313-4.687a1.1 1.1 0 0 1 .781-.313m4.727 5.195L19 14.641l2.656-2.696a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L19.859 15.5l2.696 2.695a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L19 16.398l-2.695 2.696a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l2.696-2.695-2.696-2.656a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0' />
    </g>
    <defs>
      <clipPath id='d09f92e141631875d0ae4db6e1cd1e76__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkLgRegularIcon);
export default ForwardRef;
