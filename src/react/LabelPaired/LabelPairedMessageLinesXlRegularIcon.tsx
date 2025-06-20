import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesXlRegularIcon = (
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
      <path d='M9 25.5v2.25l4.594-3.422a1.48 1.48 0 0 1 .89-.328H21c.797 0 1.5-.656 1.5-1.5V9c0-.797-.703-1.5-1.5-1.5H3c-.844 0-1.5.703-1.5 1.5v13.5c0 .844.656 1.5 1.5 1.5h4.5c.797 0 1.5.703 1.5 1.5M3 6h18c1.64 0 3 1.36 3 3v13.5c0 1.688-1.36 3-3 3h-6.516l-5.812 4.36c-.235.187-.516.187-.797.093-.234-.14-.375-.375-.375-.703V25.5H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m3.75 6.75h10.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H6.75A.74.74 0 0 1 6 13.5c0-.375.328-.75.75-.75m0 4.5h6c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-6A.74.74 0 0 1 6 18c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='27880f51ae96e6edc73f97079b4be984__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesXlRegularIcon);
export default ForwardRef;
