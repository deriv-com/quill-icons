import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaybackSpeedLgFillIcon = (
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
      <path d='M19.688 15.5c0 4.96-3.711 9.023-8.438 9.61v-1.876c3.71-.586 6.563-3.828 6.563-7.734 0-3.867-2.852-7.11-6.563-7.695V5.89c4.727.625 8.438 4.687 8.438 9.609M5.43 9.172 4.063 7.844A9.86 9.86 0 0 1 8.75 5.89v1.914C7.5 8 6.367 8.469 5.43 9.172M3.633 10.93a7.8 7.8 0 0 0-1.367 3.32H.39c.195-1.719.898-3.32 1.914-4.648zm0 9.14-1.328 1.367C1.289 20.11.585 18.508.39 16.75h1.875c.195 1.25.664 2.383 1.367 3.32m1.797 1.797a7.9 7.9 0 0 0 3.32 1.367v1.875c-1.758-.195-3.36-.898-4.687-1.914zm2.226-11.562a.97.97 0 0 1 .977.078l6.25 4.375c.273.156.39.469.39.742 0 .313-.117.625-.39.781l-6.25 4.375a.97.97 0 0 1-.977.078c-.273-.156-.468-.507-.468-.859v-8.75c0-.312.195-.664.468-.82' />
    </g>
    <defs>
      <clipPath id='48c38d96f80f8c33d805b3a8f1df238c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaybackSpeedLgFillIcon);
export default ForwardRef;
