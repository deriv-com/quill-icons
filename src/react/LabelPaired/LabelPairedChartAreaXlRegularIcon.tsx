import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaXlRegularIcon = (
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
      <path d='M1.5 8.25v16.5c0 1.266.984 2.25 2.25 2.25h19.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.75C1.64 28.5 0 26.86 0 24.75V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75m12.422 7.828L10.5 12.656l-4.312 4.266c-.141.14-.188.328-.188.515V22.5h15v-4.406c0-.188-.094-.328-.187-.469l-2.907-3.422-1.875 1.875A1.45 1.45 0 0 1 15 16.5c-.422 0-.797-.14-1.078-.422m0-2.11L15 15l1.031-1.031.797-.797c.61-.61 1.64-.563 2.203.094l2.907 3.375c.328.422.562.937.562 1.453V22.5c0 .844-.703 1.5-1.5 1.5H6a1.48 1.48 0 0 1-1.5-1.5v-5.062c0-.563.234-1.172.656-1.594l4.266-4.266c.562-.562 1.547-.562 2.11 0z' />
    </g>
    <defs>
      <clipPath id='4076d10b5d44c77f7648c4313c81c712__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaXlRegularIcon);
export default ForwardRef;
