import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaybackSpeedLgRegularIcon = (
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
      <path d='M19.375 15.5c0 4.766-3.555 8.71-8.125 9.297v-1.25c3.867-.586 6.875-3.985 6.875-8.047s-3.008-7.422-6.875-8.008v-1.25c4.57.586 8.125 4.531 8.125 9.258M5.195 8.938l-.898-.86A8.9 8.9 0 0 1 8.75 6.242v1.25a8 8 0 0 0-3.555 1.446m-1.758 1.796a7.63 7.63 0 0 0-1.484 3.516H.703A8.9 8.9 0 0 1 2.54 9.836zm0 9.57-.898.9A8.9 8.9 0 0 1 .703 16.75h1.25a7.6 7.6 0 0 0 1.485 3.555m5.313 3.243v1.25a8.9 8.9 0 0 1-4.453-1.836l.898-.898a7.6 7.6 0 0 0 3.555 1.484m-.937-12.969c.195-.117.468-.078.664.04l6.25 4.374A.67.67 0 0 1 15 15.5c0 .234-.117.43-.273.547l-6.25 4.375a.8.8 0 0 1-.665.039.69.69 0 0 1-.312-.586v-8.75c0-.234.117-.43.313-.547m.937 1.758v6.367l4.531-3.203z' />
    </g>
    <defs>
      <clipPath id='4674774edf8f9acc9c3655b930d3eb0d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaybackSpeedLgRegularIcon);
export default ForwardRef;
