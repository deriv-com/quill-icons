import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornXlBoldIcon = (
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
      <path d='m20.25 9.469-.516.515A14.59 14.59 0 0 1 9.75 14.25v6.047c3.75.047 7.313 1.594 9.984 4.265l.516.516zM7.5 12h1.875c3.281 0 6.422-1.266 8.766-3.61l1.78-1.78c.938-.938 2.579-.282 2.579 1.077v6.75c.844.422 1.5 1.547 1.5 2.813 0 1.313-.656 2.438-1.5 2.86v6.75c0 1.359-1.64 2.015-2.578 1.078l-1.781-1.782c-2.25-2.25-5.25-3.562-8.391-3.61v4.829C9.75 28.828 8.531 30 7.125 30h-1.5A2.62 2.62 0 0 1 3 27.375V22.5c-1.687 0-3-1.312-3-3V15c0-1.64 1.313-3 3-3zM5.25 22.5v4.875c0 .234.14.375.375.375h1.5a.37.37 0 0 0 .375-.375V22.5zM3 14.25c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5v-6z' />
    </g>
    <defs>
      <clipPath id='06221c865389c78a5015681e598d2e3a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornXlBoldIcon);
export default ForwardRef;
