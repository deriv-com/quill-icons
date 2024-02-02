import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 8.25v16.5q.047.937.656 1.594.657.61 1.594.656h19.5q.704.046.75.75-.046.704-.75.75H3.75q-1.593-.046-2.672-1.078Q.047 26.343 0 24.75V8.25q.047-.703.75-.75.704.046.75.75m13.5 0v2.297q.657.14 1.078.656.422.469.422 1.172v3.75q-.093 1.453-1.5 1.828v2.297q-.047.704-.75.75-.703-.046-.75-.75v-2.297a1.86 1.86 0 0 1-1.078-.656Q12 16.828 12 16.125v-3.75q.095-1.453 1.5-1.828V8.25q.047-.703.75-.75.703.046.75.75M8.25 9q.703.047.75.75v2.297q.657.14 1.078.656.422.469.422 1.172v5.25q-.093 1.453-1.5 1.828v2.297q-.047.704-.75.75-.703-.046-.75-.75v-2.297a1.86 1.86 0 0 1-1.078-.656Q6 19.828 6 19.125v-5.25q.095-1.453 1.5-1.828V9.75q.046-.703.75-.75M15 12.375q-.047-.328-.375-.375h-.75q-.328.047-.375.375v3.75q.047.329.375.375h.75q.328-.046.375-.375zm4.875 4.125q-.329.046-.375.375v2.25q.046.329.375.375h.75q.329-.046.375-.375v-2.25q-.046-.329-.375-.375zM19.5 15v-2.25q.046-.703.75-.75.704.047.75.75v2.297q.657.14 1.078.656.422.469.422 1.172v2.25q-.093 1.453-1.5 1.828v2.297q-.046.704-.75.75-.704-.046-.75-.75v-2.297a1.86 1.86 0 0 1-1.078-.656Q18 19.828 18 19.125v-2.25q.094-1.453 1.5-1.828zM8.625 13.5h-.75q-.328.047-.375.375v5.25q.046.329.375.375h.75q.328-.046.375-.375v-5.25q-.047-.328-.375-.375' />
    </g>
    <defs>
      <clipPath id='b53ca89d485dc33d__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickXlRegularIcon);
export default ForwardRef;
