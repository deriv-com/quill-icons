import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveLgRegularIcon = (
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
      <path d='M10 6.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q1.25 13.195 1.25 15.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q7.617 24.211 10 24.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q12.383 6.789 10 6.75m0 18.75q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328m-1.875-15H12.5q.585.039.625.625-.039.585-.625.625H8.633l-.664 2.578 3.125.313q1.172.156 1.914.937.703.82.742 1.992-.039 1.251-.86 2.07-.819.82-2.07.86H9.102q-1.72-.04-2.696-1.406l-.039-.117q-.273-.508.156-.86.508-.273.86.156l.078.118q.585.82 1.64.859h1.72q.703 0 1.171-.508.508-.468.508-1.172 0-.663-.43-1.133a1.7 1.7 0 0 0-1.093-.546L7.109 15.5a.6.6 0 0 1-.43-.273.59.59 0 0 1-.077-.508l.937-3.75q.118-.43.586-.469' />
    </g>
    <defs>
      <clipPath id='81c056b6eb55ca7556db72f611b566ab__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveLgRegularIcon);
export default ForwardRef;
