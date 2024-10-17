import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownXlRegularIcon = (
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
      <path d='M1.5 8.25v16.5c0 1.266.984 2.25 2.25 2.25h19.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.75C1.64 28.5 0 26.86 0 24.75V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75m15.75 2.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h4.5c.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-2.672l-6.984 6.985c-.282.28-.797.28-1.078 0L9.75 15.328l-3.984 3.985c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l4.5-4.5a.78.78 0 0 1 .562-.234c.188 0 .375.094.516.234L13.5 16.97l6.422-6.469zm0 13.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h2.672l-3.235-3.187 1.079-1.079L21 21.47V18.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75z' />
    </g>
    <defs>
      <clipPath id='e42776fe1c4b1f6dfb6560e324f7343e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownXlRegularIcon);
export default ForwardRef;
