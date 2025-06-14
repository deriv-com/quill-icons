import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.82 6.79C23.36 8.86 25 11.983 25 15.5c0 3.555-1.64 6.68-4.18 8.75a.974.974 0 0 1-1.328-.117c-.312-.43-.234-1.016.156-1.328a9.39 9.39 0 0 0 3.477-7.305c0-2.93-1.367-5.547-3.477-7.266-.39-.312-.468-.898-.156-1.328a.974.974 0 0 1 1.328-.117m-2.343 2.89v.039a7.46 7.46 0 0 1 2.773 5.82c0 2.344-1.094 4.414-2.773 5.82-.43.313-1.016.235-1.329-.156a.974.974 0 0 1 .118-1.328 5.52 5.52 0 0 0 2.109-4.375 5.5 5.5 0 0 0-2.11-4.336c-.39-.351-.468-.937-.117-1.328.313-.39.899-.469 1.329-.156m-2.383 2.93c.86.703 1.406 1.718 1.406 2.89 0 1.21-.547 2.227-1.406 2.93a.974.974 0 0 1-1.328-.117c-.313-.43-.235-1.016.156-1.329.43-.351.703-.898.703-1.484s-.273-1.094-.703-1.445c-.39-.313-.469-.899-.156-1.328a.974.974 0 0 1 1.328-.118m-9.883.78a.86.86 0 0 1-.586.235H2.188a.31.31 0 0 0-.313.313v3.124c0 .196.117.313.313.313h3.437c.195 0 .43.117.586.273l4.414 3.868V9.523zm5.117-6.64c.625 0 1.172.547 1.172 1.172v15.195c0 .625-.547 1.133-1.172 1.133-.312 0-.586-.078-.781-.273L5.234 19.25H2.188A2.184 2.184 0 0 1 0 17.063v-3.125c0-1.172.977-2.188 2.188-2.188h3.046l5.313-4.687a1.1 1.1 0 0 1 .781-.313' />
    </g>
    <defs>
      <clipPath id='94c5cc5ca44c681a018215d8c197c5e2__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighLgBoldIcon);
export default ForwardRef;
