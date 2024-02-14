import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 6.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q1.25 13.195 1.25 15.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q7.617 24.211 10 24.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q12.383 6.789 10 6.75m0 18.75q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328m-3.125-15H12.5q.43.039.586.39.117.43-.195.704L9.805 14.25h.78q1.369 0 2.227.898.9.9.938 2.227-.039 1.328-.937 2.227-.86.858-2.188.898H9.219q-1.72-.04-2.735-1.367l-.117-.117q-.313-.508.117-.899.508-.273.899.156l.078.118q.665.86 1.758.859h1.406q.78 0 1.328-.547.508-.546.547-1.328-.039-.82-.547-1.328a1.8 1.8 0 0 0-1.328-.547h-2.5q-.43-.039-.586-.39-.117-.43.195-.704l3.086-2.656H6.875q-.585-.039-.625-.625.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='64b19b70239ea5cd84e4ef7705229b6c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeLgRegularIcon);
export default ForwardRef;
