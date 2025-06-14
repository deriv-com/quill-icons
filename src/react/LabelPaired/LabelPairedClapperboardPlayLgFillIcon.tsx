import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlayLgFillIcon = (
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
      <path d='m17.695 6.79-4.922 4.92-.039.04H9.102l5-4.96.039-.04H17.5c.078 0 .117.04.195.04m-2.343 4.96 4.101-4.062c.313.43.547.976.547 1.562v2.5zm-7.5-5h3.632l-4.96 4.96-.04.04H2.852l5-4.96.039-.04zm-2.618 0-4.96 4.96-.04.04H0v-2.5c0-1.367 1.094-2.5 2.5-2.5zM0 13h20v8.75c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5zm8.438 2.578a.67.67 0 0 0-.313.547v5c0 .234.117.469.313.586.195.078.468.078.624-.04l3.75-2.5a.62.62 0 0 0 .313-.546.61.61 0 0 0-.312-.508l-3.75-2.5c-.157-.117-.43-.117-.626-.039' />
    </g>
    <defs>
      <clipPath id='838aaa0e80281250a4fe066b7a0d6e66__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlayLgFillIcon);
export default ForwardRef;
