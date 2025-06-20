import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightMdRegularIcon = (
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
      <path d='M8 4c.25 0 .5.25.5.5V7c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V4.5c0-.25.219-.5.5-.5m-8 8c0-.25.219-.5.5-.5H3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5A.494.494 0 0 1 0 12m12.5 0c0-.25.219-.5.5-.5h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H13a.494.494 0 0 1-.5-.5M8 16.5c.25 0 .5.25.5.5v2.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V17c0-.25.219-.5.5-.5M2.344 6.344a.49.49 0 0 1 .687 0l1.781 1.781c.188.188.188.5 0 .719a.53.53 0 0 1-.718 0l-1.75-1.781c-.219-.188-.219-.5 0-.72m0 11.312a.442.442 0 0 1 0-.687l1.75-1.782a.53.53 0 0 1 .718 0 .53.53 0 0 1 0 .72l-1.78 1.75a.442.442 0 0 1-.688 0m8.812-8.812c-.187-.219-.187-.531 0-.719l1.781-1.781c.188-.188.5-.188.72 0 .187.218.187.531 0 .718l-1.782 1.782c-.187.187-.5.187-.719 0m0 6.344c.219-.188.531-.188.719 0l1.781 1.78a.49.49 0 0 1 0 .688c-.219.219-.531.219-.719 0l-1.78-1.75a.53.53 0 0 1 0-.719M10.5 12c0-.875-.5-1.687-1.25-2.156-.781-.438-1.75-.438-2.5 0-.781.469-1.25 1.281-1.25 2.156 0 .906.469 1.719 1.25 2.188.75.437 1.719.437 2.5 0 .75-.47 1.25-1.282 1.25-2.188m-6 0c0-1.25.656-2.375 1.75-3 1.063-.656 2.406-.656 3.5 0 1.063.625 1.75 1.75 1.75 3a3.5 3.5 0 0 1-1.75 3.031c-1.094.656-2.437.656-3.5 0A3.44 3.44 0 0 1 4.5 12' />
    </g>
    <defs>
      <clipPath id='c8979b4949b0d29fd036e14e53699976__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightMdRegularIcon);
export default ForwardRef;
