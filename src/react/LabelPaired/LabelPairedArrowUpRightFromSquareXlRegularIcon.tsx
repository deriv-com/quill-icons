import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareXlRegularIcon = (
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
      <path d='M15.75 6h7.5c.375 0 .75.375.75.75v7.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V8.578L11.016 20.063c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079L21.422 7.5H15.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75M3 7.5h6.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3c-.844 0-1.5.703-1.5 1.5V27c0 .844.656 1.5 1.5 1.5h16.5c.797 0 1.5-.656 1.5-1.5v-6.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V10.5c0-1.64 1.313-3 3-3' />
    </g>
    <defs>
      <clipPath id='2e7337a30423d63f4fb226ea45da1dbc__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareXlRegularIcon);
export default ForwardRef;
