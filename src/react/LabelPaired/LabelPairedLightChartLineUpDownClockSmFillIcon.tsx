import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.5c0-.465.383-.875.875-.875A.9.9 0 0 1 2 5.5v9.188c0 .246.191.437.438.437h6.726c.191.656.492 1.258.93 1.75H2.438A2.16 2.16 0 0 1 .25 14.688zm2.871 4.648L5.31 7.961a.843.843 0 0 1 1.23 0L8.125 9.52l2.434-2.434-.52-.52a.62.62 0 0 1-.164-.437c0-.328.273-.629.602-.629h2.46a.47.47 0 0 1 .438.438v2.46c0 .329-.3.602-.629.602a.62.62 0 0 1-.437-.164l-.52-.52-3.062 3.063a.843.843 0 0 1-1.23 0L5.936 9.82 4.353 11.38a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23m6.754 3.665c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m3.5-1.75v1.75c0 .246.191.437.438.437h1.312a.45.45 0 0 0 .438-.437.47.47 0 0 0-.438-.438h-.875v-1.312a.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438' />
    </g>
    <defs>
      <clipPath id='87ba128e4832e4b94e67342e40ad40ec__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockSmFillIcon);
export default ForwardRef;
