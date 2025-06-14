import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSixSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7-.437c.465 0 .875.273 1.121.656.246.41.246.93 0 1.312-.246.41-.656.656-1.121.656a1.31 1.31 0 0 1-1.148-.656c-.247-.383-.247-.902 0-1.312.246-.383.656-.656 1.148-.656m-2.625 1.312a2.626 2.626 0 0 0 5.25 0c0-1.203-.82-2.215-1.914-2.516l.793-.683a.68.68 0 0 0 .082-.93.68.68 0 0 0-.93-.082L5.414 9.328a3.07 3.07 0 0 0-1.039 2.297' />
    </g>
    <defs>
      <clipPath id='03924c60031fba00e49b54fd23c96a02__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSixSmFillIcon);
export default ForwardRef;
